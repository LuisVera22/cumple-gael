"""Recorta cada personaje de las imágenes compuestas y le quita el fondo (rembg)."""
import sys
from pathlib import Path
from PIL import Image
from rembg import remove, new_session

SRC = Path("public/assets/img")
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("public/assets/characters")
OUT.mkdir(parents=True, exist_ok=True)

session = new_session("u2net")

# name: (archivo, (left, top, right, bottom))
CROPS = {
    # banner-background.jpeg  (1012 x 600)
    "giraffe":      ("banner-background.jpeg", (700,  95,  802, 372)),
    "monkey":       ("banner-background.jpeg", (835,  80,  990, 315)),
    "lion":         ("banner-background.jpeg", (815, 250,  990, 485)),
    "elephant-pink":("banner-background.jpeg", (645, 362,  835, 596)),
    # footer-2.jpeg  (793 x 185)
    "zebra":        ("footer-2.jpeg",          (5,    28,  130, 185)),
    "tiger":        ("footer-2.jpeg",          (645,  15,  793, 185)),
    # footer-3.jpeg  (793 x 185)
    "toucan":       ("footer-3.jpeg",          (640,  15,  793, 178)),
    # background-1.jpeg  (790 x 356)
    "bear":         ("background-1.jpeg",       (595, 145,  790, 356)),
}

def alpha_bbox_trim(img):
    """Recorta al bounding box del contenido no transparente."""
    bbox = img.getbbox()
    return img.crop(bbox) if bbox else img

def clean_alpha(img, low=60, high=170):
    """Elimina el halo semitransparente: alfa<low -> 0, alfa>high -> 255,
    y estira linealmente los valores intermedios (borde suave pero sin niebla)."""
    r, g, b, a = img.split()
    lut = []
    for v in range(256):
        if v <= low:
            lut.append(0)
        elif v >= high:
            lut.append(255)
        else:
            lut.append(int((v - low) / (high - low) * 255))
    a = a.point(lut)
    return Image.merge("RGBA", (r, g, b, a))

for name, (fname, box) in CROPS.items():
    src = Image.open(SRC / fname).convert("RGBA")
    crop = src.crop(box)
    cut = remove(crop, session=session, post_process_mask=True)
    cut = clean_alpha(cut)
    cut = alpha_bbox_trim(cut)
    dst = OUT / f"{name}.png"
    cut.save(dst)
    print(f"{name:14s} {crop.size} -> {cut.size}  {dst}")

print("done")
