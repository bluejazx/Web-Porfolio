# Photo asset copy manifest

The researcher agent assembled `portfolio.ts` referencing the four destination
filenames below, but **could not perform the binary copy itself** — its toolset
(`write_file`) is text-only and would corrupt JPEG bytes. The build task (which
has a terminal) must run the copy below. This is flagged honestly, not "done."

## Source → destination mapping

Sources live in: `/workspace/.conversations/1785548152030/incoming/`

| Source                        | Destination (this folder) | Role     | Note |
|-------------------------------|---------------------------|----------|------|
| `paste-1785408269-01.jpg`     | `headshot.jpg`            | headshot | **Assumption**: 01 is the headshot (per task hint). Verify visually. |
| `paste-1785408269-02.jpg`     | `internship-01.jpg`       | gallery  | |
| `paste-1785408269-03.jpg`     | `internship-02.jpg`       | gallery  | |
| `paste-1785408269-04.jpg`     | `internship-03.jpg`       | gallery  | |

## Copy command (run from repo root or anywhere)

```bash
SRC="/workspace/.conversations/1785548152030/incoming"
DST="/workspace/User-Stories/joshua-portfolio/Web-Porfolio/src/assets/photos"
mkdir -p "$DST"
cp "$SRC/paste-1785408269-01.jpg" "$DST/headshot.jpg"
cp "$SRC/paste-1785408269-02.jpg" "$DST/internship-01.jpg"
cp "$SRC/paste-1785408269-03.jpg" "$DST/internship-02.jpg"
cp "$SRC/paste-1785408269-04.jpg" "$DST/internship-03.jpg"
ls -la "$DST"   # verify 4 jpgs present, non-zero size
```

## Verification

After copying, confirm:
- `headshot.jpg`, `internship-01.jpg`, `internship-02.jpg`, `internship-03.jpg`
  all exist and are non-zero.
- `portfolio.ts` imports resolve (Vite `@/assets/photos/...` alias).
- Open `headshot.jpg` visually to confirm 01 really is the headshot; if a
  different file is the headshot, adjust the mapping AND the imports in
  `portfolio.ts` accordingly.
