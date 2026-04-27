#!/usr/bin/env python3
"""Replace space-x-* → gap-x-* in flex containers (RTL-safe). Also converts
paired space-y-* → gap-y-* where both appear on the same parent."""

import re, pathlib, collections

BASE = pathlib.Path("/Users/sirpauls/Documents/paul - Pattern, Asset & UI Library/development/paul/packages")
EXTENSIONS = (".tsx", ".ts", ".vue", ".svelte")

REPLACEMENTS = [
    # Paired space-x / space-y in calendar months → gap-x / gap-y
    (r"space-y-4 sm:space-x-4 sm:space-y-0", r"gap-y-4 sm:gap-x-4 sm:gap-y-0"),
    (r"space-y-4 sm:space-x-4", r"gap-y-4 sm:gap-x-4"),
    # space-x-* → gap-x-*
    (r"(?<![\w-])space-x-([\w/:\[\].-]+)(?![\w-])", r"gap-x-\1"),
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

def main():
    changed = []
    for ext in EXTENSIONS:
        for f in BASE.rglob(f"*{ext}"):
            if migrate_file(f):
                changed.append(str(f.relative_to(BASE)))
    print(f"Modified {len(changed)} files")
    for c in changed:
        print(f"  {c}")

if __name__ == "__main__":
    main()
