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

REPLACE_ITEMS = [
    "Action",
    "Data",
    "json",
    "jsxbin"
]

# ==================================================
# ROOT DETECTION (IMPORTANT FIX)
# ==================================================

def find_root():

    # path của file đang chạy
    if getattr(sys, "frozen", False):
        # chạy EXE
        base_path = os.path.dirname(sys.executable)
    else:
        # chạy PY
        base_path = os.path.dirname(os.path.abspath(__file__))

    # nếu đang ở dist hoặc py → đi lên tìm HDR
    current = base_path

    for _ in range(5):

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

ZIP_PATH = os.path.join(TEMP_DIR, "update.zip")
EXTRACT_DIR = os.path.join(TEMP_DIR, "extract")

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
    return tuple(map(int, v.split(".")))


def load_local_version():

    if not os.path.exists(LOCAL_VERSION_FILE):
        return "0.0.0"

    try:
        with open(LOCAL_VERSION_FILE, "r", encoding="utf-8") as f:
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

    r = requests.get(url, stream=True, timeout=120)
    r.raise_for_status()

    with open(path, "wb") as f:
        for chunk in r.iter_content(8192):
            if chunk:
                f.write(chunk)

# ==================================================
# BACKUP
# ==================================================

def backup():

    backup_dir = os.path.join(TEMP_DIR, "backup")

    if os.path.exists(backup_dir):
        shutil.rmtree(backup_dir)

    os.makedirs(backup_dir, exist_ok=True)

    for item in REPLACE_ITEMS:

        src = os.path.join(ROOT_DIR, item)
        dst = os.path.join(backup_dir, item)

        if os.path.exists(src):
            log("Backup: " + item)
            shutil.copytree(src, dst)

# ==================================================
# COPY FIX (NO NEST FOLDER BUG)
# ==================================================

def copy_folder_contents(src, dst):

    if not os.path.exists(src):
        return

    os.makedirs(dst, exist_ok=True)

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
# REPLACE
# ==================================================

def replace():

    # =========================
    # 1. REPLACE FOLDERS
    # =========================

    for item in REPLACE_ITEMS:

        src = os.path.join(EXTRACT_DIR, item)
        dst = os.path.join(ROOT_DIR, item)

        if not os.path.exists(src):
            log("Skip folder: " + item)
            continue

        log("Replace folder: " + item)

        if os.path.exists(dst):
            shutil.rmtree(dst)

        copy_folder_contents(src, dst)

    # =========================
    # 2. REPLACE ROOT FILES
    # =========================

    for item in os.listdir(EXTRACT_DIR):

        src = os.path.join(EXTRACT_DIR, item)

        # bỏ qua thư mục
        if os.path.isdir(src):
            continue

        dst = os.path.join(ROOT_DIR, item)

        log("Replace file: " + item)

        shutil.copy2(src, dst)

# ==================================================
# MAIN
# ==================================================

def main():

    log("ROOT = " + ROOT_DIR)

    os.makedirs(TEMP_DIR, exist_ok=True)

    # -------------------------
    # local version
    # -------------------------

    local_version = load_local_version()
    log("Local Version: " + local_version)

    # -------------------------
    # remote version
    # -------------------------

    log("Download version.json")

    data = requests.get(VERSION_URL, timeout=30).json()

    remote_version = data["version"]
    zip_url = data["zip"]

    log("Remote Version: " + remote_version)

    # -------------------------
    # check version
    # -------------------------

    if version_tuple(remote_version) <= version_tuple(local_version):
        log("Already latest")
        return

    # -------------------------
    # download
    # -------------------------

    log("Download ZIP...")
    download_file(zip_url, ZIP_PATH)
    log("ZIP downloaded")

    # -------------------------
    # extract
    # -------------------------

    if os.path.exists(EXTRACT_DIR):
        shutil.rmtree(EXTRACT_DIR)

    os.makedirs(EXTRACT_DIR, exist_ok=True)

    log("Extract ZIP...")

    with zipfile.ZipFile(ZIP_PATH, "r") as z:
        z.extractall(EXTRACT_DIR)

    log("Extract done")

    # -------------------------
    # backup
    # -------------------------

    backup()

    # -------------------------
    # replace
    # -------------------------

    replace()

    # -------------------------
    # update version
    # -------------------------

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
    except Exception as e:
        import traceback
        print("\nUPDATE FAILED")
        traceback.print_exc()

    input("\nPress Enter...")