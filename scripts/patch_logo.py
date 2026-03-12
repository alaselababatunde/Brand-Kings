#!/usr/bin/env python3
"""
Patches all BrandKings HTML pages/sub-sites to:
1. Replace the nav-logo-icon "B" square with logo.jpeg
2. Replace the footer brand "B" square with logo.jpeg  
3. Replace f/ig/tk text social buttons with proper SVG icons
4. Add favicon (logo.jpeg) to every page
"""

import os
import re

ROOT = '/home/alash-studios/Music/Test'

# Collect all HTML files (root + one level subdirectories)
html_files = []
for f in os.listdir(ROOT):
    if f.endswith('.html'):
        html_files.append(os.path.join(ROOT, f))

for subdir in ['foodlas', 'petlang', 'fitflux']:
    subpath = os.path.join(ROOT, subdir)
    if os.path.isdir(subpath):
        for f in os.listdir(subpath):
            if f.endswith('.html'):
                html_files.append(os.path.join(subpath, f))

print(f"Found {len(html_files)} HTML files to patch")

# ---- PATTERNS ----

# 1. Favicon: insert after <meta name="viewport"...> line
FAVICON_TAG = '<link rel="icon" href="logo.jpeg" type="image/jpeg">'
FAVICON_TAG_SUBSITE = '<link rel="icon" href="../logo.jpeg" type="image/jpeg">'

# 2. Nav logo: replace the "B" square in nav-logo anchor
# From: <div class="nav-logo-icon">B</div>
# To:   <img src="logo.jpeg" class="nav-logo-img" alt="BrandKings">
NAV_ICON_OLD = '<div class="nav-logo-icon">B</div>'
NAV_ICON_NEW_ROOT = '<img src="logo.jpeg" class="nav-logo-img" alt="BrandKings">'
NAV_ICON_NEW_SUB  = '<img src="../logo.jpeg" class="nav-logo-img" alt="BrandKings">'

# 3. Footer brand logo: same replacement
FOOTER_ICON_OLD = '<div class="logo"><div class="nav-logo-icon">B</div>BrandKings</div>'
FOOTER_ICON_NEW_ROOT = '<div class="logo"><img src="logo.jpeg" class="nav-logo-img" alt="BrandKings">BrandKings</div>'
FOOTER_ICON_NEW_SUB  = '<div class="logo"><img src="../logo.jpeg" class="nav-logo-img" alt="BrandKings">BrandKings</div>'

# 4. Social icons: replace text links with SVG icon links
SOCIAL_OLD = '''<div class="footer-social"><a href="https://www.facebook.com/share/18dfjeHUjC/" target="_blank">f</a><a href="https://www.instagram.com/brandkings__?igsh=d2lkZnY1NXczZWVt" target="_blank">ig</a><a href="https://www.tiktok.com/@brandk1ngs" target="_blank">tk</a></div>'''

SOCIAL_NEW = '''<div class="footer-social">
          <a href="https://www.facebook.com/share/18dfjeHUjC/" target="_blank" title="Facebook" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/brandkings__?igsh=d2lkZnY1NXczZWVt" target="_blank" title="Instagram" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@brandk1ngs" target="_blank" title="TikTok" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
          </a>
        </div>'''

def patch_file(filepath, is_subsite=False):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Add favicon after viewport meta if not already present
    if 'rel="icon"' not in content:
        favicon = FAVICON_TAG_SUBSITE if is_subsite else FAVICON_TAG
        content = content.replace(
            '<link rel="stylesheet" href="css/global.css">',
            f'{favicon}\n  <link rel="stylesheet" href="css/global.css">'
        )
        if is_subsite:
            content = content.replace(
                '<link rel="stylesheet" href="../css/global.css">',
                f'{favicon}\n  <link rel="stylesheet" href="../css/global.css">'
            )

    # 2. Nav logo icon replacement
    nav_new = NAV_ICON_NEW_SUB if is_subsite else NAV_ICON_NEW_ROOT
    content = content.replace(NAV_ICON_OLD, nav_new)

    # 3. Footer brand logo
    footer_new = FOOTER_ICON_NEW_SUB if is_subsite else FOOTER_ICON_NEW_ROOT
    content = content.replace(FOOTER_ICON_OLD, footer_new)

    # 4. Social icons
    content = content.replace(SOCIAL_OLD, SOCIAL_NEW)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  ✓ Patched: {os.path.relpath(filepath, ROOT)}")
    else:
        print(f"  ~ Skipped (no matches): {os.path.relpath(filepath, ROOT)}")

for filepath in html_files:
    is_subsite = any(sub in filepath for sub in ['/foodlas/', '/petlang/', '/fitflux/'])
    patch_file(filepath, is_subsite=is_subsite)

print("\nDone. All files patched.")
