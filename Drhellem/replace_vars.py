import re

file_path = '/home/vitor/Área de trabalho/INFINIT/Drhellem/css/landing.css'

with open(file_path, 'r') as f:
    content = f.read()

# Replace :root block
root_pattern = re.compile(r':root\s*\{.*?\n\}', re.DOTALL)

new_root = """:root {
  --pink-bg: #E9D4E8;
  --purple: #B85FD1;
  --purple-light: #D99BE8;
  --blue-main: #1697A6;
  --blue-soft: #79CBCD;
  --blue-deep: #127f8c;
  --dark: #1F1F1F;
  --white: #FFFFFF;
  --text: #3a3a3a;
  --light-text: #7a7a8a;
}"""

content = root_pattern.sub(new_root, content)

# Variable replacements
replacements = {
    'var(--teal)': 'var(--blue-main)',
    'var(--teal-light)': 'var(--blue-soft)',
    'var(--teal-pale)': 'var(--pink-bg)',
    'var(--teal-deep)': 'var(--blue-deep)',
    'var(--lilac)': 'var(--purple-light)',
    'var(--lilac-pale)': 'var(--pink-bg)',
    'var(--lilac-mid)': 'var(--purple)',
    'var(--peach)': 'var(--purple-light)',
    'var(--peach-pale)': 'var(--pink-bg)',
    'var(--mint-pale)': 'var(--white)',
    'var(--cream)': 'var(--white)',
    'var(--baby-blue)': 'var(--blue-soft)'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open(file_path, 'w') as f:
    f.write(content)

print("Replacement successful")
