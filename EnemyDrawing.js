/* EnemyDrawing - draws our enemies
 */
function EnemyDrawing() {}

/*Draws enemy one - Draws enemy One
 * @param {Canvas Drawing Context} ctx
 * @param {Number} x the x position
 * @param {Number} y the y position
 * @param {Number} rotation The shapes rotation (in radians)
 * @param {Number} pathWidth The width of our path (the true width is double this value)
 * @param {String} Color1...Color 4: Colors
 */
EnemyDrawing.draw1 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw2 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw3 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw4 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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

  /*
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
	
//Left
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
*/
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
EnemyDrawing.draw5 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw6 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
  ctx.rotate(rotation + 9.43);

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
EnemyDrawing.draw7 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw8 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw9 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
EnemyDrawing.draw10 = function (ctx, x, y, rotation, pathWidth, color1, color2, color3, color4) {
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
