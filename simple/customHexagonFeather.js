const width = 125;
const height = 125;

const shth = 3; // shaft thickness
const shl = 125; // shaft length
const cl = 35; // calamus length (part without vanes)
const vw = 40; // vane width, per vane

setDocDimensions(width, height);

const t = new bt.Turtle();

// get perfect distance from center
let distanceFromCenter = (Math.sqrt(2) * shl) / 4;
// we start drawing at the lowest corner, so we must compensate to keep centered
let startOffset = (Math.sqrt(2) * shth) / 4;

// position to
t.left(45).jump([
  125 / 2 - distanceFromCenter + startOffset,
  125 / 2 - distanceFromCenter - startOffset,
]);

for (let i = 0; i < 2; i++) {
  t.forward(shl).left(90).forward(shth).left(90);
}

t.up()
  .forward(cl)
  .left(90)
  .forward(shth / 2)
  .right(135)
  .down();

let shortLength = (Math.sqrt(2) * vw) / 2;
let longLength = shl - cl - vw;

for (let i = 0; i < 2; i++) {
  t.forward(shortLength)
    .left(45)
    .forward(longLength)
    .left(45)
    .forward(shortLength)
    .left(90);
}

drawLines(t.lines());
