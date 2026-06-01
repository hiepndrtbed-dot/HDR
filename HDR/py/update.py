import os
import sys
import json
import shutil
import zipfile
import tempfile
import requests

# ==================================================
# CONFIG
# ==================================================

VERSION_URL = "https://raw.githubusercontent.com/hiepndrtbed-dot/HDR/main/HDR/update/version.json"

REPO_ZIP_URL = "https://codeload.github.com/hiepndrtbed-dot/HDR/zip/refs/heads/main"

REPLACE_FOLDERS = [
    "Action",
    "Data",
    "json",
    "jsxbin"
]

SKIP_FILES = [
    "local_version.json"
]

# ==================================================
# ROOT DETECTION
# ==================================================

def find_root():

    if getattr(sys, "frozen", False):
        base_path = os.path.dirname(sys.executable)
    else:
        base_path = os.path.dirname(os.path.abspath(__file__))

    current = base_path

    for _ in range(6):

        if (
            os.path.exists(os.path.join(current, "Action")) and
            os.path.exists(os.path.join(current, "Data")) and
            os.path.exists(os.path.join(current, "json")) and
            os.path.exists(os.path.join(current, "jsxbin"))
        ):
            return current

        current = os.path.dirname(current)

    raise Exception("Cannot find HDR root folder")

ROOT_DIR = find_root()

# ==================================================
# PATHS
# ==================================================

TEMP_DIR = os.path.join(
    tempfile.gettempdir(),
    "HDR_UPDATE"
)

ZIP_PATH = os.path.join(
    TEMP_DIR,
    "repo.zip"
)

EXTRACT_DIR = os.path.join(
    TEMP_DIR,
    "extract"
)

LOCAL_VERSION_FILE = os.path.join(
    ROOT_DIR,
    "local_version.json"
)

# ==================================================
# LOG
# ==================================================

def log(msg):
    print("[UPDATE]", msg)

# ==================================================
# VERSION
# ==================================================

def version_tuple(v):

    try:
        return tuple(map(int, v.split(".")))
    except:
        return (0, 0, 0)


def load_local_version():

    if not os.path.exists(LOCAL_VERSION_FILE):
        return "0.0.0"

    try:

        with open(
            LOCAL_VERSION_FILE,
            "r",
            encoding="utf-8"
        ) as f:

            data = json.load(f)

        return data.get("version", "0.0.0")

    except:
        return "0.0.0"

# ==================================================
# DOWNLOAD
# ==================================================

def download_file(url, path):

    if os.path.exists(path):
        os.remove(path)

    r = requests.get(
        url,
        stream=True,
        timeout=300
    )

    r.raise_for_status()

    with open(path, "wb") as f:

        for chunk in r.iter_content(8192):

            if chunk:
                f.write(chunk)

# ==================================================
# BACKUP
# ==================================================

def backup():

    backup_dir = os.path.join(
        TEMP_DIR,
        "backup"
    )

    if os.path.exists(backup_dir):
        shutil.rmtree(backup_dir)

    os.makedirs(
        backup_dir,
        exist_ok=True
    )

    for folder in REPLACE_FOLDERS:

        src = os.path.join(ROOT_DIR, folder)

        if not os.path.exists(src):
            continue

        dst = os.path.join(
            backup_dir,
            folder
        )

        log("Backup: " + folder)

        shutil.copytree(src, dst)

# ==================================================
# COPY FOLDER
# ==================================================

def copy_folder_contents(src, dst):

    if not os.path.exists(src):
        return

    os.makedirs(
        dst,
        exist_ok=True
    )

    for item in os.listdir(src):

        s = os.path.join(src, item)
        d = os.path.join(dst, item)

        if os.path.isdir(s):

            if os.path.exists(d):
                shutil.rmtree(d)

            shutil.copytree(s, d)

        else:

            shutil.copy2(s, d)

# ==================================================
# FIND HDR IN ZIP
# ==================================================

def find_source_dir():

    for root, dirs, files in os.walk(EXTRACT_DIR):

        if (
            os.path.exists(os.path.join(root, "Action")) and
            os.path.exists(os.path.join(root, "Data")) and
            os.path.exists(os.path.join(root, "json")) and
            os.path.exists(os.path.join(root, "jsxbin"))
        ):
            return root

    return None

# ==================================================
# REPLACE
# ==================================================

def replace(source_dir):

    # --------------------------------
    # Replace folders
    # --------------------------------

    for folder in REPLACE_FOLDERS:

        src = os.path.join(
            source_dir,
            folder
        )

        if not os.path.exists(src):
            log("Skip folder: " + folder)
            continue

        dst = os.path.join(
            ROOT_DIR,
            folder
        )

        log("Replace folder: " + folder)

        if os.path.exists(dst):
            shutil.rmtree(dst)

        copy_folder_contents(src, dst)

    # --------------------------------
    # Replace root files
    # --------------------------------

    for item in os.listdir(source_dir):

        src = os.path.join(
            source_dir,
            item
        )

        if os.path.isdir(src):
            continue

        if item in SKIP_FILES:
            continue

        dst = os.path.join(
            ROOT_DIR,
            item
        )

        log("Replace file: " + item)

        shutil.copy2(src, dst)

# ==================================================
# MAIN
# ==================================================

def main():

    log("ROOT = " + ROOT_DIR)

    os.makedirs(
        TEMP_DIR,
        exist_ok=True
    )

    # --------------------------------
    # Local version
    # --------------------------------

    local_version = load_local_version()

    log(
        "Local Version: " +
        local_version
    )

    # --------------------------------
    # Remote version
    # --------------------------------

    log("Download version.json")

    data = requests.get(
        VERSION_URL,
        timeout=30
    ).json()

    remote_version = data["version"]

    log(
        "Remote Version: " +
        remote_version
    )

    # --------------------------------
    # Check version
    # --------------------------------

    if (
        version_tuple(remote_version)
        <=
        version_tuple(local_version)
    ):

        log("Already latest")
        return

    # --------------------------------
    # Download ZIP
    # --------------------------------

    log("Download GitHub ZIP...")

    download_file(
        REPO_ZIP_URL,
        ZIP_PATH
    )

    log("ZIP downloaded")

    # --------------------------------
    # Extract ZIP
    # --------------------------------

    if os.path.exists(EXTRACT_DIR):
        shutil.rmtree(EXTRACT_DIR)

    os.makedirs(
        EXTRACT_DIR,
        exist_ok=True
    )

    log("Extract ZIP...")

    with zipfile.ZipFile(
        ZIP_PATH,
        "r"
    ) as z:

        z.extractall(EXTRACT_DIR)

    log("Extract done")

    # --------------------------------
    # Find HDR source
    # --------------------------------

    SOURCE_DIR = find_source_dir()

    if SOURCE_DIR is None:
        raise Exception(
            "Cannot find HDR folder in ZIP"
        )

    log("SOURCE = " + SOURCE_DIR)

    # --------------------------------
    # Backup
    # --------------------------------

    backup()

    # --------------------------------
    # Replace
    # --------------------------------

    replace(SOURCE_DIR)

    # --------------------------------
    # Update local version
    # --------------------------------

    with open(
        LOCAL_VERSION_FILE,
        "w",
        encoding="utf-8"
    ) as f:

        json.dump(
            {
                "version": remote_version
            },
            f,
            indent=4
        )

    log("Update Success")

# ==================================================
# START
# ==================================================

if __name__ == "__main__":

    try:

        main()

        print("\nUPDATE SUCCESS")

    except Exception:

        import traceback

        print("\nUPDATE FAILED")

        traceback.print_exc()

    input("\nPress Enter...")