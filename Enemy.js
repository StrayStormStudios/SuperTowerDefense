/* Defines a new Enemy
 * @param {String} type The type of enemy
 * @param {Number} health The health remaining
 * @param {Number} armor The armor remaining
 * @param {Number} money Money given when they die
 * @param {Number} speed the speed they move each frame
 * @param {Number} damage The damage they do if get to end path?
 * @param {String} color1 The primary color
 * @param {String} color2 The secondary color
 * @param {String} color3 The tertiary color
 * @param {String} color4 The quaternary color
 * @param {Integer} drawingFunction which drawing function should we use?
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Array of MonsterTypes} deathSplit What the monster splits into when it dies
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 */
function Enemy(
  type,
  health,
  armor,
  money,
  speed,
  damage,
  color1,
  color2,
  color3,
  color4,
  drawingFunction,
  frame,
  path,
  deathSplit,
  distanceTravelled
) {
  //given variables
  this.type = type;
  this.health = health;
  this.armor = armor;
  this.money = money;
  this.speed = speed + Math.random() * 0.01;
  this.damage = damage;
  this.color1 = color1;
  this.color2 = color2;
  this.color3 = color3;
  this.color4 = color4;
  this.drawingFunction = drawingFunction;
  this.frame = frame;
  this.deathSplit = deathSplit;
  this.distanceTravelled = distanceTravelled;
  this.path = path;

  //derived variables
  this.positions = new Array();
  this.rotations = new Array();
  this.scale = 1;
  this.calculatePositions(); //calculates the position and rotation at every frame
  this.currentRotation = this.rotations[0];
  this.transition = 0;
  this.transitionAngle = 0;
}

/* Calculates the position at every frame step
 * @param {Path} the current path
 */
Enemy.prototype.calculatePositions = function (path) {
  //make a variable for distance travelled
  var pathSegment = 0; //The current path segment
  //find the correct path segment

  //how far have we travelled on the current path?
  var currentPathTravelled = this.distanceTravelled;

  while (this.distanceTravelled <= this.path.totalLength) {
    //see if we need a new path?
    while (currentPathTravelled > this.path.vectorLengths[pathSegment]) {
      //move to the next path
      currentPathTravelled -= this.path.vectorLengths[pathSegment];
      pathSegment++;
    }
    //calculate x and y based on current path segment
    var x =
      this.path.points[pathSegment].x +
      this.path.vectors[pathSegment].x * currentPathTravelled;
    var y =
      this.path.points[pathSegment].y +
      this.path.vectors[pathSegment].y * currentPathTravelled;
    //make a new point for our current location
    var p = new Point(x, y);
    //push current location onto this.positions Array
    this.positions.push(p);
    //push the path segments rotation onto the rotations array
    this.rotations.push(this.path.rotations[pathSegment]);
    this.distanceTravelled += this.speed;
    currentPathTravelled += this.speed;
  }
};

/*Draws the enemy (We will need more than one function here)
 * @param {Canvas Drawing Context} ctx
 * @param {Integer} currentFrame (our currentFrame)
 * @return {Boolean} Has the enemy reached the end of the frame?  If so, it should be deleted
 */
Enemy.prototype.draw = function (ctx, currentFrame) {
  //Find the monster's position index and rotation
  var currentIndex = currentFrame - this.frame;
  //if they have reached the end, damage player
  if (currentIndex < this.positions.length) {
    var x = this.positions[currentIndex].x;
    var y = this.positions[currentIndex].y;
    var rotation = this.rotations[currentIndex];
    if (this.currentRotation != rotation) {
      if (this.transition == 0) {
        this.transition = 5;
        this.transitionAngle =
          (rotation - this.currentRotation) / this.transition;
      }
      this.transition--;
      rotation = this.currentRotation + this.transitionAngle;
    }
    this.currentRotation = rotation;
    var pathWidth = this.path.width;

    if (this.drawingFunction == 1) {
      EnemyDrawing.draw1(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 2) {
      EnemyDrawing.draw2(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 3) {
      EnemyDrawing.draw3(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 4) {
      EnemyDrawing.draw4(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 5) {
      EnemyDrawing.draw5(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 6) {
      EnemyDrawing.draw6(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 7) {
      EnemyDrawing.draw7(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 8) {
      EnemyDrawing.draw8(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 9) {
      EnemyDrawing.draw9(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    } else if (this.drawingFunction == 10) {
      EnemyDrawing.draw10(
        ctx,
        x,
        y,
        rotation,
        pathWidth,
        this.color1,
        this.color2,
        this.color3,
        this.color4
      );
    }

    //don't delete enemy
    return false;
  } else {
    //delete enemy if we have reached the end of the track
    return true;
  }
};
