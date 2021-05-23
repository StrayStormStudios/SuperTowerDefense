/* Defines a new Enemy
 * @param {String} type The tpye of enemy
 * @param {Number} health The health remaining
 * @param {Number} armor The armor remaining
 * @param {Number} money Money given when the they die
 * @param {Number} speed the speed the move
 * @param {Number} damage The damage they do if get to end path?
 * @param {String} color1 The primary color
 * @param {String} color2 The secondary color
 * @param {String} color3 The tertiary color
 * @param {String} color4 The fourth color
 * @param {Integer} drawingFunction wich drawing function should we use?
 * @param {Integer} The current frame
 * @param {Path} the monster's path
 * @param {Array of MonsterTypes} dealthSplit what the monster splits into when it dies
 * @param {Number} distanceTravelled (used for spawning monsters durring split)
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
  deathSplit
) {
  //given variables
  this.type = type;
  this.health = health;
  this.armor = armor;
  this.money = money;
  this.speed = speed;
  this.damage = damage;
  this.color1 = color1;
  this.color2 = color2;
  this.color3 = color3;
  this.color4 = color4;
  this.drawingFunction = drawingFunction;
  this.frame = frame;
  this.deathSplit = this.deathSplit;
  this.distanceTravelled = distanceTravelled;

  //derived variables
  this.Positions = new Array();
  this.rotations = new Array();
  this.scale = 1;
  this.calculatePositions(path); //calculates the position and rotation at every frame
}

/* Calculate the position at every frame step
 * @param {Path} the current path
 */
Enemy.prototype.calculatePositions = new (function (path) {
  //make a variable for distance travelled
  var pathSegment = 0; //the current path segment

  //while (distanceTavelled < path.totalLength){
  //make a variable for current distanceTavelled
  //see of we need a new path?
  //if so, calculate wich path we are on
  //calculate X and Y based on current path segment
  //make a new point for our current loctioan
  //push currewnt loctaion onto this.positions Array
  //push the path segments rotaiton onto the rotations array

  //}
})();

/*MOves the enemy (we will need more than one function here)
 * @param {Integer} currentFrame (our currentFrame)
 */
Enemy.prototype.move = new (function (currentFrame) {
  //Find the monster's position index and rotation
  var currentIndex = this.frame - currentFrame;
  var x = this.positions[currentIndex].x;
  var y = this.positions[currentIndex].y;
  var rotation = this.rotations[currentIndex];

  if (drawingFunction == 1) {
    //EnemyDrawing.draw1(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 2) {
    //EnemyDrawing.draw2(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 3) {
    //EnemyDrawing.draw3(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 4) {
    //EnemyDrawing.draw(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 5) {
    //EnemyDrawing.draw5(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 6) {
    //EnemyDrawing.draw6(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 7) {
    //EnemyDrawing.draw7(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 8) {
    //EnemyDrawing.draw8(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 9) {
    //EnemyDrawing.draw9(x,y,rotaiton, scale, color1, color2, color3, color4);
  } else if (drawingFunction == 10) {
    //EnemyDrawing.draw10(x,y,rotaiton, scale, color1, color2, color3, color4);
  }
})();
