import re

file_path = '/home/vitor/Área de trabalho/INFINIT/Drhellem/css/landing.css'

with open(file_path, 'r') as f:
    content = f.read()

# Replace mat-thumb backgrounds
content = content.replace('.mat-thumb.bg-teal  { background: linear-gradient(135deg, #d4eef0, #a8dde2); }', '.mat-thumb.bg-teal  { background: linear-gradient(135deg, var(--white), var(--blue-soft)); }')
content = content.replace('.mat-thumb.bg-lilac { background: linear-gradient(135deg, #f0e4f8, #dbb8ef); }', '.mat-thumb.bg-lilac { background: linear-gradient(135deg, var(--pink-bg), var(--purple-light)); }')
content = content.replace('.mat-thumb.bg-mint  { background: linear-gradient(135deg, #e0ecf5, #b8d6ea); }', '.mat-thumb.bg-mint  { background: linear-gradient(135deg, var(--white), var(--blue-soft)); }')
content = content.replace('.mat-thumb.bg-peach { background: linear-gradient(135deg, #f5e4f5, #e8c4e8); }', '.mat-thumb.bg-peach { background: linear-gradient(135deg, var(--white), var(--pink-bg)); }')
content = content.replace('.mat-thumb.bg-rose  { background: linear-gradient(135deg, #f8e0f0, #f0b8d8); }', '.mat-thumb.bg-rose  { background: linear-gradient(135deg, var(--pink-bg), var(--purple-light)); }')
content = content.replace('.mat-thumb.bg-sky   { background: linear-gradient(135deg, #d8edf8, #b0d4f0); }', '.mat-thumb.bg-sky   { background: linear-gradient(135deg, var(--pink-bg), var(--blue-soft)); }')

# Replace bg-mint, bg-rose
content = content.replace('.bg-mint  { background: #e8f0f8; }', '.bg-mint  { background: var(--white); border: 1px solid var(--blue-soft); }')
content = content.replace('.bg-rose  { background: #f8e0f0; }', '.bg-rose  { background: var(--pink-bg); }')

# Replace footer bg
content = content.replace('background: #1a1a24;', 'background: var(--dark);')

with open(file_path, 'w') as f:
    f.write(content)

print("Backgrounds replaced")
