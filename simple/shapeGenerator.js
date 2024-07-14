const width = 125;
const height = 125;

// change to any number (3 -> triangle, 4 -> square, 5 -> pentagon, etc.)
const shapeSides = 8;
const sideLength = 100;

setDocDimensions(width, height);

const t = new bt.Turtle();

for (let i = 0; i < shapeSides; i++) {
  t.forward(sideLength / shapeSides);
  t.left(360 / shapeSides);
}

drawLines(t.lines());
