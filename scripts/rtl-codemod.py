#!/usr/bin/env python3
"""
rtl-codemod.py — bulk-migrate Tailwind physical CSS utilities to logical equivalents
for RTL (ar/he) support. Only touches class name strings; Tailwind config is untouched.

Usage: python scripts/rtl-codemod.py
"""

import re, sys, pathlib, collections

BASE = pathlib.Path("/Users/sirpauls/Documents/paul - Pattern, Asset & UI Library/development/paul/packages")
EXTENSIONS = (".tsx", ".ts", ".vue", ".svelte")

# Order matters: longer prefixes first to avoid partial overlap
REPLACEMENTS = [
    # Rounded corners (most specific first)
    (r"(?<![\w-])rounded-tl-([\w/:\[\].-]+)(?![\w-])", r"rounded-ts-\1"),
    (r"(?<![\w-])rounded-tr-([\w/:\[\].-]+)(?![\w-])", r"rounded-te-\1"),
    (r"(?<![\w-])rounded-bl-([\w/:\[\].-]+)(?![\w-])", r"rounded-bs-\1"),
    (r"(?<![\w-])rounded-br-([\w/:\[\].-]+)(?![\w-])", r"rounded-be-\1"),
    (r"(?<![\w-])rounded-l-([\w/:\[\].-]+)(?![\w-])", r"rounded-s-\1"),
    (r"(?<![\w-])rounded-r-([\w/:\[\].-]+)(?![\w-])", r"rounded-e-\1"),
    # Scroll margins
    (r"(?<![\w-])scroll-ml-([\w/:\[\].-]+)(?![\w-])", r"scroll-ms-\1"),
    (r"(?<![\w-])scroll-mr-([\w/:\[\].-]+)(?![\w-])", r"scroll-me-\1"),
    # Origin
    (r"(?<![\w-])origin-top-left(?![\w-])", r"origin-top-start"),
    (r"(?<![\w-])origin-top-right(?![\w-])", r"origin-top-end"),
    (r"(?<![\w-])origin-bottom-left(?![\w-])", r"origin-bottom-start"),
    (r"(?<![\w-])origin-bottom-right(?![\w-])", r"origin-bottom-end"),
    # Margin
    (r"(?<![\w-])ml-([\w/:\[\].-]+)(?![\w-])", r"ms-\1"),
    (r"(?<![\w-])mr-([\w/:\[\].-]+)(?![\w-])", r"me-\1"),
    # Padding
    (r"(?<![\w-])pl-([\w/:\[\].-]+)(?![\w-])", r"ps-\1"),
    (r"(?<![\w-])pr-([\w/:\[\].-]+)(?![\w-])", r"pe-\1"),
    # Position / inset
    (r"(?<![\w-])left-([\w/:\[\].-]+)(?![\w-])", r"start-\1"),
    (r"(?<![\w-])right-([\w/:\[\].-]+)(?![\w-])", r"end-\1"),
    # Border side
    (r"(?<![\w-])border-l-([\w/:\[\].-]+)(?![\w-])", r"border-s-\1"),
    (r"(?<![\w-])border-r-([\w/:\[\].-]+)(?![\w-])", r"border-e-\1"),
    # Border shorthand (must come after border-l-/border-r- variants)
    (r"(?<![\w-])border-l(?![\w-])", r"border-s"),
    (r"(?<![\w-])border-r(?![\w-])", r"border-e"),
    # Text alignment
    (r"(?<![\w-])text-left(?![\w-])", r"text-start"),
    (r"(?<![\w-])text-right(?![\w-])", r"text-end"),
    # Divide (logical equivalents in Tailwind v3.3+)
    (r"(?<![\w-])divide-x(?![\w-])", r"divide-x"),   # stays, handled by global CSS
    # Space-x → gap-x (handled separately, see edge cases)
]

SKIP_FILES = set()

def migrate_file(path: pathlib.Path):
    text = path.read_text(encoding="utf-8")
    original = text
    changes = []

    for pattern, replacement in REPLACEMENTS:
        for m in re.finditer(pattern, text):
            changes.append((m.group(0), replacement.replace(r"\1", m.group(1)) if m.groups() else replacement))
        text = re.sub(pattern, replacement, text)

    if text != original:
        path.write_text(text, encoding="utf-8")
        return changes
    return []

def main():
    stats = collections.defaultdict(list)
    total = 0

    for ext in EXTENSIONS:
        for f in BASE.rglob(f"*{ext}"):
            if f.name in SKIP_FILES:
                continue
            changes = migrate_file(f)
            if changes:
                stats[str(f.relative_to(BASE))] = changes
                total += len(changes)

    print(f"Modified {len(stats)} files, {total} replacements total")
    if total:
        print("\nPer-file summary (first 20):")
        for path, changes in list(stats.items())[:20]:
            print(f"  {path}: {len(changes)} changes")
            for old, new in changes[:3]:
                print(f"      {old!r} -> {new!r}")

if __name__ == "__main__":
    main()
