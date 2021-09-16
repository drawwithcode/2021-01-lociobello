function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  stroke("white");
  strokeWeight(0.5);
  line(0, windowHeight * 0.1, windowWidth, windowHeight * 0.1);
  line(0, windowHeight * 0.2, windowWidth, windowHeight * 0.2);
  line(0, windowHeight * 0.3, windowWidth, windowHeight * 0.3);
  line(0, windowHeight * 0.4, windowWidth, windowHeight * 0.4);
  line(0, windowHeight * 0.5, windowWidth, windowHeight * 0.5);
  line(0, windowHeight * 0.6, windowWidth, windowHeight * 0.6);
  line(0, windowHeight * 0.7, windowWidth, windowHeight * 0.7);
  line(0, windowHeight * 0.8, windowWidth, windowHeight * 0.8);
  line(0, windowHeight * 0.9, windowWidth, windowHeight * 0.9);
}

function draw() {
  translate(frameCount * 2, 0);
  noStroke();
  fill("white");
  circle(0, mouseY, 5);
  circle(0, mouseY * 0.5, 5);
  circle(0, mouseY * 0.3, 5);
  circle(0, mouseY * 0.1, 5);
  strokeWeight(5);
  stroke(255, 255, 255, 20);
  line(0, mouseY, 0, windowHeight);
  line(0, mouseY * 0.5, 0, windowHeight);
  line(0, mouseY * 0.3, 0, windowHeight);
  line(0, mouseY * 0.1, 0, windowHeight);
}
