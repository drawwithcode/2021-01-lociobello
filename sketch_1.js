function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  stroke("white");
  strokeWeight(1);
}

function draw() {
  stroke("white");
  strokeWeight(4);
  translate(frameCount * 2, 0);
  line(0, mouseY, 0, windowHeight - mouseY);
  stroke("black");
  line(0, mouseY + 0.2 * mouseY, 0, windowHeight - mouseY - 0.2 * mouseY);
  stroke("white");
  strokeWeight(0.2);
  line(0, windowHeight * 0.1, windowWidth, windowHeight * 0.1);
  line(0, windowHeight * 0.2, windowWidth, windowHeight * 0.2);
  line(0, windowHeight * 0.3, windowWidth, windowHeight * 0.3);
  line(0, windowHeight * 0.4, windowWidth, windowHeight * 0.4);
  line(0, windowHeight * 0.5, windowWidth, windowHeight * 0.5);
  line(0, windowHeight * 0.6, windowWidth, windowHeight * 0.6);
  line(0, windowHeight * 0.7, windowWidth, windowHeight * 0.7);
  line(0, windowHeight * 0.8, windowWidth, windowHeight * 0.8);
  line(0, windowHeight * 0.9, windowWidth, windowHeight * 0.9);
  // stroke("white");
  // translate(frameCount * 2, 0);
  // line(0, 0, 0, windowHeight);
}
