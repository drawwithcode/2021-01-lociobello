function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  stroke("white");
  strokeWeight(0.5);
  line(0, windowHeight * 0.05, windowWidth, windowHeight * 0.05);
  line(0, windowHeight * 0.15, windowWidth, windowHeight * 0.15);
  line(0, windowHeight * 0.3, windowWidth, windowHeight * 0.3);
  // line(0, windowHeight * 0.4, windowWidth, windowHeight * 0.4);
  line(0, windowHeight * 0.5, windowWidth, windowHeight * 0.5);
  // line(0, windowHeight * 0.6, windowWidth, windowHeight * 0.6);
  line(0, windowHeight * 0.7, windowWidth, windowHeight * 0.7);
  line(0, windowHeight * 0.85, windowWidth, windowHeight * 0.85);
  line(0, windowHeight * 0.95, windowWidth, windowHeight * 0.95);
}

function draw() {
  translate(frameCount * 2, 0);
  noStroke();
  fill("white");

  circle(0, mouseY, 5);
  circle(0, mouseY * 0.6, 4);
  circle(0, mouseY * 0.3, 4);
  circle(0, mouseY * 0.1, 4);

  push();
  translate(0, windowHeight - windowHeight * 0.1);
  circle(0, mouseY * 0.1, 4);
  pop();

  push();
  translate(0, windowHeight - windowHeight * 0.3);
  circle(0, mouseY * 0.3, 4);
  pop();

  push();
  translate(0, windowHeight - windowHeight * 0.6);
  circle(0, mouseY * 0.6, 4);
  pop();
}
