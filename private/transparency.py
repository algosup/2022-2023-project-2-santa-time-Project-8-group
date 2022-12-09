# from PIL import Image
# from time import time

# def difference(self, neighbor):
#     c = neighbor[:3]
#     a, b = min(c), max(c)
#     diff = b - a
#     return diff

# def neighbor(todo, done, img, threshold):
#     x, y = todo.pop(0)
#     done.append((x, y))
#     self = img.getpixel((x, y))
#     for dy in range(-1, 2):
#         for dx in range(-1, 2):
#             if not (dx and dy):
#                 continue
#             x2, y2 = x+dx, y+dy
#             if not (0 <= x2 < img.width and 0 <= y2 < img.height):
#                 continue
#             if (x2, y2) in todo or (x2, y2) in done:
#                 continue
#             neighbor = img.getpixel((x2, y2))
#             if difference(self, neighbor) < threshold:
#                 todo.append((x2, y2))
#     return todo, done

# def walk(img, threshold):
#     todo, done = [(0, 0)], []
#     start = time()
#     while todo:
#         todo, done = neighbor(todo, done, img, threshold)
#         if len(done) % 10000 == 0:
#             print(len(done), img.width*img.height, len(todo), time()-start)
#     return done

# def removeBg(img, threshold):
#     coords = walk(img, threshold)
#     img = img.copy().convert("RGBA")
#     for coord in coords:
#         rgb = img.getpixel(coord)[:3]
#         img.putpixel(coord, rgb+(0,))
#     return img

import numpy
from PIL import Image
from scipy.ndimage import label

def crop(img: Image.Image) -> Image.Image:
    def keep(x, y):
        color = img.getpixel((x, y))
        return len(color) < 4 or color[3] != 0

    for top in range(img.height):
        for x in range(img.width):
            if keep(x, top):
                break
        else:
            continue
        break
    
    for bottom in range(img.height-1, -1, -1):
        for x in range(img.width):
            if keep(x, bottom):
                break
        else:
            continue
        break
    
    for left in range(img.width):
        for y in range(img.height):
            if keep(left, y):
                break
        else:
            continue
        break

    for right in range(img.width-1, -1, -1):
        for y in range(img.height):
            if keep(right, y):
                break
        else:
            continue
        break

    return img.crop((left, top, right, bottom))

def removeBg(img: Image.Image, threshold: int, border: bool = True) -> Image.Image:
    matrix = numpy.array(img.convert("RGB"))
    delta = matrix.max(-1) - matrix.min(-1)
    if border:
        non_white = delta < threshold
        structure = numpy.ones((3, 3))
        labeled, _ = label(non_white, structure)
        keep = labeled != labeled[0, 0]
    else:
        keep = delta > threshold
    new = Image.new("RGBA", img.size)
    new.paste(img, mask=Image.fromarray(keep))
    return new

def main():
    name = "orange"
    img = Image.open(f"public/images/presents/{name}.png")
    img = removeBg(img, 20, False)
    img = crop(img)
    img.save(f"public/images/presents/{name}.png")

if __name__ == "__main__":
    main()
