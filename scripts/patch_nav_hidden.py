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
        <li><a href="{base_path}industries.html">Industries</a></li>
        <li><a href="{base_path}contact.html">Contact</a></li>
        <li><a href="mailto:Brandkingsxx@gmail.com" style="color: var(--accent); font-weight: 700;">Email</a></li>
      </ul>
      <div class="nav-cta">
        <a href="{base_path}apply.html" class="btn-primary">Apply Now →</a>
        <button class="nav-hamburger"><span></span><span></span><span></span></button>
      </div>
    </div>
  </nav>'''

def get_mobile_overlay_html(is_subsite=False):
    base_path = "../" if is_subsite else ""
    return f'''  <div class="mobile-nav-overlay">
    <button class="mobile-close">×</button>
    <a href="{base_path}index.html">Home</a>
    <a href="{base_path}about.html">About</a>
    <a href="{base_path}system.html">System</a>
    <a href="{base_path}how-it-works.html">How It Works</a>
    <a href="{base_path}team.html">Team</a>
    <a href="{base_path}case-studies.html">Case Studies</a>
    <a href="{base_path}industries.html">Industries</a>
    <div style="display: flex; gap: 20px; font-size: 18px; margin-top: -10px; margin-bottom: 10px;">
        <a href="{base_path}foodlas/index.html" style="font-size: 18px; opacity: 0.8;">Foodlas</a>
        <a href="{base_path}petlang/index.html" style="font-size: 18px; opacity: 0.8;">Petlang</a>
        <a href="{base_path}fitflux/index.html" style="font-size: 18px; opacity: 0.8;">Fitflux</a>
    </div>
    <a href="{base_path}contact.html">Contact</a>
    <a href="mailto:Brandkingsxx@gmail.com" style="color: var(--accent); font-weight: 700; font-size: 20px;">Email Us</a>
  </div>'''

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
    
    # Replace the <div class="mobile-nav-overlay">...</div> block
    # We use a more robust regex to account for nested divs and potential leftovers
    content = re.sub(r'<div class="mobile-nav-overlay">.*?<!-- NAV -->', get_mobile_overlay_html(is_subsite) + '\n\n    <!-- NAV -->', content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Patched Nav & Overlay: {filepath}")

print("Done.")
