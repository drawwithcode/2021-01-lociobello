var x1 = 0;
var x2 = 102300;
var x3 = 1570;
var x4 = 50340;
var x5 = 435345;
var x6 = 4545;
var x7 = 7878;
var x8 = 40954;
var x9 = 23;
var x10 = 32424;
var x11 = 34343;
var x12 = 454545;
var x13 = 432524;
var x14 = 123322;
var x15 = 666;
var x16 = 999;
var x17 = 222;
var x18 = 111;
var x19 = 333;
var x20 = 23987498237;
var x21 = 5555;
var x22 = 9842656;

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  stroke("white");
  strokeWeight(0.5);
}

function draw() {
  let a = (height - mouseY) / 2;

  var h1 = (a * noise(x1)) / 4;
  var h2 = (a * noise(x2)) / 3;
  var h3 = (a * noise(x3)) / 2;
  var h4 = (a * noise(x4)) / 1.5;
  var h5 = (a * noise(x5)) / 1.2;
  var h6 = a * noise(x6);
  var h7 = a * noise(x7);
  var h8 = a * noise(x8);
  var h9 = a * noise(x9);
  var h10 = a * noise(x10);
  var h11 = a * noise(x11);
  var h12 = a * noise(x12);
  var h13 = a * noise(x13);
  var h14 = a * noise(x14);
  var h15 = a * noise(x15);
  var h16 = a * noise(x16);
  var h17 = (a * noise(x17)) / 1.2;
  var h18 = (a * noise(x18)) / 1.5;
  var h19 = (a * noise(x19)) / 1;
  var h20 = (a * noise(x20)) / 2;
  var h21 = (a * noise(x21)) / 3;
  var h22 = (a * noise(x22)) / 4;

  x1 += 0.003;
  x2 += 0.005;
  x3 += 0.008;
  x4 += 0.005;
  x5 += 0.01;
  x6 += 0.005;
  x7 += 0.01;
  x8 += 0.005;
  x9 += 0.01;
  x10 += 0.005;
  x11 += 0.01;
  x12 += 0.005;
  x13 += 0.015;
  x14 += 0.004;
  x15 += 0.012;
  x16 += 0.01;
  x17 += 0.012;
  x18 += 0.012;
  x19 += 0.007;
  x20 += 0.006;
  x21 += 0.005;
  x22 += 0.003;

  translate(frameCount * 2, 0);
  fill("white");
  strokeWeight(4);

  translate(0, height / 3.5);

  noStroke();
  circle(0, -h1, 4);
  stroke("black");
  line(0, height, 0, -h1 + 4);

  noStroke();
  circle(0, -h2 + 20, 4);
  stroke("black");
  line(0, height, 0, -h2 + 24);

  noStroke();
  circle(0, -h3 + 40, 4);
  stroke("black");
  line(0, height, 0, -h3 + 44);

  noStroke();
  circle(0, -h4 + 60, 4);
  stroke("black");
  line(0, height, 0, -h4 + 64);

  noStroke();
  circle(0, -h5 + 80, 4);
  stroke("black");
  line(0, height, 0, -h5 + 84);

  noStroke();
  circle(0, -h6 + 100, 4);
  stroke("black");
  line(0, height, 0, -h6 + 104);

  noStroke();
  circle(0, -h7 + 120, 4);
  stroke("black");
  line(0, height, 0, -h7 + 124);

  noStroke();
  circle(0, -h8 + 140, 4);
  stroke("black");
  line(0, height, 0, -h8 + 144);

  noStroke();
  circle(0, -h9 + 160, 4);
  stroke("black");
  line(0, height, 0, -h9 + 164);

  noStroke();
  circle(0, -h10 + 180, 4);
  stroke("black");
  line(0, height, 0, -h10 + 184);

  noStroke();
  circle(0, -h11 + 200, 4);
  stroke("black");
  line(0, height, 0, -h11 + 204);

  noStroke();
  circle(0, -h12 + 220, 4);
  stroke("black");
  line(0, height, 0, -h12 + 224);

  noStroke();
  circle(0, -h13 + 240, 4);
  stroke("black");
  line(0, height, 0, -h13 + 244);

  noStroke();
  circle(0, -h14 + 260, 4);
  stroke("black");
  line(0, height, 0, -h14 + 264);

  noStroke();
  circle(0, -h15 + 280, 4);
  stroke("black");
  line(0, height, 0, -h15 + 284);

  noStroke();
  circle(0, -h16 + 300, 4);
  stroke("black");
  line(0, height, 0, -h16 + 304);

  noStroke();
  circle(0, -h17 + 320, 4);
  stroke("black");
  line(0, height, 0, -h17 + 324);

  noStroke();
  circle(0, -h18 + 340, 4);
  stroke("black");
  line(0, height, 0, -h18 + 344);

  noStroke();
  circle(0, -h19 + 360, 4);
  stroke("black");
  line(0, height, 0, -h19 + 364);

  noStroke();
  circle(0, -h20 + 380, 4);
  stroke("black");
  line(0, height, 0, -h20 + 384);

  noStroke();
  circle(0, -h21 + 400, 4);
  stroke("black");
  line(0, height, 0, -h21 + 404);

  noStroke();
  circle(0, -h22 + 420, 4);
  stroke("black");
  line(0, height, 0, -h22 + 424);
}
