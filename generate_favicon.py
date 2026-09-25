from PIL import Image

logo = Image.open('public/logo.jpg').convert('RGBA')
w, h = logo.size
print(f"Original: {w}x{h}")

# Tighter crop focused on the central P emblem (crown + P + DNA)
# The P is roughly in the center-upper part. Crop more aggressively to the letter.
margin = int(w * 0.18)  # tighter
top = int(h * 0.08)
bottom = int(h * 0.55)  # cut more of the bottom to focus on P

left = margin
right = w - margin

emblem = logo.crop((left, top, right, bottom))

# Force square
size = min(emblem.width, emblem.height)
left_crop = (emblem.width - size) // 2
top_crop = (emblem.height - size) // 2
emblem = emblem.crop((left_crop, top_crop, left_crop + size, top_crop + size))

print(f"Emblem crop size: {emblem.size}")

# Create high quality small versions
icon16 = emblem.resize((16, 16), Image.LANCZOS)
icon32 = emblem.resize((32, 32), Image.LANCZOS)
icon180 = emblem.resize((180, 180), Image.LANCZOS)

# Save multi-size ICO (good for tabs)
icon16.save('public/favicon.ico', format='ICO', sizes=[(16,16), (32,32)])
print("Saved public/favicon.ico")

icon32.save('public/icon-32.png', 'PNG')
print("Saved public/icon-32.png")

icon180.save('public/apple-touch-icon.png', 'PNG')
print("Saved public/apple-touch-icon.png")

# Also a clean 512 for reference
emblem.resize((512, 512), Image.LANCZOS).save('public/icon-512.png', 'PNG')
print("Saved icon-512.png")

print("Favicon regenerated - tighter P focus.")
