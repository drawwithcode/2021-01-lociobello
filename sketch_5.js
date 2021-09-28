var x1 = 0;
var x2 = 102300;
var x3 = 1570;
var x4 = 50340;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  stroke("white");
  strokeWeight(0.5);
  // line(0, windowHeight * 0.05, windowWidth, windowHeight * 0.05);
  // line(0, windowHeight * 0.15, windowWidth, windowHeight * 0.15);
  // line(0, windowHeight * 0.3, windowWidth, windowHeight * 0.3);
  // line(0, windowHeight * 0.5, windowWidth, windowHeight * 0.5);
  // line(0, windowHeight * 0.7, windowWidth, windowHeight * 0.7);
  // line(0, windowHeight * 0.85, windowWidth, windowHeight * 0.85);
  // line(0, windowHeight * 0.95, windowWidth, windowHeight * 0.95);
}

function draw() {
  let a = mouseY * 0.8;

  var h1 = (noise(x1) * a) / 2;
  var h2 = (noise(x2) * a) / 2;
  var h3 = (noise(x3) * a) / 2;
  var h4 = (noise(x4) * a) / 2;

  x1 += 0.01;
  x2 += 0.005;
  x3 += 0.01;
  x4 += 0.005;

  translate(frameCount * 2, 0);
  fill("white");

  strokeWeight(4);

  noStroke();
  circle(0, a + h4 + 90, 4);
  stroke("black");
  line(0, 0, 0, a + h4 + 86);

  noStroke();
  circle(0, a + h3 + 60, 4);
  stroke("black");
  line(0, 0, 0, a + h3 + 56);

  noStroke();
  circle(0, a + h2 + 30, 4);
  stroke("black");
  line(0, 0, 0, a + h2 + 26);

  noStroke();
  circle(0, a + h1, 4);
  stroke("black");
  line(0, 0, 0, a + h1 - 4);
}
