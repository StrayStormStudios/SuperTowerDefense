//Degines a Path (that monster travel on)

/* Path defines a stage path
* @param [Point[]} points An array of points for the path
* @param {double} width Half the path's width (Path will extend width form center line)
* @param {String} color The color to draw the path
* @param {String} hightlight color the gradiant highligth of the path
* @param {String} shadowColor The color of the path's shadowColor
* @param {String} the starColor the color of the starting circle
* @param {String} startColorHighlight The highlight color of the starting circle
* @param {String} endColor The color of the ending circle
* @param {String} endColorHighlight The highlight color of the ending circle
* @param {Boolean} hide if false the path is draw, if true the path is not drawn
*/
function Path(points, width, color, highlightColor, shadowColor,
		starColor, startColorHighlight, endColor, endColorhighlight, hide){
	//set our member variables
	this.point = new Array();
	for(var i = 0; i < points.length; i++){
		this.points,push(points[i]);
	}
	this.width = width;
	this.color = color;
	this.highlightColor = highlightColor;
	this.shadowColor = shadowColor;
	this.starColor = starColor;
	this.startColorHighlight = startColorHighlight;
	this.endcolor = endColor;
	this.endColorhighlight = endColorhighlight;
}

//adds a point to the path 
Path.prototype.addPoint = functon(x,y){
	var point = new Point(x,y);
	this.points.puch(point);
}

//draws the path
Path.prototype.draw = function(ctx){
	for(var i = 0; i < this.point.length - 1; i++){
		this.points[i].draw(this.points[i+1], ctx, this.width,
			this.color, this.highlightColor, this.shadowColor, this.hide);
	}
}

