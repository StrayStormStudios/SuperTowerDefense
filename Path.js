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
  //passed fields
  this.points = new Array();
  for (var i = 0; i < points.length; i++) {
    this.points.push(points[i]);
  }
  this.width = width;
  this.color = color;
  this.highlightColor = highlightColor;
  this.shadowColor = shadowColor;
  this.startColor = startColor;
  this.startHighlightColor = startHighlightColor;
  this.endColor = endColor;
  this.endHighlightColor = endHighlightColor;
  this.hide = hide;

  //derived fields
  this.vectors = new Array(); //normalized direction vectors between points
  this.rotations = new Array(); //The rotations between points (in radians)
  this.vectorLengths = new Array(); //The length between each point in the path
  this.totalLength; //the total length of the path.
  this.rectangles = new Array(); //the points of each rectangle (used for gradients)
  this.rectanglesPrint = new Array(); //The points for each rectangle (used for printing)
  this.rectanglesBig = new Array(); //rectangles with 1.2 width padding (used for tower placement)
  this.getRectangles();
  this.intersections = new Array(); //The points for the intersections between rectangles
  this.getIntersections();
  this.startPoints = new Array(); //The points for the starting cap
  this.getStartPoints();
  this.endPoints = new Array(); //The points for the ending cap
  this.getEndPoints();

  this.uvInverses = new Array(); //transformation inverses (used to check if a point is inside path)
  this.getUVInverses();
}

/*Draws all parts of the paths
 * @param {CanvasRenderingContext2D} ctx
 */
Path.prototype.draw = function (ctx) {
  if (!this.hide) {
    this.drawRectangles(ctx);
    this.drawIntersections(ctx);
    this.drawStartCap(ctx);
    this.drawEndCap(ctx);
  }
};

/*Draws the path "rectangles"
 * @param {CanvasRenderingContext2D} ctx
 */
Path.prototype.drawRectangles = function (ctx) {
  //loop through all rectangles
  for (var i = 0; i < this.rectangles.length; i++) {
    //set up gradients
    ctx.fillStyle = this.color;
    var grd = ctx.createLinearGradient(
      this.rectangles[i][0].x,
      this.rectangles[i][0].y,
      this.rectangles[i][3].x,
      this.rectangles[i][3].y
    );
    grd.addColorStop(0.0, this.color);
    grd.addColorStop(0.5, this.highlightColor);
    grd.addColorStop(1.0, this.color);
    ctx.fillStyle = grd;
    //draw geometry
    ctx.beginPath();
    ctx.moveTo(this.rectanglesPrint[i][0].x, this.rectanglesPrint[i][0].y);
    ctx.lineTo(this.rectanglesPrint[i][1].x, this.rectanglesPrint[i][1].y);
    ctx.lineTo(this.rectanglesPrint[i][2].x, this.rectanglesPrint[i][2].y);
    ctx.lineTo(this.rectanglesPrint[i][3].x, this.rectanglesPrint[i][3].y);
    ctx.lineTo(this.rectanglesPrint[i][0].x, this.rectanglesPrint[i][0].y);
    ctx.closePath();
    ctx.fill();
  }
};

/* Draws all intersections between each rectangle
 * @param {CanvasRenderingContext2D} ctx
 */
