//screen variables
var background1;
var ctx1;

var WIDTH = 1024;
var HEIGHT = 576;

var SCREEN_X = 25;
var SCREEN_Y = 115;
var SCREEN_WIDTH = 820;
var SCREEN_HEIGHT = 430;

//init --> Initializes the canvas drawing context
function init() {
  //grabs the canvas element
  background1 = document.getElementById("background1");
  //gets a drawing context from the canvas element
  ctx1 = background1.getContext("2d");
  draw(ctx1);
}

//draws some stuff
function draw(ctx) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  EnemyDrawing.draw1(
    ctx,
    100,
    100,
    0,
    30,
    "#cc0000",
    "#000000",
    "#00ff00",
    "#000000"
  );
  EnemyDrawing.draw2(
    ctx,
    200,
    100,
    0,
    30,
    "#9d2ade",
    "#000000",
    "#0000cc",
    "#000000"
  );
  EnemyDrawing.draw3(
    ctx,
    300,
    100,
    0,
    30,
    "#aaaaaa",
    "#000000",
    "#0000cc",
    "#000000"
  );
  EnemyDrawing.draw4(
    ctx,
    400,
    100,
    0,
    30,
    "#0000cc",
    "#800000",
    "#00cc00",
    "#cc0000"
  );
  EnemyDrawing.draw5(
    ctx,
    500,
    100,
    0,
    30,
    "#e0be1a",
    "#000000",
    "#0000cc",
    "#000000"
  );
  EnemyDrawing.draw6(
    ctx,
    100,
    300,
    0,
    30,
    "#00CC00",
    "#000000",
    "#0000cc",
    "#000000"
  );
  EnemyDrawing.draw7(
    ctx,
    200,
    300,
    0,
    30,
    "#9d2ade",
    "#000000",
    "#0000cc",
    "#cc0000"
  );
  EnemyDrawing.draw8(
    ctx,
    300,
    300,
    0,
    30,
    "#00CC00",
    "#000000",
    "#0000cc",
    "#000000"
  );
  EnemyDrawing.draw9(
    ctx,
    400,
    300,
    0,
    30,
    "#af0038",
    "#000000",
    "#ff0000",
    "#0000cc"
  );
  EnemyDrawing.draw10(
    ctx,
    500,
    300,
    0,
    30,
    "#00CC00",
    "#000000",
    "#0000cc",
    "#cc0000"
  );

  /*//corners
	drawCannon(ctx, 20, 20, 1, 1, 45, false); //TOP left
	drawCannon(ctx, 1009, 20, 1, 1, 125, false); //TOP right
	drawCannon(ctx, 1009, 561, 1, 1, 225, false); //BOTTOM right
	drawCannon(ctx, 20, 561, 1, 1, 315, false); //BOTTOM left
	//sides
	drawTurret(ctx, 504, 20, 1, 1, 90, false); //TOP middle
	drawTurret(ctx, 1009, 280, 1, 1, 180, false); //RIGHT middle
	drawTurret(ctx, 504, 561, 1, 1, 270, false); //BOTTOM middle
	drawTurret(ctx, 20, 280, 1, 1, 0, false); //LEFT middle
	//machine gun
	drawMachineGun(ctx, 524, 280, 1, 1, 0, false); //MIDDLE right
	drawLauncher(ctx, 504, 250, 1, 1, 270, false); //MIDDLE top
	drawDome(ctx, 484, 280, 1, 1, 180, false);//MIDDLE left
	drawSpinner(ctx, 504, 320, 1, 1, 90, false);//MIDDLE bottom
	drawSlicer(ctx, 540, 250, 1, 1, 50, false);//MIDDLE Top right
	drawRockets(ctx, 550, 320, 1,1, 0, false);//MIDDLE Bottom right
	drawSlingShot(ctx, 460, 320, 1, 1, 90, false);//MIDDLE Bottom left
	drawCircle(ctx, 460, 250, 1, 1, 0, false);//MIDDLE Top left
	*/
}

/* EnemyDrawingFunction - draws our enemies
 */
function EnemyDrawing() {}

