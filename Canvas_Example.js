//screen variables
var backgorund1;
var ctx1;

var WIDTH = 1024;
var HEIGHT = 576;

var SCREEN_X = 25;
var SCREEN_Y = 115;
var SCREEN_WIDTH = 820;
var SCREEN_HEIGHT = 430;

//init --> initializes the canvas drawing contextual
function init() {
  //grabs the canvas element
  background1 = document.getElementById("background1");
  //gets a drawing context from the canvas element
  ctx1 = backgorund1.getcontext("2d");
  draw();
}

//draws some stuff
function draw() {
  ctx1.fillStyle = "#222222"; //dark Gray
  ctx1.fillRect(0, 0, WIDTH, HEIGHT);
}
