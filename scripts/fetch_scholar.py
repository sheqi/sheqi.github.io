#!/usr/bin/env python3
"""Fetch Google Scholar stats into _data/scholar_stats.yml.

Tries the public profile page first (stdlib only, no `scholarly`), then falls
back to SerpAPI when SERPAPI_KEY is set — Scholar often blocks CI runner IPs.
"""
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from datetime import datetime, timezone

AUTHOR_ID = "iHoGTt4AAAAJ"
OUT_FILE = "_data/scholar_stats.yml"
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0 Safari/537.36")


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def from_profile_page():
    html = get(f"https://scholar.google.com/citations?user={AUTHOR_ID}&hl=en")
    # Stats table cells: [citations all, since, h-index all, since, i10 all, since]
    cells = [int(n) for n in re.findall(r'class="gsc_rsb_std">(\d+)<', html)]
    if len(cells) < 6:
        raise RuntimeError("stats table not found (likely blocked by a CAPTCHA page)")
    return {"citations": cells[0], "h_index": cells[2], "i10_index": cells[4]}


def from_serpapi():
    key = os.environ.get("SERPAPI_KEY")
    if not key:
        raise RuntimeError("SERPAPI_KEY not set")
    qs = urllib.parse.urlencode({"engine": "google_scholar_author", "author_id": AUTHOR_ID,
                                 "hl": "en", "api_key": key})
    table = json.loads(get(f"https://serpapi.com/search.json?{qs}"))["cited_by"]["table"]
    return {"citations": table[0]["citations"]["all"],
            "h_index": table[1]["h_index"]["all"],
            "i10_index": table[2]["i10_index"]["all"]}


def read_current():
    current = {}
    try:
        with open(OUT_FILE) as f:
            for line in f:
                k, _, v = line.partition(":")
                current[k.strip()] = v.strip().strip('"')
    except FileNotFoundError:
        pass
    return current


def fetch():
    errors = []
    for source in (from_profile_page, from_serpapi):
        for attempt in range(2):
            try:
                stats = source()
                print(f"Fetched via {source.__name__}: {stats}")
                return stats
            except Exception as e:
                errors.append(f"{source.__name__} (attempt {attempt + 1}): {e}")
                if "not set" in str(e):
                    break
                time.sleep(5)
    raise RuntimeError("; ".join(errors))


def main():
    stats = fetch()
    old = int(read_current().get("citations", 0) or 0)
    # Guard against a garbled parse wiping out real numbers.
    if stats["citations"] < old * 0.9:
        raise RuntimeError(f"citations dropped from {old} to {stats['citations']}, refusing to write")
    with open(OUT_FILE, "w") as f:
        f.write(f"citations: {stats['citations']}\n")
        f.write(f"h_index: {stats['h_index']}\n")
        f.write(f"i10_index: {stats['i10_index']}\n")
        f.write(f'updated: "{datetime.now(timezone.utc):%Y-%m-%d}"\n')
    print(f"Wrote {OUT_FILE}")


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Error fetching scholar stats: {e}", file=sys.stderr)
        sys.exit(1)
