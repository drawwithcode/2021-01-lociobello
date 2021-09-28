function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  let easing = 0.1;
  strokeWeight(1);
  stroke("white");
  noFill();
  // rect(0, 0, windowWidth, windowHeight);
  // translate(windowWidth / 2, windowHeight / 2);
  // scale(frameCount / 360);
  // translate(-windowWidth / 2, -windowHeight / 2);
  // rect(0, 0, windowWidth, windowHeight);
  rectMode(CENTER);
  rect(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth - frameCount * 30,
    windowHeight - frameCount * 30
  );
  if (frameCount === 30) {
    noLoop();
  }
}
