import hashlib
import os
import sys

base_dir = os.path.dirname(os.path.abspath(sys.argv[0]))
input_file = os.path.join(base_dir, "input.txt")
output_file = os.path.join(base_dir, "hash_result.txt")

if os.path.exists(input_file):

    with open(input_file, "r", encoding="utf-8") as f:
        text = f.read().strip()

    hashed = hashlib.sha256(text.encode()).hexdigest()

    with open(output_file, "w") as f:
        f.write(hashed)