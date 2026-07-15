"""Genera una hoja de contacto de los PNG recortados sobre fondo ajedrez."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

SRC = Path(sys.argv[1])
OUT = Path(sys.argv[2])
files = sorted(SRC.glob("*.png"))

cell = 240
cols = 4
rows = (len(files) + cols - 1) // cols
W, H = cols * cell, rows * cell

def checker(size, sq=16):
    img = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    d = ImageDraw.Draw(img)
    for y in range(0, size, sq):
        for x in range(0, size, sq):
            if (x // sq + y // sq) % 2 == 0:
                d.rectangle([x, y, x + sq, y + sq], fill=(210, 210, 210, 255))
    return img

sheet = Image.new("RGBA", (W, H), (255, 255, 255, 255))
for i, f in enumerate(files):
    cx, cy = (i % cols) * cell, (i // cols) * cell
    bg = checker(cell)
    im = Image.open(f).convert("RGBA")
    pad = 30
    im.thumbnail((cell - pad, cell - pad - 20))
    ox = cx + (cell - im.width) // 2
    oy = cy + (cell - im.height) // 2
    bg.paste(im, ((cell - im.width) // 2, (cell - im.height) // 2), im)
    d = ImageDraw.Draw(bg)
    d.text((6, 6), f.stem, fill=(200, 0, 0, 255))
    sheet.paste(bg, (cx, cy))

sheet.convert("RGB").save(OUT)
print("saved", OUT)
