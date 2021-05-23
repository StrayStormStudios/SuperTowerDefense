/*Bullet - Defines a bullet */
Bullet.id = 0;

/*Adds a bullet
@param {Point} The current position of a bullet
@param {Number} The starting rotation (in radians)
@param {Enemy} targetEnemy The enemy the bullet is targeting
@param {Integer} targetFrame The target frame of the bullet we are shooting
@param {Number} speed The speed of the bullet (in pixels per frame)
@param {Integer} drawingType 1 = circle, 2 = square, 3 = rectangle, 4 = long rectangle, 5 = rocket 
@param {Number} radius used for dimensions of all types of drawing types
@param {String} color The color to draw the bullet
*/
function Bullet(
  position,
  rotation,
  targetEnemy,
  targetFrame,
  speed,
  drawingType,
  radius,
  color
) {
  //id
  this.id = Bullet.id;
  Bullet.id++;

  //basic start information
  this.frame = SuperTower.frame;
  this.position = position;
  this.rotation = rotation;
  this.speed = speed;
  //basic drawing information
  this.drawingType = drawingType;
  this.color = color;
  this.radius = radius;

  //calculated values
  this.positions = new Array();
  this.rotations = new Array();
  this.calculatePositions(targetEnemy, targetFrame);
}

/*Calculates the position array for the bullet
 *	@param {Enemy} targetEnemy, the enemy targeted
 *	@param {Integer} targetFrame, the frame targeted
 */
Bullet.prototype.calculatePositions = function (targetEnemy, targetFrame) {
  //non rocket...
  if (this.drawingType < 5) {
    var steps = 1.0 * (targetFrame - this.frame + 1);
    var targetX = targetEnemy.positions[targetFrame - targetEnemy.frame].x;
    var targetY = targetEnemy.positions[targetFrame - targetEnemy.frame].y;
    var dx = targetX - this.position.x;
    var dy = targetY - this.position.y;
    for (var i = 0; i <= steps; i++) {
      var curX = this.position.x + (dx * i) / steps;
      var curY = this.position.y + (dy * i) / steps;
      this.positions.push(new Point(curX, curY));
      this.rotations.push(this.rotation);
    }
  }
};

/*draws the bullet
 * @param {Canvas Rendering Context} ctx
 * @return {Boolean} true if this should be deleted, false if not
 */
Bullet.prototype.draw = function (ctx) {
  var frame = SuperTower.frame;
  var index = frame - this.frame;
  //are we done drawing, if so delete
  if (index + 1 >= this.positions.length) {
    return true;
  }
  //otherwise draw
  var position = this.positions[index];
  var rotation = this.rotations[index];
  //save the default state
  ctx.save();
  ctx.translate(position.x, position.y);
  ctx.rotate(rotation);

  ctx.fillStyle = this.color;
  ctx.strokeStyle = "#000000";

  ctx.beginPath();
  if (this.drawingType == 1) {
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
  } else if (this.drawingType == 2) {
    ctx.moveTo(-this.radius, -this.radius);
    ctx.lineTo(this.radius, -this.radius);
    ctx.lineTo(this.radius, this.radius);
    ctx.lineTo(-this.radius, this.radius);
    ctx.lineTo(-this.radius, -this.radius);
  } else if (this.drawingType == 3) {
    ctx.moveTo(-this.radius * 2, -this.radius);
    ctx.lineTo(this.radius * 2, -this.radius);
    ctx.lineTo(this.radius * 2, this.radius);
    ctx.lineTo(-this.radius * 2, this.radius);
    ctx.lineTo(-this.radius * 2, -this.radius);
  } else if (this.drawingType == 4) {
    ctx.moveTo(-this.radius * 8, -this.radius);
    ctx.lineTo(this.radius * 8, -this.radius);
    ctx.lineTo(this.radius * 8, this.radius);
    ctx.lineTo(-this.radius * 8, this.radius);
    ctx.lineTo(-this.radius * 8, -this.radius);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();

  return false;
};
