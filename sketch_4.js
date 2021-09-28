const MAX_HEIGHT = 600;
const MAX_WIDTH = 600;
const STEP = 16;

function setup() {
  createCanvas(MAX_HEIGHT, MAX_WIDTH);
  stroke(169, 251, 215);
  strokeWeight(2);
  noLoop();
  background("black");
}
function draw() {
  const lines = [];
  for (let i = STEP; i < MAX_HEIGHT - STEP; i += STEP) {
    lines.push([
      { x: STEP, y: i },
      { x: MAX_HEIGHT, y: i },
    ]);
  }

  // draw
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j += 2) {
      line(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
    }
  }
}
