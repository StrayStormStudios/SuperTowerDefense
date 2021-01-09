/*Tower Drawing - Sets the code for drawing a tower */

function TowerDrawing(){}

/*Tower Drawing for tower 1
* @param {CanvasDrawingContext} ctx
* @param {Number} x Position
* @param {Number} y Position
* @param {Number} scaleX The X direction scale
* @param {Number} scaleY The Y direction scale
* @param {Number} rotation The rotation (in radians)
* @param {Boolean} isHighlighted , Is the tower Highlighted?
* @param {Boolean} useDefaultColors Should we use default colors?
* @param {String} color1 The first color of the tower
* @param {String} color2 The second color of the tower
* @param {String} color3 The third color of the tower
* @param {String} color4 The fourth color of the tower
* @param {String} highlightColor The color of the highlighted stroke
*/
TowerDrawing.draw1 = function(ctx, x, y, scaleX, scaleY, rotation,
    isHighlighted,useDefaultColors, color1, color2, color3, color4, highlightColor){
	//color 1 = body color
	//color 2 = top color 
	//color 3 = cannon color
	//color 4 = normal stroke
	//highlightColor = highlighted stroke
	if(useDefaultColors){
		color1 = "#aaaaaa";
		color2 = "#444455";
		color3 = "#555566";
		color4 = "#000000";
		highlightColor = "#00ff00";
	}
	
	//save the default state
	ctx.save();
	
	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX,scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation);
	
	if(isHighlighted){
		ctx.strokeStyle = highlightColor;
	} else {
		ctx.strokeStyle = color4;
	}
	
	ctx.fillStyle = color1;
	//DRAW THE CIRCLE BASE
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	
	ctx.fillStyle = color2;
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
	
	
	ctx.fillStyle = color3;
	//Draw top of Circle
	ctx.beginPath();
	ctx.arc(0,0,8,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}

/*Tower Drawing for tower 2
* @param {CanvasDrawingContext} ctx
* @param {Number} x Position
* @param {Number} y Position
* @param {Number} scaleX The X direction scale
* @param {Number} scaleY The Y direction scale
* @param {Number} rotation The rotation (in radians)
* @param {Boolean} isHighlighted , Is the tower Highlighted?
* @param {String} color1 The first color of the tower
* @param {String} color2 The second color of the tower
* @param {String} color3 The third color of the tower
* @param {String} color4 The fourth color of the tower
* @param {String} highlightColor The color of the highlighted stroke
*/
TowerDrawing.draw2 = function(ctx, x, y, scaleX, scaleY, rotation, 
	isHighlighted, useDefaultColors, color1, color2, color3, color4, upgradeColor, highlightColor){
	//color 1 = body color
	//color 2 = top color 
	//color 3 = cannon color
	//color 4 = normal stroke
	//upgradeColor = color to change to after upgrade
	//highlightColor = highlighted stroke
	if(useDefaultColors){
		color1 = "#800080";
		color2 = "#666666";
		color3 = "#0000ff";
		color4 = "#000000";
		highlightColor = "#00ff00";
	}
	
	//save the default state
	ctx.save();
	
	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX,scaleY);
	ctx.rotate(rotation);
	
	if(isHighlighted){
		ctx.strokeStyle = highlightColor;
	} else {
		ctx.strokeStyle =color4;
	}
	
	ctx.fillStyle = color1;
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle = color2;
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
	
	ctx.fillStyle = color3;
	//draw circles for 1st gun
	for(var i = 2; i <= 22; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, -5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}
	
	ctx.fillStyle = color2;
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
	
	ctx.fillStyle = color3;
	//draw circles for 2nd gun
	for(var i = 2; i <= 22; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, 5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}
	
	ctx.fillStyle = color1;
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	//restore transformations to normal
	ctx.restore();

}

