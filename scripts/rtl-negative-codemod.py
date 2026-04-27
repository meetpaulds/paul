#!/usr/bin/env python3
"""Catch negative Tailwind utilities: -ml-4, -left-12, etc."""

import re, pathlib

BASE = pathlib.Path("/Users/sirpauls/Documents/paul - Pattern, Asset & UI Library/development/paul/packages")
EXTENSIONS = (".tsx", ".ts", ".vue", ".svelte")

REPLACEMENTS = [
    (r"(?<![\w])-ml-([\w/:\[\].-]+)(?![\w-])", r"-ms-\1"),
    (r"(?<![\w])-mr-([\w/:\[\].-]+)(?![\w-])", r"-me-\1"),
    (r"(?<![\w])-pl-([\w/:\[\].-]+)(?![\w-])", r"-ps-\1"),
    (r"(?<![\w])-pr-([\w/:\[\].-]+)(?![\w-])", r"-pe-\1"),
    (r"(?<![\w])-left-([\w/:\[\].-]+)(?![\w-])", r"-start-\1"),
    (r"(?<![\w])-right-([\w/:\[\].-]+)(?![\w-])", r"-end-\1"),
]

def migrate_file(path: pathlib.Path):
    text = path.read_text(encoding="utf-8")
    original = text
    for pattern, replacement in REPLACEMENTS:
        text = re.sub(pattern, replacement, text)
    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False

changed = []
for ext in EXTENSIONS:
    for f in BASE.rglob(f"*{ext}"):
        if migrate_file(f):
            changed.append(str(f.relative_to(BASE)))

print(f"Modified {len(changed)} files")
for c in changed:
    print(f"  {c}")
