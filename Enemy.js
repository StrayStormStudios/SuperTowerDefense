//Enemy:  Defines a new enemy object
Enemy.id = 0;

/* Constructor for Enemy
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
  //set id
  this.id = Enemy.id;
  Enemy.id++;

  //given variables
  this.type = type;
  this.health = health;
  this.healthArray = new Array(); //used to track life for each frame
  this.isDead = false; //will the enemy die before it crosses the finish line?
  this.armor = armor;
  this.armorArray = new Array(); //used to track armor for each frame
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
  //movement
  this.positions = new Array();
  this.rotations = new Array();
  this.lastFrame = frame;

  this.scale = 1;
  this.calculatePositions(); //calculates the position and rotation at every frame
  this.currentRotation = this.rotations[0];
  this.transition = 0;
  this.transitionAngle = 0;
  this.hitRadius = this.path.width * 0.9;
  this.hitRadiusSquared = this.hitRadius * this.hitRadius;
}

/* Calculates the position at every frame step
 * @param {Path} the current path
 */
Enemy.prototype.calculatePositions = function (path) {
  //make a variable for distance travelled
  var pathSegment = 0; //The current path segment
  //find the correct path segment
  var currentFrame = this.frame - 1;

  //how far have we travelled on the current path?
  var currentPathTravelled = this.distanceTravelled;

  while (this.distanceTravelled <= this.path.totalLength) {
    currentFrame++;
    //see if we need a new path?
    while (currentPathTravelled > this.path.vectorLengths[pathSegment]) {
      //move to the next path
      currentPathTravelled -= this.path.vectorLengths[pathSegment];
      pathSegment++;
    }
    //calculate x and y based on current path segment
    var x = this.path.points[pathSegment].x + this.path.vectors[pathSegment].x * currentPathTravelled;
    var y = this.path.points[pathSegment].y + this.path.vectors[pathSegment].y * currentPathTravelled;
    //make a new point for our current location
    var p = new Point(x, y);
    //push current location onto this.positions Array
    this.positions.push(p);
    //add to the health array also
    this.healthArray.push(this.health);
    //add to the armor array also
    this.armorArray.push(this.armor);
    //push the path segments rotation onto the rotations array
    this.rotations.push(this.path.rotations[pathSegment]);
    this.distanceTravelled += this.speed;
    currentPathTravelled += this.speed;
  }
  //last frame before it reaches end of track
  this.lastFrame = currentFrame;
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
        this.transitionAngle = (rotation - this.currentRotation) / this.transition;
      }
      this.transition--;
      rotation = this.currentRotation + this.transitionAngle;
    }
    this.currentRotation = rotation;
    var pathWidth = this.path.width;

    if (this.drawingFunction == 1) {
      EnemyDrawing.draw1(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 2) {
      EnemyDrawing.draw2(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 3) {
      EnemyDrawing.draw3(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 4) {
      EnemyDrawing.draw4(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 5) {
      EnemyDrawing.draw5(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 6) {
      EnemyDrawing.draw6(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 7) {
      EnemyDrawing.draw7(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 8) {
      EnemyDrawing.draw8(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 9) {
      EnemyDrawing.draw9(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    } else if (this.drawingFunction == 10) {
      EnemyDrawing.draw10(ctx, x, y, rotation, pathWidth, this.color1, this.color2, this.color3, this.color4);
    }

    //console.log(this.healthArray[currentFrame]);
    //if we are dead, delete the enemy
    if (this.healthArray[currentIndex] <= 0) {
      return true;
    }
    //don't delete enemy
    return false;
  } else {
    //delete enemy if we have reached the end of the track
    return true;
  }
};

/*Applies Damage to a Specific Enemy
 * @param {Integer} frame The frame to start applying the damage
 * @param {Integer} damage How much damage to apply
 */
Enemy.prototype.applyDamage = function (frame, damage, armorDamage) {
  if (frame <= this.lastFrame) {
    var index = frame - this.frame;
    //apply the damage to every frame after target frame... if it kills the enemy, flag it
    for (var i = index, n = this.healthArray.length; i < n; i++) {
      var damageApplied = damage;
      //apply damage to armor array
      if (this.armorArray[i] > 0) {
        //console.log("Here1" + damageApplied + " " + this.armorArray[i]);
        this.armorArray[i] = Math.max(0, this.armorArray[i] - armorDamage);
      }
      //apply health damage to armor
      if (this.armorArray[i] > 0) {
        //console.log("here2" + damageApplied + " " + this.armorArray[i]);
        if (damageApplied >= this.armorArray[i]) {
          damageApplied -= this.armorArray[i];
          this.armorArray[i] = 0;
        } else {
          this.armorArray[i] -= damageApplied;
          damageApplied = 0;
        }
      }
      //apply health damage to health
      //console.log("here3" + damageApplied + " " + this.armorArray[i]);
      this.healthArray[i] -= damageApplied;
      if (this.healthArray[i] <= 0) {
        this.isDead = true;
        this.healthArray[i] = 0;
      }
    }
  }
};

/*Returns whether or not this object is within a specific area
 * @param {Point} center The center point of the radius
 * @param {Number} radius  The radius of the area
 * @param {Integer} The frame to target
 * @return {Boolean} true if in area, false if not
 */
Enemy.prototype.inRadius = function (p, r, frame) {
  if (frame > this.lastFrame) return false;
  //real radius accounts for character width
  var r2 = r + this.path.width;
  //calculate the index into the positions array
  var targetIndex = frame - this.frame;
  //quick check of distance
  var xDistance = Math.abs(this.positions[targetIndex].x - p.x);
  var yDistance = Math.abs(this.positions[targetIndex].y - p.y);
  if (xDistance > r2 || xDistance > r2) return false;
  //Distance formula
  var distanceSquared = xDistance * xDistance + yDistance * yDistance;
  var r2Squared = r2 * r2;
  return distanceSquared < r2Squared;
};

/*Returns how long it will be before this object reaches the end of the path
 * @param {Integer} frame The current Frame
 * @return The number of frames before the object is finished
 */
Enemy.prototype.framesTillEnd = function (frame) {
  return this.positions.length - (frame - this.frame);
};
