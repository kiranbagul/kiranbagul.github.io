#!/usr/bin/env python3
"""Inline shared navigation so the deployed pages work without JavaScript."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
header = (root / 'partials/header.html').read_text()
footer = (root / 'partials/footer.html').read_text()
for page in [root / 'index.html', *sorted((root / 'pages').glob('*.html'))]:
    current_header = header
    if page.name == 'about.html':
        current_header = header.replace('href="/pages/about.html"', 'href="/pages/about.html" aria-current="page"')
    html = page.read_text()
    html, headers = re.subn(r'<a class="skip-link".*?</header>', lambda _: current_header, html, count=1, flags=re.S)
    html, footers = re.subn(r'<footer class="site-footer">.*?</footer>', lambda _: footer, html, count=1, flags=re.S)
    if headers != 1 or footers != 1:
        raise ValueError(f'Missing shared layout in {page}')
    page.write_text(html)
