#!/usr/bin/env python3
import os
import re

ROOT = '/home/alash-studios/Music/Test'

def get_nav_html(is_subsite=False):
    logo_path = "../logo.jpeg" if is_subsite else "logo.jpeg"
    base_path = "../" if is_subsite else ""
    
    return f'''  <nav>
    <div class="nav-inner">
      <a href="{base_path}index.html" class="nav-logo">
        <img src="{logo_path}" class="nav-logo-img" alt="BrandKings">
        BrandKings
      </a>
      <ul class="nav-links">
        <li><a href="{base_path}index.html">Home</a></li>
        <li><a href="{base_path}about.html">About</a></li>
        <li><a href="{base_path}system.html">System</a></li>
        <li><a href="{base_path}how-it-works.html">How It Works</a></li>
        <li><a href="{base_path}team.html">Team</a></li>
        <li><a href="{base_path}case-studies.html">Case Studies</a></li>
        <li class="has-dropdown">
          <a href="{base_path}industries.html">Industries</a>
          <button class="dropdown-chevron-btn" aria-label="Toggle Dropdown">
            <svg class="dropdown-chevron" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
          </button>
          <div class="dropdown-menu">
            <a href="{base_path}foodlas/index.html">Foodlas</a>
            <a href="{base_path}petlang/index.html">Petlang</a>
            <a href="{base_path}fitflux/index.html">Fitflux</a>
          </div>
        </li>
        <li><a href="{base_path}contact.html">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="{base_path}apply.html" class="btn-primary">Apply Now →</a>
        <button class="nav-hamburger"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>'''

# HTML files to process
html_files = []
for root, dirs, files in os.walk(ROOT):
    for f in files:
        if f.endswith('.html') and 'source.html' not in f:
            html_files.append(os.path.join(root, f))

for filepath in html_files:
    is_subsite = any(sub in filepath for sub in ['/foodlas/', '/petlang/', '/fitflux/'])
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the <nav>...</nav> block
    content = re.sub(r'<nav>.*?</nav>', get_nav_html(is_subsite), content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Patched Nav: {filepath}")

print("Done.")