/* draws enemy 1
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw1 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a square
  ctx.beginPath();
  ctx.moveTo(-20, -20);
  ctx.lineTo(20, -20);
  ctx.lineTo(20, 20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(-20, -20);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;

  //draw a square
  ctx.beginPath();
  ctx.moveTo(20, -15);
  ctx.lineTo(15, -15);
  ctx.lineTo(10, 0);
  ctx.lineTo(15, 15);
  ctx.lineTo(20, 15);
  ctx.lineTo(20, -15);
  ctx.fill();
  ctx.stroke();

  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 2
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw2 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(-20, -20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(20, 0);
  ctx.lineTo(-20, -20);
  ctx.fill();
  ctx.stroke();

  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 3
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw3 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //Draw the circle base
  ctx.beginPath();
  ctx.arc(0, 0, 20, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;
  //Draw the circle base
  ctx.beginPath();
  ctx.arc(15, 0, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 4
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw4 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //Draw the circle base
  ctx.beginPath();
  ctx.arc(0, 0, 25, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;

  //Top
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-20, -40);
  ctx.lineTo(-15, -40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-10, -40);
  ctx.lineTo(-5, -40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -40);
  ctx.lineTo(5, -40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(10, -40);
  ctx.lineTo(15, -40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(20, -40);
  ctx.lineTo(25, -40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();

  /*Left
		//draw a trianlge
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(-40, -20);
		ctx.lineTo(-40, -15);
		ctx.lineTo(0, 0);
		ctx.fill();
		ctx.stroke();
		//draw a trianlge
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(-40, -10);
		ctx.lineTo(-40, -5);
		ctx.lineTo(0, 0);
		ctx.fill();
		ctx.stroke();
		//draw a trianlge
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(-40, 0);
		ctx.lineTo(-40, 5);
		ctx.lineTo(0, 0);
		ctx.fill();
		ctx.stroke();
		//draw a trianlge
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(-40, 10);
		ctx.lineTo(-40, 15);
		ctx.lineTo(0, 0);
		ctx.fill();
		ctx.stroke();
	*/
  //Bottom
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-20, 40);
  ctx.lineTo(-15, 40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-10, 40);
  ctx.lineTo(-5, 40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 40);
  ctx.lineTo(5, 40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(10, 40);
  ctx.lineTo(15, 40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(20, 40);
  ctx.lineTo(25, 40);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();

  //Right
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(40, -20);
  ctx.lineTo(40, -15);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(40, -10);
  ctx.lineTo(40, -5);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(40, 0);
  ctx.lineTo(40, 5);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //draw a trianlge
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(40, 10);
  ctx.lineTo(40, 15);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();
  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 5
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw5 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a square
  ctx.beginPath();
  ctx.moveTo(-20, -20);
  ctx.lineTo(20, -20);
  ctx.lineTo(0, 0);
  ctx.lineTo(20, 20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(-20, -20);
  ctx.fill();
  ctx.stroke();

  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 6
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw6 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //Draw the circle base
  ctx.beginPath();
  ctx.arc(0, 0, 20, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color4;
  ctx.strokeStyle = color2;
  //Draw the left circle
  ctx.beginPath();
  ctx.arc(-15, -15, 12, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draw the right circle
  ctx.beginPath();
  ctx.arc(15, -15, 12, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;
  //Draw the middle left circle
  ctx.beginPath();
  ctx.arc(-6, 0, 3, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //Draw the middle right circle
  ctx.beginPath();
  ctx.arc(6, 0, 3, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color2;
  //draw a square
  ctx.beginPath();
  ctx.moveTo(-10, 5);
  ctx.lineTo(-5, 10);
  ctx.lineTo(0, 10);
  ctx.lineTo(5, 10);
  ctx.lineTo(10, 5);
  ctx.lineTo(10, 10);
  ctx.lineTo(5, 15);
  ctx.lineTo(0, 15);
  ctx.lineTo(-5, 15);
  ctx.lineTo(-10, 10);
  ctx.lineTo(-10, 5);
  ctx.fill();
  ctx.stroke();

  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 7
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw7 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;
  //draw box
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-20, 0);
  ctx.lineTo(-20, 20);
  ctx.lineTo(20, 20);
  ctx.lineTo(20, 0);
  ctx.lineTo(-20, 0);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;
  //draw a left antana
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-20, -10);
  ctx.lineTo(-18, -20);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();

  //draw right antana
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(20, -10);
  ctx.lineTo(18, -20);
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.stroke();

  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 8
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw8 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a hour glass
  ctx.beginPath();
  ctx.moveTo(-20, -20);
  ctx.lineTo(20, -20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(20, 20);
  ctx.lineTo(-20, -20);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color2;
  //draw the circle
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 9
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw9 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a trapazoide
  ctx.beginPath();
  ctx.moveTo(-10, -20);
  ctx.lineTo(10, -20);
  ctx.lineTo(20, 20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(-10, -20);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;

  //draw V top
  ctx.beginPath();
  ctx.moveTo(9, -20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(11, -18);
  ctx.lineTo(9, -20);
  ctx.fill();
  ctx.stroke();
  //draw V bottom
  ctx.beginPath();
  ctx.moveTo(14, 0);
  ctx.lineTo(-20, 20);
  ctx.lineTo(16, 2);
  ctx.lineTo(14, 0);
  ctx.fill();
  ctx.stroke();

  //Draw the circle
  ctx.beginPath();
  ctx.arc(3, 0, 5, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* draws enemy 10
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} Y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param (Number) pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color4 : Colors
 */
EnemyDrawing.draw10 = function (
  ctx,
  x,
  y,
  rotation,
  pathWidth,
  color1,
  color2,
  color3,
  color4
) {
  //svae the default state
  ctx.save();

  //translate our shape
  ctx.translate(x, y);
  //scale our shape
  var width = 20; //assume that our enemy will fit in a 40 by 40 box
  var scaleX = pathWidth / width;
  var scaleY = pathWidth / width;
  ctx.scale(scaleX, scaleY);
  //rotate our shape (in radians)
  ctx.rotate(rotation);

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a square
  ctx.beginPath();
  ctx.moveTo(-20, -20);
  ctx.lineTo(20, -20);
  ctx.lineTo(20, 20);
  ctx.lineTo(-20, 20);
  ctx.lineTo(-20, -20);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;

  //draw a square
  ctx.beginPath();
  ctx.moveTo(-16, -16);
  ctx.lineTo(16, -16);
  ctx.lineTo(16, 16);
  ctx.lineTo(-16, 16);
  ctx.lineTo(-16, -16);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;

  //draw a square
  ctx.beginPath();
  ctx.moveTo(-12, -12);
  ctx.lineTo(12, -12);
  ctx.lineTo(12, 12);
  ctx.lineTo(-12, 12);
  ctx.lineTo(-12, -12);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;
  //draw a square
  ctx.beginPath();
  ctx.moveTo(-8, -8);
  ctx.lineTo(8, -8);
  ctx.lineTo(8, 8);
  ctx.lineTo(-8, 8);
  ctx.lineTo(-8, -8);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color1;
  ctx.strokeStyle = color2;
  //draw a square
  ctx.beginPath();
  ctx.moveTo(-4, -4);
  ctx.lineTo(4, -4);
  ctx.lineTo(4, 4);
  ctx.lineTo(-4, 4);
  ctx.lineTo(-4, -4);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color4;
  //draw a square
  ctx.beginPath();
  ctx.moveTo(-2, -2);
  ctx.lineTo(2, -2);
  ctx.lineTo(2, 2);
  ctx.lineTo(-2, 2);
  ctx.lineTo(-2, -2);
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color4;
  ctx.strokeStyle = color2;
  //Draw the circle
  ctx.beginPath();
  ctx.arc(5, 0, 4, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color3;
  ctx.strokeStyle = color1;
  //Draw the circle bottom
  ctx.beginPath();
  ctx.arc(10, 5, 3, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //Draw the circle top
  ctx.beginPath();
  ctx.arc(10, -5, 3, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //draw the shape
  ctx.fillStyle = color4;
  ctx.strokeStyle = color3;
  //Draw the circle bottom
  ctx.beginPath();
  ctx.arc(15, 13, 4, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //Draw the circle top
  ctx.beginPath();
  ctx.arc(15, -13, 4, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  //restore the shape (get red of all our rotation, translation, scale, ect)
  ctx.restore();
};

/* Cannons/turrets/towers
//draw cannon
//@pram {double} x the cannon's x position
//@pram {double} y the cannon's y position
function drawCannon(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00"; //green
	} else {
		ctx.strokeStyle="#000000"; //black
	}

	ctx.fillStyle="#aaaaaa"; //circle base grey
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	//Draw the Cannon
	ctx.beginPath();
	ctx.moveTo(0,-5);
	ctx.lineTo(25,-5);
	ctx.lineTo(25,5);
	ctx.lineTo(0,5);
	ctx.lineTo(0,-5);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,7,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw machine gun
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawTurret(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#000000"; //black
	}

	ctx.fillStyle="#00008b"; //circle base purple
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //cannon Dark red
	//Draw the Cannon
	ctx.beginPath();
	ctx.moveTo(0,-3);
	ctx.lineTo(25,-3);
	ctx.lineTo(25,3);
	ctx.lineTo(0,3);
	ctx.lineTo(0,-3);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#666666"; //gun 1 dark grey
	//Draw the 1st gun
	ctx.beginPath();
	ctx.moveTo(0,-8);
	ctx.lineTo(20,-8);
	ctx.lineTo(20,-2);
	ctx.lineTo(0,-2);
	ctx.lineTo(0,-8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#0000ff"; //dots on gun blue
	//draw circles for 1st gun
	for(var i = 2; i <= 17; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, -5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}

	ctx.fillStyle="#666666"; //gun 2 dark grey
	//Draw the 2nd gun
	ctx.beginPath();
	ctx.moveTo(0,8);
	ctx.lineTo(20,8);
	ctx.lineTo(20,2);
	ctx.lineTo(0,2);
	ctx.lineTo(0,8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#0000ff"; //dots on gun  blue
	//draw circles for 2nd gun
	for(var i = 2; i <= 17; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, 5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}

	ctx.fillStyle="#009999"; //top circle bright blue
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw machine gun
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawMachineGun(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#000000"; //black
	}

	ctx.fillStyle="#800080"; //circle base purple
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#666666"; //gun 1 dark grey
	//Draw the 1st gun
	ctx.beginPath();
	ctx.moveTo(0,-8);
	ctx.lineTo(25,-8);
	ctx.lineTo(25,-2);
	ctx.lineTo(0,-2);
	ctx.lineTo(0,-8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#0000ff"; //dots on gun blue
	//draw circles for 1st gun
	for(var i = 2; i <= 22; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, -5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}

	ctx.fillStyle="#666666"; //gun 2 dark grey
	//Draw the 2nd gun
	ctx.beginPath();
	ctx.moveTo(0,8);
	ctx.lineTo(25,8);
	ctx.lineTo(25,2);
	ctx.lineTo(0,2);
	ctx.lineTo(0,8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#0000ff"; //dots on gun  blue
	//draw circles for 2nd gun
	for(var i = 2; i <= 22; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, 5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}

	ctx.fillStyle="#800080"; //top circle purple
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw launcher
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawLauncher(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#990000"; //dark red
	}

	ctx.fillStyle="#136c13"; //circle base dark green
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b38600"; //1st gun dark yellow
	//Draw the 1st gun
	ctx.beginPath();
	ctx.moveTo(0,-8);
	ctx.lineTo(32,-7);
	ctx.lineTo(35,0);
	ctx.lineTo(32,7);
	ctx.lineTo(0,8);
	ctx.lineTo(0,-8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //bottom arrow dark red
	//Draw the bottom arrow
	ctx.beginPath();
	ctx.moveTo(5,3);//bottom left
	ctx.lineTo(16,3);//bottom right
	ctx.lineTo(16,-3);//top right
	ctx.lineTo(5,-3);//top left
	ctx.lineTo(5,3);//bottom left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //top arrow dark red
	//Draw the top arrow
	ctx.beginPath();
	ctx.moveTo(16,5);//bottom left
	ctx.lineTo(32,0);//middle right
	ctx.lineTo(16,-5);//top left
	ctx.lineTo(16,5);//bottom left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#e67300"; //top circle orange
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw Dome
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawDome(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#999999"; //silver
	}

	ctx.fillStyle="#00ffff"; //circle base bright blue
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#666666"; //1st gun dark grey
	//Draw the 1st gun
	ctx.beginPath();
	ctx.moveTo(0,-5);//top left
	ctx.lineTo(20,-5);//top right
	ctx.lineTo(20,5);//bottom right
	ctx.lineTo(0,5);//bottom left
	ctx.lineTo(0,-5);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //square on 1st gun dark red
	//Draw the square on 1st gun
	ctx.beginPath();
	ctx.moveTo(5,-1);//top left
	ctx.lineTo(16,-1);//top right
	ctx.lineTo(16,1);//bottom right
	ctx.lineTo(5,1);//bottom left
	ctx.lineTo(5,-1);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#666666"; //2nd gun dark grey
	//Draw the 2nd gun
	ctx.beginPath();
	ctx.moveTo(-5,0);//top left
	ctx.lineTo(-5,20);//top right
	ctx.lineTo(5,20);//bottom right
	ctx.lineTo(5,0);//bottom left
	ctx.lineTo(-5,0);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //square on 2nd gun dark red
	//Draw the square on 2nd gun
	ctx.beginPath();
	ctx.moveTo(-1,5);//top left
	ctx.lineTo(-1,16);//top right
	ctx.lineTo(1,16);//bottom right
	ctx.lineTo(1,5);//bottom left
	ctx.lineTo(-1,5);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();


	ctx.fillStyle="#666666"; //3rd gun dark grey
	//Draw the 3rd gun
	ctx.beginPath();
	ctx.moveTo(0,-5);//top left
	ctx.lineTo(-20,-5);//top right
	ctx.lineTo(-20,5);//bottom right
	ctx.lineTo(0,5);//bottom left
	ctx.lineTo(0,-5);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //square on 3rd gun dark red
	//Draw the square on 3rd gun
	ctx.beginPath();
	ctx.moveTo(-5,-1);//top left
	ctx.lineTo(-16,-1);//top right
	ctx.lineTo(-16,1);//bottom right
	ctx.lineTo(-5,1);//bottom left
	ctx.lineTo(-5,-1);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#666666"; //4th gun dark grey
	//Draw the 4th gun
	ctx.beginPath();
	ctx.moveTo(5,0);//top left
	ctx.lineTo(5,-20);//top right
	ctx.lineTo(-5,-20);//bottom right
	ctx.lineTo(-5,0);//bottom left
	ctx.lineTo(5,0);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //square on 1st gun dark red
	//Draw the square on 1st gun
	ctx.beginPath();
	ctx.moveTo(1,-5);//top left
	ctx.lineTo(1,-16);//top right
	ctx.lineTo(-1,-16);//bottom right
	ctx.lineTo(-1,-5);//bottom left
	ctx.lineTo(1,-5);//top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#800080"; //gun top circle purple
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="	#8040bf"; //top circle purple
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,6.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	//restore transformations to normal
	ctx.restore();

}

//draw Spinner
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawSpinner(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#ff8080"; //black
	}

	ctx.fillStyle="#000000"; //circle base black
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.strokeStyle="#ff8080";
	ctx.fillStyle="#b38600"; //1st spike gold
	//Draw the 1st spike
	ctx.beginPath();
	ctx.moveTo(0,-8);
	ctx.lineTo(24,-8);
	ctx.lineTo(0,8);
	ctx.lineTo(24,8);
	ctx.lineTo(0,-8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b38600"; //2nd spike gold
	//Draw the 2nd spike
	ctx.beginPath();
	ctx.moveTo(-8,0);
	ctx.lineTo(-8,24);
	ctx.lineTo(8,0);
	ctx.lineTo(8,24);
	ctx.lineTo(-8,0);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b38600"; //3rd spike gold
	//Draw the 3rd spike
	ctx.beginPath();
	ctx.moveTo(0,8);
	ctx.lineTo(-24,8);
	ctx.lineTo(0,-8);
	ctx.lineTo(-24,-8);
	ctx.lineTo(0,8);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b38600"; //4th spike gold
	//Draw the 4th spike
	ctx.beginPath();
	ctx.moveTo(8,0);
	ctx.lineTo(8,-24);
	ctx.lineTo(-8,0);
	ctx.lineTo(-8,-24);
	ctx.lineTo(8,0);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b33000"; //top circle dark orange
	ctx.strokeStyle="#000000";
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,11,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw cannon
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawSlicer(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	ctx.fillStyle="#aaaaaa";
	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";
	} else {
		ctx.strokeStyle="#af111c";
	}

	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#666666";//dark grey
	//Draw the slicer
	ctx.beginPath();
	ctx.moveTo(25,-5); //top left
	ctx.lineTo(27,-5); //top right
	ctx.lineTo(27,0); //middle right
	ctx.lineTo(-27,0); //middle left
	ctx.lineTo(-27,5); //bottom left
	ctx.lineTo(-25,5); //bottom right
	ctx.lineTo(25,-5); //top left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,7,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw Rockets
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawRockets(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#000000"; //black
	}

	ctx.fillStyle="#0c090a"; //circle base night
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#2c3539"; //1st gun iridium
	//Draw the 1st gun
	ctx.beginPath();
	ctx.moveTo(0,-6);
	ctx.lineTo(24,-5);
	ctx.lineTo(24,5);
	ctx.lineTo(0,6);
	ctx.lineTo(0,-6);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //top arrow dark red
	//Draw the top arrow
	ctx.beginPath();
	ctx.moveTo(24,7);//bottom left
	ctx.lineTo(32,0);//middle right
	ctx.lineTo(24,-7);//top left
	ctx.lineTo(24,7);//bottom left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#3d3c3a"; //top circle gunmetal
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

//draw Sling Shot
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawSlingShot(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00";//green
	} else {
		ctx.strokeStyle="#000000"; //dark red
	}

	ctx.fillStyle="#6E470B"; //circle base dark brown
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b38600"; //1st sling shot arm dark brown
	//Draw the 1st arm
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(24,-24);
	ctx.lineTo(24,-21);
	ctx.lineTo(0,2);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#b38600"; //2nd sling shot arm dark brown
	//Draw the 2nd arm
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(24,24);
	ctx.lineTo(24,21);
	ctx.lineTo(0,-2);
	ctx.lineTo(0,0);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#cc0000"; //sling dark red
	//Draw the sliing
	ctx.beginPath();
	ctx.moveTo(18,15);//bottom left
	ctx.lineTo(18,-15);//middle left
	ctx.lineTo(20,-18);//
	ctx.lineTo(20,17);//top left
	ctx.lineTo(18,15);//bottom left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#966F33"; //top circle wood
	//Draw the top circle
	ctx.beginPath();
	ctx.arc(0,0,7,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();
}

//draw circle
 //@pram {double} x the cannon's x position
 //@pram {double} y the cannon's y position
 function drawCircle(ctx, x, y, scaleX, scaleY, rotation, isHighlighted){
	//save the default state
	ctx.save();

	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation*Math.PI / 180);

	if(isHighlighted) {
		ctx.strokeStyle="#00ff00"; //green
	} else {
		ctx.strokeStyle="#000000"; //black
	}

	ctx.fillStyle="#aaaaaa"; //circle base grey
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.strokeStyle="#000000"; //black
	ctx.fillStyle="#ff0000"; //top circle 1 red
	//Draw the top of Circle 1
	ctx.beginPath();
	ctx.arc(-7,-9,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#0000ff"; //top circle 2 blue
	//Draw the top of Circle 2
	ctx.beginPath();
	ctx.arc(-1,-11,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#ffff00"; //top circle 3 yellow
	//Draw the top of Circle 3
	ctx.beginPath();
	ctx.arc(5,-10,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#008000"; //top circle 4 green
	//Draw the top of Circle 4
	ctx.beginPath();
	ctx.arc(10,-6,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#000000"; //top circle 5 black
	//Draw the top of Circle 5
	ctx.beginPath();
	ctx.arc(11,0,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#ff00ff"; //top circle 6 magenta
	//Draw the top of Circle 6
	ctx.beginPath();
	ctx.arc(10,6,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#800080"; //top circle 7 purple
	//Draw the top of Circle 7
	ctx.beginPath();
	ctx.arc(5,10,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#6E470B"; //top circle 8 dark brown
	//Draw the top of Circle 8
	ctx.beginPath();
	ctx.arc(-2,11,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#966F33"; //top circle 9 wood
	//Draw the top of Circle 9
	ctx.beginPath();
	ctx.arc(-8,8,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#ff5500"; //top circle 10 red orange
	//Draw the top of Circle 10
	ctx.beginPath();
	ctx.arc(-11,2,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#ffff00"; //top circle 11 yellow
	//Draw the top of Circle 11
	ctx.beginPath();
	ctx.arc(-11,-4,2.5,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#008000"; //top circle 12 green
	//Draw the top of Circle 12
	ctx.beginPath();
	ctx.arc(-5,-3,3,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#ff0000"; //top circle 13 red
	//Draw the top of Circle 13
	ctx.beginPath();
	ctx.arc(2,-4,3,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#0000ff"; //top circle 14 blue
	//Draw the top of Circle 14
	ctx.beginPath();
	ctx.arc(4,3,3,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="#ffff00"; //top circle 15 yellow
	//Draw the top of Circle 15
	ctx.beginPath();
	ctx.arc(-2,4,3,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();

	//restore transformations to normal
	ctx.restore();

}

function degreesTORadians(degrees){
	return Math.PI * degrees / 180;
};

*/
