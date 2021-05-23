//piont - Defines a point class, wich handles x,y cordinates
//creates a new point
// (this will be called point.js)
function Point(x, y) {
  this.x = x;
  this.y = y;
}

//returns the distance between two points using the distance formula Sqrt ( (y1-y2)^2 + (x1 - x2)^2 )
point.prototype.distanceFrom = function (p) {
  var dx = this.x - p.x;
  var dy = this.y - p.y;
  return Math.sqrt(dx * dx + dy * dy);
};

/* Draws a rectangle between two points
 * @param ctx The canvas context
 * @param point2 The other point to draw to
 * @param width The width of the path
 * @param color The color of the path
 * @param hightlightColor The highlight color (for the gradient)
 * @param shadowColor The color of the shadowColor
 * @param hide true/false (should we hide the path)
 */
Point.prototype.draw = function (
  point2,
  ctx,
  width,
  color,
  highlightcolor,
  shadowColor,
  hide
) {
  if (!hide) {
    ctx.fillStyle = color;
    //get the primary vectors
    var dx = this.x - point2.x;
    var dy = this.y - point2.y;
    //get the perpendicular verctors
    var pdx = -1 * dy;
    var pdy = dx;
    //normalize the perpendicular vectors and multiply them by width
    var pLength = math.sqrt(pdx * pdx + pdy * pdy);
    var pdx = (pdx * width) / pLength;
    var pdy = (pdy * width) / pLength;
    //calculate the points
    //point 1
    var x1 = this.x + pdx;
    var y1 = this.x + pdy;
    //point 2
    var x2 = x1 + -1 * dx;
    var y2 = y1 + -1 * dy;
    //point 3
    var x3 = x2 + -2 * pdx;
    var y3 = y2 + -2 * pdy;
    //point 4
    var x4 = x3 + dx;
    var y4 = y3 + dy;
    //draw the rectangle
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lintTo(x2, y2);
    ctx.lintTo(x3, y3);
    ctx.lintTo(x4, y4);
    ctx.lintTo(x1, y1);
    ctx.closePath();
    ctx.fill();
    //draw a cpa at each end
    ctx.beginPath();
    ctx.arc(this.x, this.y, width, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(point2.x, point2.y, width, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }
};
