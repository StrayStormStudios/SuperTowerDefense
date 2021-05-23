//Point - Defines a point class

function Point(x, y) {
  this.x = x;
  this.y = y;
}

//returns the distance from two points
Point.prototype.distanceFrom = function (p) {
  var xDist = this.x - p.x;
  var yDist = this.y - p.y;
  return Math.sqrt(xDist * xDist + yDist * yDist);
};

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.setX = function (x) {
  this.x = x;
};

Point.prototype.setY = function (y) {
  this.y = y;
};

Point.prototype.print = function (x) {
  return "(" + this.x + "," + this.y + ")";
};

/* Draws a rectangle between two points
 * @param {CanvasRenderingContext2D} ctx The canvas context
 * @param {Point[]} points An array of points for the path
 * @param {double} width Half the path's width (path will extend width from center line)
 * @param {String} color The color to draw the path
 * @param {String} highlightColor the color of the middle gradient
 * @param {String} shadowColor The color to draw the dropShadow of the path.
 * @param {Boolean} hide If false, the path is not drawn. If true it is drawn
 */
Point.prototype.draw = function (
  point2,
  ctx,
  width,
  color,
  highlightColor,
  shadowColor,
  hide
) {
  //console.log(width+ "," + color + "," + highlightColor + "," + shadowColor + "," + hide);
  if (!hide) {
    //set color
    ctx.fillStyle = shadowColor;
    var xShadow = 0;
    var yShadow = 3;
    //get vectors
    var dx = this.x - point2.x;
    var dy = this.y - point2.y;
    //get perpendicular vectors
    var pdx = -1 * dy;
    var pdy = dx;
    //normalize the perpendicular vectors and multiply by width
    var pMag = Math.sqrt(pdx * pdx + pdy * pdy);
    var pdx = (pdx * width) / pMag;
    var pdy = (pdy * width) / pMag;

    for (var i = 0; i < 2; i++) {
      //draw the box
      ctx.beginPath();
      //point 1
      var x1 = this.x + xShadow + pdx;
      var y1 = this.y + yShadow + pdy;
      ctx.moveTo(x1, y1);
      //point 2
      var x2 = x1 + -1 * dx;
      var y2 = y1 + -1 * dy;
      ctx.lineTo(x2, y2);
      //point 3
      var x3 = x2 + -2 * pdx;
      var y3 = y2 + -2 * pdy;
      ctx.lineTo(x3, y3);
      //point 4
      var x4 = x3 + dx;
      var y4 = y3 + dy;
      ctx.lineTo(x4, y4);
      ctx.lineTo(x1, y1);
      ctx.closePath();
      if (i == 1) {
        ctx.fillStyle = grd;
      }
      ctx.fill();

      //draw the front circle
      ctx.beginPath();
      ctx.arc(this.x + xShadow, this.y + yShadow, width, 0, 2 * Math.PI);
      ctx.closePath();
      if (i == 1) {
        ctx.fillStyle = color;
        ctx.fillStyle = grd2;
      }
      ctx.fill();
      //draw the end circle
      ctx.beginPath();
      ctx.arc(point2.x + xShadow, point2.y + yShadow, width, 0, 2 * Math.PI);
      ctx.closePath();
      if (i == 1) {
        ctx.fillStyle = color;
        ctx.fillStyle = grd3;
      }
      ctx.fill();

      //set up gradients
      ctx.fillStyle = color;
      var grd = ctx.createLinearGradient(
        this.x + pdx,
        this.y + pdy,
        this.x - pdx,
        this.y - pdy
      );
      grd.addColorStop(0.0, color);
      grd.addColorStop(0.5, highlightColor);
      grd.addColorStop(1.0, color);

      var grd2 = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        width
      );
      grd2.addColorStop(0.0, highlightColor);
      grd2.addColorStop(0.6, highlightColor);
      grd2.addColorStop(1.0, color);

      var grd3 = ctx.createRadialGradient(
        point2.x,
        point2.y,
        0,
        point2.x,
        point2.y,
        width
      );
      grd3.addColorStop(0.0, highlightColor);
      grd3.addColorStop(0.6, highlightColor);
      grd3.addColorStop(1.0, color);

      xShadow = 0;
      yShadow = 0;
    }
  }
};
