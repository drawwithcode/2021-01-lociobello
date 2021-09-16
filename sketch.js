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
  push();
  stroke("white");
  strokeWeight(4);
  translate(frameCount * 2, 0);
  line(0, mouseY, 0, windowHeight - mouseY);
  stroke("black");
  line(0, mouseY + 0.2 * mouseY, 0, windowHeight - mouseY - 0.2 * mouseY);
  line(0, windowHeight / 10, windowWidth, windowHeight / 10);
  pop();
  stroke("white");
  strokeWeight(0.5);
  line(0, (windowHeight / 10) * 2, windowWidth, (windowHeight / 10) * 2);
  line(0, (windowHeight / 10) * 3, windowWidth, (windowHeight / 10) * 3);
  line(0, (windowHeight / 10) * 4, windowWidth, (windowHeight / 10) * 4);
  line(0, (windowHeight / 10) * 5, windowWidth, (windowHeight / 10) * 5);
  line(0, (windowHeight / 10) * 6, windowWidth, (windowHeight / 10) * 6);
  line(0, (windowHeight / 10) * 7, windowWidth, (windowHeight / 10) * 7);
  line(0, (windowHeight / 10) * 8, windowWidth, (windowHeight / 10) * 8);
  line(0, (windowHeight / 10) * 9, windowWidth, (windowHeight / 10) * 9);
  line(0, (windowHeight / 10) * 10, windowWidth, (windowHeight / 10) * 10);
  stroke("red");
  translate(frameCount * 2, 0);
  line(0, mouseY, 0, windowHeight - mouseY);
}