/*Tower Drawing for tower 3
* @param {CanvasDrawingContext} ctx
* @param {Number} x Position
* @param {Number} y Position
* @param {Number} scaleX The X direction scale
* @param {Number} scaleY The Y direction scale
* @param {Number} rotation The rotation (in radians)
* @param {Boolean} isHighlighted , Is the tower Highlighted?
* @param {Boolean} useDefaultColors Should we use default colors?
* @param {String} color1 The first color of the tower
* @param {String} color2 The second color of the tower
* @param {String} color3 The third color of the tower
* @param {String} color4 The fourth color of the tower
* @param {String} highlightColor The color of the highlighted stroke
*/
TowerDrawing.draw3 = function(ctx, x, y, scaleX, scaleY, rotation, 
    isHighlighted, useDefaultColors, color1, color2, color3, color4,  highlightColor){
	//color 1 = body color
	//color 2 = top color 
	//color 3 = cannon color
	//color 4 = normal stroke
	//highlightColor = highlighted stroke
	if(useDefaultColors){
		color1 = "#aaaaaa";
		color2 = "#000000";
		color3 = "#00cc00";
		color4 = "#000000";
		highlightColor = "#00ff00";
	}
	
	//save the default state
	ctx.save();
	
	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX,scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation);
	
	if(isHighlighted){
		ctx.strokeStyle = highlightColor;
	} else {
		ctx.strokeStyle = color4;
	}
	
	ctx.fillStyle = color1;
	//DRAW THE CIRCLE BASE
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
 
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

/*Tower Drawing for tower 4
* @param {CanvasDrawingContext} ctx
* @param {Number} x Position
* @param {Number} y Position
* @param {Number} scaleX The X direction scale
* @param {Number} scaleY The Y direction scale
* @param {Number} rotation The rotation (in radians)
* @param {Boolean} isHighlighted , Is the tower Highlighted?
* @param {Boolean} useDefaultColors Should we use default colors?
* @param {String} color1 The first color of the tower
* @param {String} color2 The second color of the tower
* @param {String} color3 The third color of the tower
* @param {String} color4 The fourth color of the tower
* @param {String} highlightColor The color of the highlighted stroke
*/
TowerDrawing.draw4 = function(ctx, x, y, scaleX, scaleY, rotation, 
    isHighlighted, useDefaultColors, color1, color2, color3, color4,  highlightColor){
	//color 1 = body color
	//color 2 = top color 
	//color 3 = cannon color
	//color 4 = normal stroke
	//highlightColor = highlighted stroke
	if(useDefaultColors){
		color1 = "#00ffff";
		color2 = "#666666";
		color3 = "#cc0000";
		color4 = "#999999";
		highlightColor = "#00ff00";
	}
	
	//save the default state
	ctx.save();
	
	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX,scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation);
	
	ctx.fillStyle= color1;
	if(isHighlighted){
		ctx.strokeStyle = highlightColor;
	} else {
		ctx.strokeStyle = color4;
	}
	
	ctx.fillStyle=color1; //circle base bright blue
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle=color2; //1st gun dark grey
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
	
	ctx.fillStyle=color3; //square on 1st gun dark red
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
	
	ctx.fillStyle=color2; //2nd gun dark grey
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
	
	ctx.fillStyle=color3; //square on 2nd gun dark red
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


	ctx.fillStyle=color2; //3rd gun dark grey
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
	
	ctx.fillStyle=color3; //square on 3rd gun dark red
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
	
	ctx.fillStyle=color2; //4th gun dark grey
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
	
	ctx.fillStyle=color3; //square on 1st gun dark red
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