Path.prototype.drawIntersections = function (ctx) {
  //loop through intersections
  for (var i = 0; i < this.intersections.length; i++) {
    //gradients
    ctx.fillStyle = this.color;
    var grd = ctx.createLinearGradient(
      this.rectangles[i][0].x,
      this.rectangles[i][0].y,
      this.rectangles[i][3].x,
      this.rectangles[i][3].y
    );
    grd.addColorStop(0.0, this.color);
    grd.addColorStop(0.5, this.highlightColor);
    grd.addColorStop(1.0, this.color);
    var grd2 = ctx.createLinearGradient(
      this.rectangles[i + 1][0].x,
      this.rectangles[i + 1][0].y,
      this.rectangles[i + 1][3].x,
      this.rectangles[i + 1][3].y
    );
    grd2.addColorStop(0.0, this.color);
    grd2.addColorStop(0.5, this.highlightColor);
    grd2.addColorStop(1.0, this.color);
    ctx.fillStyle = grd2;
    //geometry
    ctx.beginPath();
    ctx.moveTo(this.intersections[i][0].x, this.intersections[i][0].y);
    ctx.lineTo(this.intersections[i][1].x, this.intersections[i][1].y);
    ctx.quadraticCurveTo(
      this.intersections[i][2].x,
      this.intersections[i][2].y,
      this.intersections[i][3].x,
      this.intersections[i][3].y
    );
    ctx.lineTo(this.intersections[i][0].x, this.intersections[i][0].y);
    ctx.closePath();
    ctx.fill();

    //geometry for other gradient
    //clip
    ctx.save();
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(this.intersections[i][0].x, this.intersections[i][0].y);
    ctx.lineTo(this.intersections[i][1].x, this.intersections[i][1].y);
    ctx.lineTo(this.intersections[i][2].x, this.intersections[i][2].y);
    ctx.lineTo(this.intersections[i][0].x, this.intersections[i][0].y);
    ctx.clip();
    ctx.beginPath();
    ctx.moveTo(this.intersections[i][0].x, this.intersections[i][0].y);
    ctx.lineTo(this.intersections[i][1].x, this.intersections[i][1].y);
    ctx.quadraticCurveTo(
      this.intersections[i][2].x,
      this.intersections[i][2].y,
      this.intersections[i][3].x,
      this.intersections[i][3].y
    );
    ctx.lineTo(this.intersections[i][0].x, this.intersections[i][0].y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
};

/*Draws the start cap
 * @param {CanvasRenderingContext2D} ctx
 */
Path.prototype.drawStartCap = function (ctx) {
  //gradient
  ctx.fillStyle = this.startColor;
  var startGrd = ctx.createLinearGradient(
    this.rectangles[0][0].x,
    this.rectangles[0][0].y,
    this.rectangles[0][3].x,
    this.rectangles[0][3].y
  );
  startGrd.addColorStop(0.0, this.startColor);
  startGrd.addColorStop(0.5, this.startHighlightColor);
  startGrd.addColorStop(1.0, this.startColor);
  ctx.fillStyle = startGrd;
  //geometry
  ctx.beginPath();
  ctx.moveTo(this.startPoints[0].x, this.startPoints[0].y);
  ctx.lineTo(this.startPoints[1].x, this.startPoints[1].y);
  ctx.lineTo(this.startPoints[2].x, this.startPoints[2].y);
  ctx.quadraticCurveTo(
    this.startPoints[3].x,
    this.startPoints[3].y,
    this.startPoints[0].x,
    this.startPoints[0].y
  );
  ctx.closePath();
  ctx.fill();
};

/*Draws the ending cap
 * @param {CanvasRenderingContext2D} ctx
 */
Path.prototype.drawEndCap = function (ctx) {
  //gradient
  ctx.fillStyle = this.endColor;
  var endGrd = ctx.createLinearGradient(
    this.rectangles[this.rectangles.length - 1][0].x,
    this.rectangles[this.rectangles.length - 1][0].y,
    this.rectangles[this.rectangles.length - 1][3].x,
    this.rectangles[this.rectangles.length - 1][3].y
  );
  endGrd.addColorStop(0.0, this.endColor);
  endGrd.addColorStop(0.5, this.endHighlightColor);
  endGrd.addColorStop(1.0, this.endColor);
  ctx.fillStyle = endGrd;
  //geometry
  ctx.beginPath();
  ctx.moveTo(this.endPoints[0].x, this.endPoints[0].y);
  ctx.lineTo(this.endPoints[1].x, this.endPoints[1].y);
  ctx.lineTo(this.endPoints[2].x, this.endPoints[2].y);
  ctx.quadraticCurveTo(
    this.endPoints[3].x,
    this.endPoints[3].y,
    this.endPoints[0].x,
    this.endPoints[0].y
  );
  ctx.closePath();
  ctx.fill();
};

/*calculates the rectangles between each point
 * After this function, the following arrays should be populated:
 * 			this.rectangles, this.rectanglesPrint, this.vectors
 */
Path.prototype.getRectangles = function () {
  for (var i = 0, n = this.points.length - 1; i < n; i++) {
    //get vectors
    var dx = this.points[i + 1].x - this.points[i].x;
    var dy = this.points[i + 1].y - this.points[i].y;

    //get a normalized dx, dy
    var dMag = Math.sqrt(dx * dx + dy * dy);
    //push the length of the vector
    this.vectorLengths.push(dMag);
    var pVector;
    if (dMag == 0) {
      //zero length vectors... just push the original ones
      pVector = new Point(dx, dy);
    } else {
      pVector = new Point(dx / dMag, dy / dMag);
    }
    this.vectors.push(pVector);
    //find rotation
    var rotation = Math.acos(pVector.x);
    if (dy < 0) {
      rotation = Math.PI * 2 - rotation;
    }
    this.rotations.push(rotation);

    //console.log(dx + "," + dy);
    //get perpendicular vectors
    var pdx = -1 * dy;
    var pdy = dx;
    //normalize the perpendicular vectors and multiply by width
    var pMag = Math.sqrt(pdx * pdx + pdy * pdy);
    var pdx = (pdx * this.width) / pMag;
    var pdy = (pdy * this.width) / pMag;

    //get the points for each rectangle
    //point 1
    var x1 = this.points[i].x + pdx;
    var y1 = this.points[i].y + pdy;
    var p1 = new Point(x1, y1);
    var p1Print = new Point(x1, y1);
    var p1Big = new Point(
      p1.x + pdx * 1.1 - pVector.x * 1.3 * this.width,
      p1.y + pdy * 1.1 - pVector.y * 1.3 * this.width
    );
    //set up the rectangles
    var curRectangle = new Array();
    var curRectanglePrint = new Array();
    var curRectangleBig = new Array();
    curRectangle.push(p1);
    curRectanglePrint.push(p1Print);
    curRectangleBig.push(p1Big);
    //point 2
    var x2 = x1 + dx;
    var y2 = y1 + dy;
    var p2 = new Point(x2, y2);
    var p2Print = new Point(x2, y2);
    var p2Big = new Point(
      x2 + pdx * 1.1 + pVector.x * 1.3 * this.width,
      y2 + pdy * 1.1 + pVector.y * 1.3 * this.width
    );
    curRectangle.push(p2);
    curRectanglePrint.push(p2Print);
    curRectangleBig.push(p2Big);
    //point 3
    var x3 = x2 + -2 * pdx;
    var y3 = y2 + -2 * pdy;
    var p3 = new Point(x3, y3);
    var p3Print = new Point(x3, y3);
    var p3Big = new Point(
      x3 - pdx * 1.1 + pVector.x * 1.3 * this.width,
      y3 - pdy * 1.1 + pVector.y * 1.3 * this.width
    );
    curRectangle.push(p3);
    curRectanglePrint.push(p3Print);
    curRectangleBig.push(p3Big);
    //point 4
    var x4 = x3 + -1 * dx;
    var y4 = y3 + -1 * dy;
    var p4 = new Point(x4, y4);
    var p4Print = new Point(x4, y4);
    var p4Big = new Point(
      x4 - pdx * 1.1 - pVector.x * 1.3 * this.width,
      y4 - pdy * 1.1 - pVector.y * 1.3 * this.width
    );
    curRectangle.push(p4);
    curRectanglePrint.push(p4Print);
    curRectangleBig.push(p4Big);
    this.rectangles.push(curRectangle);
    this.rectanglesPrint.push(curRectanglePrint);
    this.rectanglesBig.push(curRectangleBig);
  }

  this.totalLength = 0;
  //get the total length
  for (var i = 0; i < this.vectorLengths.length; i++) {
    this.totalLength += this.vectorLengths[i];
  }
};

//get the intersections between boxes
Path.prototype.getIntersections = function () {
  //console.log(this.rectangles.length);
  for (var i = 0; i < this.rectangles.length - 1; i++) {
    var intersection = new Array();

    //get p and q points (for top (1) and bottom (2))
    var p1 = new Point(this.rectangles[i][0].x, this.rectangles[i][0].y);
    var p2 = new Point(this.rectangles[i][3].x, this.rectangles[i][3].y);
    var q1 = new Point(
      this.rectangles[i + 1][1].x,
      this.rectangles[i + 1][1].y
    );
    var q2 = new Point(
      this.rectangles[i + 1][2].x,
      this.rectangles[i + 1][2].y
    );

    //get r and s vectors (for top(1) and bottom(2))
    var r1 = new Point(
      this.rectangles[i][1].x - p1.x,
      this.rectangles[i][1].y - p1.y
    );
    var r2 = new Point(
      this.rectangles[i][2].x - p2.x,
      this.rectangles[i][2].y - p2.y
    );
    var s1 = new Point(
      this.rectangles[i + 1][0].x - q1.x,
      this.rectangles[i + 1][0].y - q1.y
    );
    var s2 = new Point(
      this.rectangles[i + 1][3].x - q2.x,
      this.rectangles[i + 1][3].y - q2.y
    );

    //find r cross s (for top(1) and bottom(2))
    var rxs1 = this.crossProduct(r1, s1);
    var rxs2 = this.crossProduct(r2, s2);
    //console.log(rxs1 + " " + rxs2);
    //collinear
    if (Math.abs(rxs1) <= 0.00001) {
      intersection.push(p1);
      intersection.push(p1);
      intersection.push(p1);
      intersection.push(p1);
    } else {
      //not collinear
      //find q - p (for top(1) and bottom(2)))
      var qMinusP1 = new Point(q1.x - p1.x, q1.y - p1.y);
      var qMinusP2 = new Point(q2.x - p2.x, q2.y - p2.y);
      //console.log(qMinusP1.x + " " + qMinusP1.y + "," + qMinusP2.x + " " + qMinusP2.y);
      //calculate t and u
      var t1 = this.crossProduct(qMinusP1, s1) / rxs1;
      var t2 = this.crossProduct(qMinusP2, s2) / rxs2;
      var u1 = this.crossProduct(qMinusP1, r1) / rxs1;
      var u2 = this.crossProduct(qMinusP2, r2) / rxs2;
      //console.log(this.crossProduct(qMinusP1, s1));
      //console.log(t1 + " " + t2 + " " + u1 + " " + u2);
      //solve for the intersections (for top(1) and bottom(2))
      var i1 = new Point(p1.x + t1 * r1.x, p1.y + t1 * r1.y);
      var i2 = new Point(p2.x + t2 * r2.x, p2.y + t2 * r2.y);
      //test which line intersects... push appropriate geometries
      if (t1 < 1) {
        intersection.push(i1);
        intersection.push(this.rectangles[i][2]);
        intersection.push(i2);
        intersection.push(this.rectangles[i + 1][3]);
        this.rectanglesPrint[i][1] = i1;
        this.rectanglesPrint[i + 1][0] = i1;
      } else {
        intersection.push(i2);
        intersection.push(this.rectangles[i][1]);
        intersection.push(i1);
        intersection.push(this.rectangles[i + 1][0]);
        this.rectanglesPrint[i][2] = i2;
        this.rectanglesPrint[i + 1][3] = i2;
      }
    }
    this.intersections.push(intersection);
  }
};

//gets the start points for the start of the path
Path.prototype.getStartPoints = function () {
  var p0 = new Point(this.rectangles[0][0].x, this.rectangles[0][0].y);
  var p1 = new Point(
    this.points[0].x + this.vectors[0].x * this.width * 2,
    this.points[0].y + this.vectors[0].y * this.width * 2
  );
  var p2 = new Point(this.rectangles[0][3].x, this.rectangles[0][3].y);
  var p3 = new Point(
    this.points[0].x + -1 * this.vectors[0].x * this.width,
    this.points[0].y + -1 * this.vectors[0].y * this.width
  );
  this.startPoints.push(p0);
  this.startPoints.push(p1);
  this.startPoints.push(p2);
  this.startPoints.push(p3);
};

//gets the points for the end of the path
Path.prototype.getEndPoints = function () {
  var p0 = new Point(
    this.rectangles[this.rectangles.length - 1][1].x,
    this.rectangles[this.rectangles.length - 1][1].y
  );
  var p1 = new Point(
    this.points[this.rectangles.length].x +
      this.vectors[this.rectangles.length - 1].x * -this.width * 2,
    this.points[this.rectangles.length].y +
      this.vectors[this.rectangles.length - 1].y * -this.width * 2
  );
  var p2 = new Point(
    this.rectangles[this.rectangles.length - 1][2].x,
    this.rectangles[this.rectangles.length - 1][2].y
  );
  var p3 = new Point(
    this.points[this.rectangles.length].x +
      this.vectors[this.rectangles.length - 1].x * this.width,
    this.points[this.rectangles.length].y +
      this.vectors[this.rectangles.length - 1].y * this.width
  );
  this.endPoints.push(p0);
  this.endPoints.push(p1);
  this.endPoints.push(p2);
  this.endPoints.push(p3);
};

/*returns the crossProduct of two vectors
@param {Point} v The first vector to cross
@param {point} w The second vector to cross
@return {Number} The v X w
*/
Path.prototype.crossProduct = function (v, w) {
  return v.x * w.y - v.y * w.x;
};

/*creates transformation inverses... used to decide if a point is inside the path
 */
Path.prototype.getUVInverses = function () {
  for (var i = 0, n = this.rectanglesBig.length; i < n; i++) {
    //for(var i = 1, n = 2; i < n; i++){
    //rectangle vectors (u and v)
    var u = new Point(
      this.rectanglesBig[i][1].x - this.rectanglesBig[i][0].x,
      this.rectanglesBig[i][1].y - this.rectanglesBig[i][0].y
    );
    var v = new Point(
      this.rectanglesBig[i][3].x - this.rectanglesBig[i][0].x,
      this.rectanglesBig[i][3].y - this.rectanglesBig[i][0].y
    );
    //find length squared
    var uMagSquared = u.x * u.x + u.y * u.y;
    var vMagSquared = v.x * v.x + v.y * v.y;
    //find the inverse transposed vector
    var uInverse = new Point(u.x / uMagSquared, u.y / uMagSquared);
    var vInverse = new Point(v.x / vMagSquared, v.y / vMagSquared);
    var uvInverse = new Array();
    //add this transposed vector to the array of inverses
    uvInverse.push(uInverse);
    uvInverse.push(vInverse);
    this.uvInverses.push(uvInverse);
  }
};

/*tells whether a point is inside the pathname
@param {Point} p The point to check
@return {Boolean} true (inside the rectangle (inclusive)) false (outside the rectangle)
*/
Path.prototype.inPath = function (p) {
  for (var i = 0, n = this.uvInverses.length; i < n; i++) {
    //subtract current rectangles
    var pPrime = new Point(
      p.x - this.rectanglesBig[i][0].x,
      p.y - this.rectanglesBig[i][0].y
    );
    //multiply by inverse matrix
    var pTransformed = new Point(
      this.uvInverses[i][0].x * pPrime.x + this.uvInverses[i][0].y * pPrime.y,
      this.uvInverses[i][1].x * pPrime.x + this.uvInverses[i][1].y * pPrime.y
    );
    if (
      pTransformed.x >= 0 &&
      pTransformed.x <= 1 &&
      pTransformed.y >= 0 &&
      pTransformed.y <= 1
    ) {
      return true;
    }
  }
  return false;
};
