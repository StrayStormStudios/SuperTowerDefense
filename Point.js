/*Point - Defines a point class
 * @param {Number} x the x coordinate
 * @param {Number} y the y coordinate
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

/*prints the current point in the form (x,y)
 */
Point.prototype.print = function () {
  return "(" + this.x + "," + this.y + ")";
};

/*returns the distance from two points
 * @param {Point} other another point
 * @return {Number} The distance between this and other
 */
Point.prototype.distanceFrom = function (other) {
  var xDist = this.x - other.x;
  var yDist = this.y - other.y;
  return Math.sqrt(xDist * xDist + yDist * yDist);
};

/* Returns the midpoint between current point and other point
 * @param {Point} other another point
 * @return {Point} The midpoint
 */
Point.prototype.midpoint = function (other) {
  var x = (this.x + other.x) / 2.0;
  var y = (this.y + other.y) / 2.0;
  return new Point(x, y);
};

/* returns the cross product of current point and another point
 * @param {Point} other another point
 * @return {Number} this X other
 */
Point.prototype.crossProduct = function (other) {
  return this.x * other.y - this.y * other.x;
};

/*returns the crossProduct of two vectors
@param {Point} v The first vector to cross
@param {point} w The second vector to cross
@return {Number} The v X w
*/
Point.prototype.crossProduct = function (v, w) {
  return v.x * w.y - v.y * w.x;
};

/*returns the vector between two points
 * @param {Point} other another point
 * @return {Point} The vector between the two points
 */
Point.prototype.getVector = function (other) {
  var i = other.x - this.x;
  var j = other.y - this.y;
  return new Point(i, j);
};

/*returns the normal to the given vector
 * @return {Point} The vector between the two points
 */
Point.prototype.getNormal = function () {
  var i = -1 * this.y;
  var j = this.x;
  return new Point(i, j);
};

/*Normalizes a vector (gives the vector a unit length of 1)
 * @return {Point}
 */
Point.prototype.normalize = function () {
  if (x == 0 && y == 0) {
    return new Point(0, 0);
  } else {
    var length = this.distanceFrom(new Point(0, 0));
    return new Point(this.x / length, this.y / length);
  }
};
