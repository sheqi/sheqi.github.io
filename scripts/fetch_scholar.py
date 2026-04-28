#!/usr/bin/env python3
import sys
import yaml
from datetime import datetime
from scholarly import scholarly

AUTHOR_ID = "iHoGTt4AAAAJ"

def fetch():
    author = scholarly.search_author_id(AUTHOR_ID)
    author = scholarly.fill(author, sections=["basics", "indices"])
    stats = {
        "citations": author.get("citedby", 0),
        "h_index":   author.get("hindex", 0),
        "i10_index": author.get("i10index", 0),
        "updated":   datetime.utcnow().strftime("%Y-%m-%d"),
    }
    with open("_data/scholar_stats.yml", "w") as f:
        yaml.dump(stats, f, default_flow_style=False, allow_unicode=True)
    print(f"Updated scholar stats: {stats}")

if __name__ == "__main__":
    try:
        fetch()
    except Exception as e:
        print(f"Error fetching scholar stats: {e}", file=sys.stderr)
        sys.exit(1)
