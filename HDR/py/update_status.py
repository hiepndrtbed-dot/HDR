import os
import sys
import subprocess
import requests
import hashlib
from datetime import datetime
from uuid import getnode

os.chdir(os.path.dirname(sys.argv[0]))

URL = "https://script.google.com/macros/s/AKfycbwKSF9848A3fXps2Zf3_GBq_dDSfoPOrjU8I-Wh9MXRgk4BNWhRZNpN5bwHP4AR6nCd-Q/exec"


# ===============================
# LẤY MACHINE ID ỔN ĐỊNH MỌI WIN
# ===============================
def get_machine_id():

    # 1️⃣ Ưu tiên PowerShell (Win 7+)
    try:
        cmd = 'powershell -Command "(Get-CimInstance Win32_ComputerSystemProduct).UUID"'
        output = subprocess.check_output(cmd, shell=True)
        uuid = output.decode().strip()

        if uuid and "FFFF" not in uuid:
            return uuid.upper()
    except:
        pass

    # 2️⃣ Thử WMIC (Win cũ)
    try:
        output = subprocess.check_output(
            "wmic csproduct get uuid",
            shell=True
        ).decode().split("\n")

        uuid = output[1].strip()
        if uuid and "FFFF" not in uuid:
            return uuid.upper()
    except:
        pass

    # 3️⃣ Fallback MAC address
    mac = str(getnode())
    return mac


def update_status(user: str, status: int):

    raw_id = get_machine_id()

    # 🔐 Khuyến nghị: hash để không lộ UUID thật
    computer_id = hashlib.sha256(raw_id.encode()).hexdigest()

    today = datetime.now().date().isoformat()

    try:
        r = requests.get(URL)
        r.raise_for_status()
        data = r.json()

        sheet_data = None
        for acc in data.get("accounts", []):
            if acc.get("User") == user:
                sheet_data = acc
                break

        if not sheet_data:
            print(f"❌ Không tìm thấy user {user} trên Sheet.")
            return False

    except Exception as e:
        print(f"❌ Lỗi lấy dữ liệu Sheet: {e}")
        return False

    if not sheet_data.get("ActivationDate"):
        sheet_data["ActivationDate"] = today
        print(f"✅ Kích hoạt lần đầu cho {user}: {today}")

    sheet_data["Status"] = status
    sheet_data["UserComputer"] = computer_id if status == 1 else ""

    try:
        r2 = requests.post(URL, json=sheet_data)
        r2.raise_for_status()
        print("✅ Sheet updated:", r2.text)
        return True
    except Exception as e:
        print(f"❌ Không update được Sheet: {e}")
        return False


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("❌ Vui lòng nhập: python update_status.py <user> <status>")
        sys.exit(1)

    user = sys.argv[1]
    status = int(sys.argv[2])
    update_status(user, status)