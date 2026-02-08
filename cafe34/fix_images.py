import shutil
import os
import glob

# Define source and destination
source_dir = r"C:\Users\uygrg\.gemini\antigravity\brain\743a02d6-d1d6-4f73-b687-2d384f36deb9"
dest_dir = r"c:\Users\uygrg\OneDrive\Masaüstü\Personol Web PAge\cafe34\assets\images"

# Ensure destination exists
os.makedirs(dest_dir, exist_ok=True)

# List of files to find (using glob pattern for simpler matching if names vary slightly, or direct names)
patterns = ["logo*.png", "banner*.png", "baklava*.png", "cheesecake*.png", "tiramisu*.png", "souffle*.png", "magnolia*.png", "profiterole*.png", "sutlac*.png"]

print(f"Starting copy from {source_dir} to {dest_dir}")

for pattern in patterns:
    search_path = os.path.join(source_dir, pattern)
    files = glob.glob(search_path)
    for file_path in files:
        try:
            # Determine new filename (remove timestamp for clean usage in HTML)
            filename = os.path.basename(file_path)
            new_name = filename.split('_')[0] + ".png" # assumes format name_timestamp.png
            
            dest_path = os.path.join(dest_dir, new_name)
            shutil.copy2(file_path, dest_path)
            print(f"Successfully copied: {filename} -> {new_name}")
        except Exception as e:
            print(f"Error copying {file_path}: {e}")

print("Copy process finished.")
