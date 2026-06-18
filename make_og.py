# Genera og-image.png (1200x630) branded para Firma Transaccional (Firmas Ecuador by Begroup).
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
img = Image.new("RGB", (W, H), "#0B1020")
d = ImageDraw.Draw(img)

# Fondo: degradado diagonal navy -> royal
top = (11, 16, 32)        # #0B1020
bot = (4, 30, 124)        # hacia royal
for y in range(H):
    t = y / H
    r = int(top[0] + (bot[0]-top[0])*t)
    g = int(top[1] + (bot[1]-top[1])*t)
    b = int(top[2] + (bot[2]-top[2])*t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# Grid muy sutil sobre capa RGBA (alpha bajo) compuesta una sola vez
grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gdl = ImageDraw.Draw(grid)
for gx in range(0, W, 46):
    gdl.line([(gx, 0), (gx, H)], fill=(255, 255, 255, 12), width=1)
for gy in range(0, H, 46):
    gdl.line([(0, gy), (W, gy)], fill=(255, 255, 255, 12), width=1)
img.paste(Image.alpha_composite(img.convert("RGBA"), grid).convert("RGB"), (0, 0))
d = ImageDraw.Draw(img)

# Glow cian arriba-derecha
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
for rad in range(400, 0, -4):
    a = int(72 * (1 - rad/400))
    gd.ellipse([W-240-rad, -180-rad, W-240+rad, -180+rad], fill=(22, 192, 230, a))
img.paste(glow, (0, 0), glow)

def font(sz, bold=True):
    p = "C:/Windows/Fonts/georgiab.ttf" if bold else "C:/Windows/Fonts/georgia.ttf"
    try:
        return ImageFont.truetype(p, sz)
    except Exception:
        return ImageFont.load_default()

def font_sans(sz):
    for p in ["C:/Windows/Fonts/segoeui.ttf", "C:/Windows/Fonts/arial.ttf"]:
        try:
            return ImageFont.truetype(p, sz)
        except Exception:
            continue
    return ImageFont.load_default()

PAD = 80

# Eyebrow
d.text((PAD, 92), "NUEVO MÓDULO · FIRMAS ECUADOR BY BEGROUP", font=font_sans(23), fill=(111, 220, 242))

# Titular serif
d.text((PAD, 142), "Firma con biometría,", font=font(72), fill="white")
d.text((PAD, 226), "sin tener firma", font=font(72), fill="white")
d.text((PAD, 310), "electrónica.", font=font(72), fill=(111, 220, 242))

# Subcopy
d.text((PAD, 430), "Firma una vez con prueba de vida e invita a 3, 4 o 5",
       font=font_sans(29), fill=(210, 216, 240))
d.text((PAD, 470), "personas a firmar por enlace. Validez legal en Ecuador.",
       font=font_sans(29), fill=(160, 170, 205))

# Logo mark abajo-izquierda
mx, my = PAD, 540
d.rounded_rectangle([mx, my, mx+50, my+50], radius=13, fill=(4, 35, 150), outline=(22, 192, 230), width=2)
# trazo de firma dentro del marco
sig = [(mx+10, my+31), (mx+17, my+15), (mx+23, my+35), (mx+30, my+12), (mx+37, my+31), (mx+42, my+25)]
d.line(sig, fill=(255, 255, 255), width=3, joint="curve")
d.text((mx+66, my+2), "Firma Transaccional", font=font(34), fill="white")
d.text((mx+66, my+40), "by Begroup · Firmas Ecuador", font=font_sans(18), fill=(160, 170, 205))

# Chip de garantía abajo-derecha
chip = "Validez legal · Prueba de vida"
cf = font_sans(21)
tw = d.textlength(chip, font=cf)
d.rounded_rectangle([W-PAD-tw-40, 556, W-PAD, 598], radius=21, outline=(120, 132, 175), width=2)
# punto verde
d.ellipse([W-PAD-tw-28, 573, W-PAD-tw-16, 585], fill=(18, 163, 107))
d.text((W-PAD-tw, 567), chip, font=cf, fill=(210, 216, 240))

img.save("public/og-image.png", "PNG")
print("og-image.png generado", img.size)