/*Tower Drawing for tower 5
* @param {CanvasDrawingContext} ctx
* @param {Number} x Position
* @param {Number} y Position
* @param {Number} scaleX The X direction scale
* @param {Number} scaleY The Y direction scale
* @param {Number} rotation The rotation (in radians)
* @param {Boolean} isHighlighted , Is the tower Highlighted?
* @param {Boolean} useDefaultColors Should we use default colors?
* @param {String} color1 The first color of the tower
* @param {String} color2 The second color of the tower
* @param {String} color3 The third color of the tower
* @param {String} color4 The fourth color of the tower
* @param {String} highlightColor The color of the highlighted stroke
*/
TowerDrawing.draw5 = function(ctx, x, y, scaleX, scaleY, rotation, 
    isHighlighted, useDefaultColors, color1, color2, color3, color4,  highlightColor){
	//color 1 = body color
	//color 2 = top color 
	//color 3 = cannon color
	//color 4 = normal stroke
	//highlightColor = highlighted stroke
	if(useDefaultColors){
		color1 = "#00008b";
		color2 = "#cc0000";
		color3 = "#666666";
		color4 = "#000000";
		highlightColor = "#00ff00";
	}
	
	//save the default state
	ctx.save();
	
	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX, scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation);
	
	ctx.fillStyle= color1;
	if(isHighlighted) {
		ctx.strokeStyle= highlightColor;
	} else {
		ctx.strokeStyle= color4; //black
	}
	
	//Draw the circle base
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle=color2; //cannon Dark red
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
	
	ctx.fillStyle=color3; //gun 1 dark grey
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
	
	ctx.fillStyle=color4; //dots on gun blue
	//draw circles for 1st gun
	for(var i = 2; i <= 17; i = i + 5) {
		ctx.beginPath();
		ctx.arc(i, -5, 1.5, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}
	
	ctx.fillStyle=color3; //gun 2 dark grey
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
	
	ctx.fillStyle=color4; //dots on gun  blue
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

/*Tower Drawing for tower 6
* @param {CanvasDrawingContext} ctx
* @param {Number} x Position
* @param {Number} y Position
* @param {Number} scaleX The X direction scale
* @param {Number} scaleY The Y direction scale
* @param {Number} rotation The rotation (in radians)
* @param {Boolean} isHighlighted , Is the tower Highlighted?
* @param {Boolean} useDefaultColors Should we use default colors?
* @param {String} color1 The first color of the tower
* @param {String} color2 The second color of the tower
* @param {String} color3 The third color of the tower
* @param {String} color4 The fourth color of the tower
* @param {String} highlightColor The color of the highlighted stroke
*/
TowerDrawing.draw6 = function(ctx, x, y, scaleX, scaleY, rotation, 
    isHighlighted, useDefaultColors, color1, color2, color3, color4,  highlightColor){
	//color 1 = body color
	//color 2 = top color 
	//color 3 = cannon color
	//color 4 = normal stroke
	//highlightColor = highlighted stroke
	if(useDefaultColors){
		color1 = "#136c13";
		color2 = "#e67300";
		color3 = "#cc0000";
		color4 = "#990000";
		highlightColor = "#00ff00";
	}
	
	//save the default state
	ctx.save();
	
	//translate our shape
	ctx.translate(x,y);
	//scale our shape
	ctx.scale(scaleX,scaleY);
	//rotate our shape (in degrees)
	ctx.rotate(rotation);
	
	ctx.fillStyle= color1;
	if(isHighlighted){
		ctx.strokeStyle = highlightColor;
	} else {
		ctx.strokeStyle = color4;
	}
	
	ctx.fillStyle = color1;
	//DRAW THE CIRCLE BASE
	ctx.beginPath();
	ctx.arc(0,0,15,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	ctx.fillStyle = color2;
	//Draw the gun
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
	
	ctx.fillStyle = color3;
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
	
	ctx.fillStyle = color3;
	//Draw the top arrow
	ctx.beginPath();
	ctx.moveTo(16,5);//bottom left
	ctx.lineTo(32,0);//middle right
	ctx.lineTo(16,-5);//top left
	ctx.lineTo(16,5);//bottom left
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	
	
	ctx.fillStyle = color2;
	//Draw the top of Circle
	ctx.beginPath();
	ctx.arc(0,0,10,0,2*Math.PI);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
	//restore transformations to normal
	ctx.restore();

}