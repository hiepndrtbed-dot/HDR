import requests

VERSION_URL = "https://raw.githubusercontent.com/hiepndrtbed-dot/HDR/main/HDR/update/version.json"

print("STEP 1")

remote_data = requests.get(VERSION_URL).json()

print("STEP 2")

print(remote_data)

print("STEP 3")

print("version =", remote_data["version"])

print("STEP 4")

print("zip =", remote_data["zip"])

input("Press Enter...")