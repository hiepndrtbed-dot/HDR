import subprocess
import hashlib
from uuid import getnode
import os
import tempfile

def get_machine_id():
    try:
        cmd = 'powershell -Command "(Get-CimInstance Win32_ComputerSystemProduct).UUID"'
        output = subprocess.check_output(cmd, shell=True)
        uuid = output.decode().strip()

        if uuid and "FFFF" not in uuid:
            return uuid.upper()
    except:
        pass

    return str(getnode())


if __name__ == "__main__":
    raw_id = get_machine_id()
    hashed = hashlib.sha256(raw_id.encode()).hexdigest()

    # Ghi file vào TEMP của Windows
    temp_path = os.path.join(tempfile.gettempdir(), "machine_hash.txt")

    with open(temp_path, "w") as f:
        f.write(hashed)