from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
logo_path = ROOT / "public" / "logo.jpg"
out_public = ROOT / "public"
out_app = ROOT / "src" / "app"

logo = Image.open(logo_path).convert("RGB")
# Crop the real approved logo to the recognizable upper emblem: crown + metallic P + blue DNA.
# This avoids the full-wordmark becoming unreadable at tab-icon size.
w, h = logo.size
crop_box = (int(w * 0.25), int(h * 0.02), int(w * 0.78), int(h * 0.62))
crop = logo.crop(crop_box).convert("RGBA")

# Boost contrast/saturation so it survives 16x16/32x32 browser tabs.
crop = ImageEnhance.Contrast(crop).enhance(1.25)
crop = ImageEnhance.Sharpness(crop).enhance(1.8)
crop = ImageEnhance.Color(crop).enhance(1.15)

# Compose onto a bright blue-rimmed rounded tile so it is visible on dark browser tabs.
base_size = 1024
canvas = Image.new("RGBA", (base_size, base_size), (5, 8, 18, 255))
draw = ImageDraw.Draw(canvas)
# Outer electric blue border and inner dark fill.
draw.rounded_rectangle((18, 18, base_size - 18, base_size - 18), radius=210, fill=(0, 128, 255, 255))
draw.rounded_rectangle((64, 64, base_size - 64, base_size - 64), radius=172, fill=(2, 6, 16, 255))
# Soft blue halo.
for i, alpha in enumerate([90, 60, 35]):
    inset = 90 + i * 22
    draw.rounded_rectangle((inset, inset, base_size - inset, base_size - inset), radius=145, outline=(0, 162, 255, alpha), width=10)

# Fit crop with a little padding.
crop.thumbnail((850, 850), Image.Resampling.LANCZOS)
x = (base_size - crop.width) // 2
y = int((base_size - crop.height) * 0.42)
canvas.alpha_composite(crop, (x, y))
canvas = canvas.filter(ImageFilter.UnsharpMask(radius=1.1, percent=130, threshold=3))

# Save PNG variants.
for size, name in [(32, "icon-32.png"), (180, "apple-touch-icon.png"), (512, "icon-512.png")]:
    img = canvas.resize((size, size), Image.Resampling.LANCZOS)
    img.save(out_public / name)

# ICO with multiple embedded sizes for Chrome/Edge tab usage.
ico_images = [canvas.resize((s, s), Image.Resampling.LANCZOS) for s in (16, 24, 32, 48, 64, 128, 256)]
for dest in [out_public / "favicon.ico", out_app / "favicon.ico"]:
    ico_images[-1].save(dest, sizes=[(s, s) for s in (16, 24, 32, 48, 64, 128, 256)], append_images=ico_images[:-1])

# Keep SVG as a simple high-contrast fallback that matches the blue framed direction.
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" aria-label="The Peptide Papi">
  <defs>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8fd3ff"/>
      <stop offset="0.45" stop-color="#168cff"/>
      <stop offset="1" stop-color="#004bff"/>
    </linearGradient>
    <linearGradient id="s" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.55" stop-color="#cfd7e6"/>
      <stop offset="1" stop-color="#7f8da6"/>
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="60" height="60" rx="15" fill="#020610" stroke="url(#b)" stroke-width="4"/>
  <path d="M20 52V14h17c8 0 14 5 14 13s-6 13-14 13h-8v12z" fill="url(#s)"/>
  <path d="M29 22h7c4 0 7 2 7 5s-3 5-7 5h-7z" fill="#020610"/>
  <path d="M22 13l4-7 5 7 5-7 5 7 5-7 4 7-3 5H25z" fill="url(#s)" stroke="#168cff" stroke-width="1.2"/>
  <path d="M35 20c-11 10 12 16-1 29M44 20c-12 11 10 17-3 30" fill="none" stroke="url(#b)" stroke-width="4" stroke-linecap="round"/>
</svg>'''
(out_public / "favicon.svg").write_text(svg, encoding="utf-8")
print("Generated brand favicon files from", logo_path)
