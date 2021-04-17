/*Provides the list for all enemies
 */
function Enemies() {
  this.enemies = new Array();
}

/*Add an enemy
 *@param {String} type The type of enemy
 *@param {Integer} The current frame
 *@param {Path} The monster's path
 *@param {Number} distanceTravelled (used for spawning monsters during split)
 */
Enemies.prototype.add = function (type, frame, path, distanceTravelled) {
  var enemy = EnemyList.createEnemy(type, frame, path, distanceTravelled);
  this.enemies.push(enemy);
};

/*Remove an elementFromPoint
 *@param {Integer} index, The element to remove
 */
Enemies.prototype.remove = function (index) {
  //if this is the last frame, damage the player
  var curEnemy = this.enemies[index];
  if (this.enemies[index].lastFrame < SuperTower.frame) {
    SuperTower.lives -= curEnemy.damage;
    SuperTower.missed++;
  } else {
    SuperTower.cash += curEnemy.money;
    SuperTower.kills++;
    //spawn the other enemies
    for (var i = curEnemy.deathSplit.length - 1; i >= 0; i--) {
      this.add(curEnemy.deathSplit[i], curEnemy.frame, curEnemy.path, curEnemy.distanceTravelled);
    }
  }

  this.enemies.splice(index, 1);
};

Enemies.prototype.removeAll = function () {
  for (var i = this.enemies.length - 1; i >= 0; i--) {
    this.remove(i);
  }
};

/*Draws all enemies, deletes enemies that have reached the end of the track and returns damage
 * @param {Canvas Drawing Context} ctx
 * @param {Integer} currentFrame (our currentFrame)
 * @return {Number}  The damage the enemies should do to the player
 */
Enemies.prototype.drawAll = function (ctx, frame) {
  var damage = 0;
  ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);
  for (var i = this.enemies.length - 1; i >= 0; i--) {
    if (this.enemies[i].draw(ctx, frame)) {
      this.remove(i);
    }
  }
};
