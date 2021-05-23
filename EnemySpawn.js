/*Defines an enemy spawn
 * @param {Number} Stage, the stage of the enemy
 * @param {Number} Wave, the wave of the enemy
 * @param {String} Type the type of enemy
 * @param {Number} Delay The delay this enemy should spawn on (after pervious enemy)
 */
function EnemySpawn(stage, wave, type, delay) {
  this.stage = stage;
  this.wave = wave;
  this.tpye = type;
  this.delay = delay;
}
