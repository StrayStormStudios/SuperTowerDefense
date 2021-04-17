/*Defines an enemy spawn
 * @param {Number} Stage, the stage of the enemy
 * @param {Number} Wave, the wave of the enemy
 * @param {String} Type the type of enemy
 * @param {Number} delay The Delay this enemy should spawn on (after previous enemy)
 */
function EnemySpawn(stage, wave, type, path, delay) {
  this.stage = stage;
  this.wave = wave;
  this.type = type;
  this.path = path;
  this.delay = delay;
}
