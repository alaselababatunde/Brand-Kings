import os

filepath = '/home/alash-studios/Music/Test/css/global.css'
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# I want to find the section between .nav-cta and the first valid ruleset following the mess.
# Actually, I'll just rewrite the whole section from line 223 to line 350 (approx) with clean code.
# Based on my view_file output:
# Line 313 is the end of .nav-cta { ... }
# Then the mess starts.

new_lines = []
skip = False
for i, line in enumerate(lines):
    # Starting from line 314 (index 313)
    if i == 314:
        # Check if it's the mess I saw
        if 'box-shadow' in line or 'z-index' in line or 'margin-top' in line:
            skip = True
    
    # Stop skipping when we hit the next valid rule (likely line 335+)
    if skip and '.nav-hamburger' in line:
        skip = False
    
    if not skip:
        new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("CSS Cleaned.")
