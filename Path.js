//Sets stage items

/*Path --> Defines a stage path
 * @param {Point[]} points An array of points for the path
 * @param {double} width Half the path's width (path will extend width from center line)
 * @param {String} color The color to draw the path
 * @param {String} highlightColor The color of the highlight for gradient
 * @param {String} shadowColor The color to draw the dropShadow of the path.
 * @param {String} startColor The color to draw the start of a path
 * @param {String} startHighlightColor The color of the start for gradient
 * @param {String} endColor The color to draw the end of a path
 * @param {String} endHighlightColor The color to draw the end for gradient
 * @param {Boolean} hide If false, the path is not drawn. If true it is drawn
 */
function Path(
  points,
  width,
  color,
  highlightColor,
  shadowColor,
  startColor,
  startHighlightColor,
  endColor,
  endHighlightColor,
  hide
) {
  this.points = new Array();
  this.width = width;
  this.color = color;
  this.highlightColor = highlightColor;
  this.shadowColor = shadowColor;
  this.startColor = startColor;
  this.startHighlightColor = startHighlightColor;
  this.endColor = endColor;
  this.endHighlightColor = endHighlightColor;
  this.hide = hide;

  for (var i = 0; i < points.length; i++) {
    this.points.push(points[i]);
  }
}

Path.prototype.addPoint = function (x, y) {
  var point = new Point(x, y);
  this.points.push(point);
};

//draws the path
Path.prototype.draw = function (ctx) {
  if (!this.hide) {
    //console.log(this.highlightColor);
    for (var i = 0; i < this.points.length - 1; i++) {
      //this.points[i].draw(ctx);
      this.points[i].draw(
        this.points[i + 1],
        ctx,
        this.width,
        this.color,
        this.highlightColor,
        this.shadowColor,
        this.hide
      );
    }
    //draw the start circle
    var grd2 = ctx.createRadialGradient(
      this.points[0].x,
      this.points[0].y,
      0,
      this.points[0].x,
      this.points[0].y,
      this.width
    );
    grd2.addColorStop(0.0, this.startHighlightColor);
    grd2.addColorStop(0.6, this.startHighlightColor);
    grd2.addColorStop(1.0, this.startColor);
    ctx.beginPath();
    ctx.arc(this.points[0].x, this.points[0].y, this.width, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = this.startColor;
    ctx.fillStyle = grd2;
    ctx.fill();

    //draw the end circle
    var grd3 = ctx.createRadialGradient(
      this.points[this.points.length - 1].x,
      this.points[this.points.length - 1].y,
      0,
      this.points[this.points.length - 1].x,
      this.points[this.points.length - 1].y,
      this.width
    );
    grd3.addColorStop(0.0, this.endHighlightColor);
    grd3.addColorStop(0.6, this.endHighlightColor);
    grd3.addColorStop(1.0, this.endColor);
    ctx.beginPath();
    ctx.arc(
      this.points[this.points.length - 1].x,
      this.points[this.points.length - 1].y,
      this.width,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.fillStyle = this.endHighlightColor;
    ctx.fillStyle = grd3;
    ctx.fill();
  }
};
