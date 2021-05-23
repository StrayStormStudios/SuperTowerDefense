/*Enemy Waves - Spawns waves of enemies 
@param - {Enemies} enemies A pointer to the current enemy array
*/
function EnemyWaves(enemies, frame) {
  this.enemies = enemies;

  //create the waves array
  this.waves = new Array();
  this.curIndex = 0;
  this.lastFrame = frame;

  this.createStageOneWaves();
  this.createStageTwoWaves();
  this.createStageThreeWaves();
  this.createStageFourWaves();
  this.createStageFiveWaves();
  this.createStageSixWaves();
  this.createStageSevenWaves();
  this.createStageEightWaves();
  this.createStageNineWaves();
  this.createStageTenWaves();
  this.createStageElevenWaves();
  this.createStageTwelveWaves();
}

/*Spawns the enemies when it is time for them to spawn
@param {Number} frame The current frame
*/
EnemyWaves.prototype.spawnEnemies = function (frame) {
  //frames elapsed
  var framesElapsed = frame - this.lastFrame;
  this.lastFrame = frame;

  //advance to the appropriate stage
  while (
    this.curIndex < this.waves.length &&
    this.waves[this.curIndex].stage < SuperTower.stage
  ) {
    this.curIndex++;
  }

  //spawn all the enemies that should have spawned in this time frame
  while (this.curIndex < this.waves.length && framesElapsed > 0) {
    //decrease delay as appropriate
    if (this.waves[this.curIndex].delay > 0) {
      if (this.waves[this.curIndex].delay >= framesElapsed) {
        this.waves[this.curIndex].delay -= framesElapsed;
        framesElapsed = 0;
      } else {
        framesElapsed -= this.waves[this.curIndex].delay;
        this.waves[this.curIndex].delay = 0;
      }
    }
    //spawn if appropriate
    if (this.waves[this.curIndex].delay == 0) {
      SuperTower.enemies.add(
        this.waves[this.curIndex].type,
        frame,
        SuperTower.stageList.stages[this.waves[this.curIndex].stage].paths[
          this.waves[this.curIndex].path
        ],
        0
      );

      if (this.waves[this.curIndex].stage != SuperTower.stage) {
        SuperTower.setStage(this.waves[this.curIndex].stage);
      }

      if (this.waves[this.curIndex].wave != SuperTower.wave) {
        SuperTower.setWave(this.waves[this.curIndex].wave);
      }

      //update the index
      this.curIndex++;
    }
  }
};

/* creates stage One space background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageOneWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(0, 0, "basic", 0, 100));
  //wave 1
  this.waves.push(new EnemySpawn(0, 1, "basic", 0, 200));
  this.waves.push(new EnemySpawn(0, 1, "basic", 0, 80));
  //wave 2
  this.waves.push(new EnemySpawn(0, 2, "basic", 0, 300));
  this.waves.push(new EnemySpawn(0, 2, "basic", 0, 50));
  this.waves.push(new EnemySpawn(0, 2, "basic", 0, 50));
  this.waves.push(new EnemySpawn(0, 2, "basic", 0, 50));
  //wave 3
  this.waves.push(new EnemySpawn(0, 3, "basic", 0, 300));
  this.waves.push(new EnemySpawn(0, 3, "basic", 0, 30));
  this.waves.push(new EnemySpawn(0, 3, "basic", 0, 30));
  this.waves.push(new EnemySpawn(0, 3, "basic", 0, 30));
  //wave 4
  this.waves.push(new EnemySpawn(0, 4, "basic", 0, 400));
  this.waves.push(new EnemySpawn(0, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 4, "basic", 0, 20));
  //wave 5
  this.waves.push(new EnemySpawn(0, 5, "fast", 0, 300));
  this.waves.push(new EnemySpawn(0, 5, "fast", 0, 20));
  //wave 6
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 200));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 6, "fast", 0, 10));
  //wave 7
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 100));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 7, "basic", 0, 20));
  //wave 8
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 8, "basic", 0, 20));
  //wave 9
  this.waves.push(new EnemySpawn(0, 9, "armored", 0, 200));
  //wave 10
  this.waves.push(new EnemySpawn(0, 10, "armored", 0, 200));
  this.waves.push(new EnemySpawn(0, 10, "armored", 0, 50));
  //wave 11
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 100));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 11, "fast", 0, 10));
  //wave 12
  this.waves.push(new EnemySpawn(0, 12, "basic", 0, 50));
  this.waves.push(new EnemySpawn(0, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 12, "basic", 0, 20));
  //wave 13
  this.waves.push(new EnemySpawn(0, 13, "armored", 0, 200));
  this.waves.push(new EnemySpawn(0, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(0, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(0, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(0, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(0, 13, "armored", 0, 50));
  //wave 14
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 80));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(0, 14, "basic", 0, 20));
  //wave 15
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 100));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(0, 15, "fast", 0, 10));
};

/* creates stage Two Grass Medow background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageTwoWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(1, 0, "basic", 0, 800));
  //wave 1
  this.waves.push(new EnemySpawn(1, 1, "basic", 0, 200));
  this.waves.push(new EnemySpawn(1, 1, "basic", 0, 80));
  //wave 2
  this.waves.push(new EnemySpawn(1, 2, "basic", 0, 300));
  this.waves.push(new EnemySpawn(1, 2, "basic", 0, 50));
  this.waves.push(new EnemySpawn(1, 2, "basic", 0, 50));
  this.waves.push(new EnemySpawn(1, 2, "basic", 0, 50));
  //wave 3
  this.waves.push(new EnemySpawn(1, 3, "basic", 0, 300));
  this.waves.push(new EnemySpawn(1, 3, "basic", 0, 30));
  this.waves.push(new EnemySpawn(1, 3, "basic", 0, 30));
  this.waves.push(new EnemySpawn(1, 3, "basic", 0, 30));
  //wave 4
  this.waves.push(new EnemySpawn(1, 4, "basic", 0, 400));
  this.waves.push(new EnemySpawn(1, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 4, "easy", 0, 20));
  this.waves.push(new EnemySpawn(1, 4, "easy", 0, 20));
  this.waves.push(new EnemySpawn(1, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 4, "basic", 0, 20));
  //wave 5
  this.waves.push(new EnemySpawn(1, 5, "fast", 0, 300));
  this.waves.push(new EnemySpawn(1, 5, "fast", 0, 20));
  //wave 6
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 200));
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 6, "normal", 0, 10));
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 6, "fast", 0, 10));
  //wave 7
  this.waves.push(new EnemySpawn(1, 7, "basic", 0, 100));
  this.waves.push(new EnemySpawn(1, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 7, "normal", 0, 20));
  this.waves.push(new EnemySpawn(1, 7, "normal", 0, 20));
  //wave 8
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 8, "basic", 0, 20));
  //wave 9
  this.waves.push(new EnemySpawn(1, 9, "armored", 0, 200));
  //wave 10
  this.waves.push(new EnemySpawn(1, 10, "armored", 0, 200));
  this.waves.push(new EnemySpawn(1, 10, "armored", 0, 50));
  //wave 11
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 100));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 11, "fast", 0, 10));
  //wave 12
  this.waves.push(new EnemySpawn(1, 12, "basic", 0, 50));
  this.waves.push(new EnemySpawn(1, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 12, "basic", 0, 20));
  //wave 13
  this.waves.push(new EnemySpawn(1, 13, "armored", 0, 200));
  this.waves.push(new EnemySpawn(1, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(1, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(1, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(1, 13, "shield", 0, 50));
  this.waves.push(new EnemySpawn(1, 13, "armored", 0, 50));
  //wave 14
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 80));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(1, 14, "basic", 0, 20));
  //wave 15
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 100));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "athleat", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "athleat", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "athleat", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "athleat", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "athleat", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(1, 15, "fast", 0, 10));
};

/* creates stage Three wood bridge background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageThreeWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(2, 0, "basic", 0, 900));
  //wave 1
  this.waves.push(new EnemySpawn(2, 1, "basic", 0, 200));
  this.waves.push(new EnemySpawn(2, 1, "basic", 0, 200));
  //wave 2
  this.waves.push(new EnemySpawn(2, 2, "basic", 0, 200));
  this.waves.push(new EnemySpawn(2, 2, "basic", 0, 80));
  this.waves.push(new EnemySpawn(2, 2, "easy", 0, 50));
  this.waves.push(new EnemySpawn(2, 2, "easy", 0, 50));
  //wave 3
  this.waves.push(new EnemySpawn(2, 3, "easy", 0, 200));
  this.waves.push(new EnemySpawn(2, 3, "easy", 0, 50));
  this.waves.push(new EnemySpawn(2, 3, "easy", 0, 50));
  this.waves.push(new EnemySpawn(2, 3, "easy", 0, 50));
  //wave 4
  this.waves.push(new EnemySpawn(2, 4, "easy", 0, 200));
  this.waves.push(new EnemySpawn(2, 4, "easy", 0, 80));
  this.waves.push(new EnemySpawn(2, 4, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 4, "normal", 0, 50));
  //wave 5
  this.waves.push(new EnemySpawn(2, 5, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 5, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 5, "normal", 0, 80));
  this.waves.push(new EnemySpawn(2, 5, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 5, "normal", 0, 80));
  this.waves.push(new EnemySpawn(2, 5, "normal", 0, 50));
  //wave 6
  this.waves.push(new EnemySpawn(2, 6, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 6, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 6, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(2, 6, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(2, 6, "hard", 0, 80));
  this.waves.push(new EnemySpawn(2, 6, "normal", 0, 50));
  //wave 7
  this.waves.push(new EnemySpawn(2, 7, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 7, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 7, "extreme", 0, 200));
  this.waves.push(new EnemySpawn(2, 7, "extreme", 0, 200));
  //wave 8
  this.waves.push(new EnemySpawn(2, 8, "easy", 0, 200));
  this.waves.push(new EnemySpawn(2, 8, "easy", 0, 200));
  this.waves.push(new EnemySpawn(2, 8, "easy", 0, 200));
  this.waves.push(new EnemySpawn(2, 8, "easy", 0, 200));
  //wave 9
  this.waves.push(new EnemySpawn(2, 9, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 9, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 9, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 9, "normal", 0, 200));
  //wave 10
  this.waves.push(new EnemySpawn(2, 10, "armored", 0, 200));
  this.waves.push(new EnemySpawn(2, 10, "armored", 0, 200));
  //wave 11
  this.waves.push(new EnemySpawn(2, 11, "shield", 0, 200));
  this.waves.push(new EnemySpawn(2, 11, "armored", 0, 200));
  this.waves.push(new EnemySpawn(2, 11, "armored", 0, 200));
  this.waves.push(new EnemySpawn(2, 11, "shield", 0, 200));
  //wave 12
  this.waves.push(new EnemySpawn(2, 12, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "sleepy", 0, 50));
  this.waves.push(new EnemySpawn(2, 12, "frozen", 0, 50));
  //wave 13
  this.waves.push(new EnemySpawn(2, 13, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 13, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 13, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 13, "normal", 0, 200));
  //wave 14
  this.waves.push(new EnemySpawn(2, 14, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 14, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 14, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 14, "slow", 0, 200));
  //wave 15
  this.waves.push(new EnemySpawn(2, 15, "fast", 0, 200));
  this.waves.push(new EnemySpawn(2, 15, "fast", 0, 200));
  this.waves.push(new EnemySpawn(2, 15, "fast", 0, 200));
  this.waves.push(new EnemySpawn(2, 15, "flash", 0, 200));
  //wave 16
  this.waves.push(new EnemySpawn(2, 16, "flash", 0, 200));
  this.waves.push(new EnemySpawn(2, 16, "flash", 0, 200));
  this.waves.push(new EnemySpawn(2, 16, "Shark", 0, 200));
  this.waves.push(new EnemySpawn(2, 16, "Shark", 0, 200));
  //wave 17
  this.waves.push(new EnemySpawn(2, 17, "slow", 0, 200));
  this.waves.push(new EnemySpawn(2, 17, "frozen", 0, 200));
  this.waves.push(new EnemySpawn(2, 17, "frozen", 0, 200));
  this.waves.push(new EnemySpawn(2, 17, "sleepy", 0, 200));
  //wave 18
  this.waves.push(new EnemySpawn(2, 18, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "barrier", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "barrier", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "wall", 0, 200));
  this.waves.push(new EnemySpawn(2, 18, "normal", 0, 200));
  //wave 19
  this.waves.push(new EnemySpawn(2, 19, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 19, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 19, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 19, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 19, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 19, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 19, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 19, "hard", 0, 50));
  this.waves.push(new EnemySpawn(2, 19, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 19, "normal", 0, 50));
  this.waves.push(new EnemySpawn(2, 19, "hard", 0, 50));
  //wave 20
  this.waves.push(new EnemySpawn(2, 20, "tank", 0, 200));
  this.waves.push(new EnemySpawn(2, 20, "tank", 0, 200));
  this.waves.push(new EnemySpawn(2, 20, "tank", 0, 200));
  this.waves.push(new EnemySpawn(2, 20, "tank", 0, 200));
  //wave 21
  this.waves.push(new EnemySpawn(2, 21, "difficult", 0, 200));
  this.waves.push(new EnemySpawn(2, 21, "hard", 0, 200));
  this.waves.push(new EnemySpawn(2, 21, "normal", 0, 200));
  this.waves.push(new EnemySpawn(2, 21, "normal", 0, 200));
};

/* creates stage Four mouse loop-d-loop background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageFourWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(3, 0, "normal", 1, 1300));
  this.waves.push(new EnemySpawn(3, 0, "normal", 1, 100));
  //wave 1
  this.waves.push(new EnemySpawn(3, 1, "normal", 0, 100));
  this.waves.push(new EnemySpawn(3, 1, "normal", 0, 100));
  //wave 2
  this.waves.push(new EnemySpawn(3, 2, "difficult", 1, 100));
  this.waves.push(new EnemySpawn(3, 2, "difficult", 0, 10));
  //wave 3
  this.waves.push(new EnemySpawn(3, 3, "basic", 0, 100));
  this.waves.push(new EnemySpawn(3, 3, "easy", 1, 100));
  this.waves.push(new EnemySpawn(3, 3, "normal", 0, 100));
  this.waves.push(new EnemySpawn(3, 3, "difficult", 1, 100));
  this.waves.push(new EnemySpawn(3, 3, "hard", 0, 100));
  this.waves.push(new EnemySpawn(3, 3, "extreme", 1, 100));
  //wave 4
  this.waves.push(new EnemySpawn(3, 4, "fast", 0, 100));
  this.waves.push(new EnemySpawn(3, 4, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(3, 4, "shark", 0, 100));
  this.waves.push(new EnemySpawn(3, 4, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(3, 4, "flash", 0, 100));
  this.waves.push(new EnemySpawn(3, 4, "liSpeed", 0, 100));
  //wave 5
  this.waves.push(new EnemySpawn(3, 5, "armored", 0, 100));
  this.waves.push(new EnemySpawn(3, 5, "shield", 0, 100));
  this.waves.push(new EnemySpawn(3, 5, "barrier", 1, 100));
  this.waves.push(new EnemySpawn(3, 5, "wall", 1, 100));
  this.waves.push(new EnemySpawn(3, 5, "tank", 0, 100));
  //wave 6
  this.waves.push(new EnemySpawn(3, 6, "slow", 0, 100));
  this.waves.push(new EnemySpawn(3, 6, "sleepy", 1, 100));
  this.waves.push(new EnemySpawn(3, 6, "frozen", 1, 100));
  //wave 7
  this.waves.push(new EnemySpawn(3, 7, "tank", 0, 100));
  this.waves.push(new EnemySpawn(3, 7, "tank", 1, 100));
  this.waves.push(new EnemySpawn(3, 7, "wall", 0, 100));
  this.waves.push(new EnemySpawn(3, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(3, 7, "liSpeed", 1, 100));
  this.waves.push(new EnemySpawn(3, 7, "basic", 0, 100));
  this.waves.push(new EnemySpawn(3, 7, "basic", 1, 100));
  this.waves.push(new EnemySpawn(3, 7, "difficult", 0, 100));
  //wave 8
  this.waves.push(new EnemySpawn(3, 8, "normal", 0, 100));
  this.waves.push(new EnemySpawn(3, 8, "normal", 1, 100));
  this.waves.push(new EnemySpawn(3, 8, "normal", 1, 100));
  this.waves.push(new EnemySpawn(3, 8, "normal", 0, 100));
  //wave 9
  this.waves.push(new EnemySpawn(3, 9, "barrier", 1, 100));
  //wave 10
  this.waves.push(new EnemySpawn(3, 10, "frozen", 1, 100));
  //wave 11
  this.waves.push(new EnemySpawn(3, 11, "barrier", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(3, 12, "frozen", 1, 100));
  //wave 13
  this.waves.push(new EnemySpawn(3, 13, "barrier", 1, 100));
  //wave 14
  this.waves.push(new EnemySpawn(3, 14, "frozen", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(3, 15, "barrier", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(3, 16, "frozen", 0, 100));
  //wave 17
  this.waves.push(new EnemySpawn(3, 17, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(3, 17, "normal", 1, 100));
  this.waves.push(new EnemySpawn(3, 17, "normal", 1, 100));
  this.waves.push(new EnemySpawn(3, 17, "easy", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(3, 18, "extreme", 0, 100));
  this.waves.push(new EnemySpawn(3, 18, "tank", 1, 100));
  this.waves.push(new EnemySpawn(3, 18, "lightning", 1, 100));
  this.waves.push(new EnemySpawn(3, 18, "normal", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(3, 19, "easy", 0, 100));
  this.waves.push(new EnemySpawn(3, 19, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(3, 19, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(3, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(3, 20, "fast", 0, 100));
  this.waves.push(new EnemySpawn(3, 20, "armored", 1, 100));
  this.waves.push(new EnemySpawn(3, 20, "barrier", 1, 100));
  this.waves.push(new EnemySpawn(3, 20, "shield", 0, 100));
};

/* creates stage Five Random IDK background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageFiveWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(4, 0, "normal", 0, 600));
  //wave 1
  this.waves.push(new EnemySpawn(4, 1, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 1, "normal", 0, 100));
  //wave 2
  this.waves.push(new EnemySpawn(4, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(4, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(4, 3, "difficult", 0, 10));
  //wave 4
  this.waves.push(new EnemySpawn(4, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(4, 4, "easy", 0, 100));
  this.waves.push(new EnemySpawn(4, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 4, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(4, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(4, 4, "extreme", 0, 100));
  //wave 5
  this.waves.push(new EnemySpawn(4, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(4, 5, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(4, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(4, 5, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(4, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(4, 5, "liSpeed", 0, 100));
  //wave 6
  this.waves.push(new EnemySpawn(4, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(4, 6, "shield", 0, 100));
  this.waves.push(new EnemySpawn(4, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(4, 6, "wall", 0, 100));
  this.waves.push(new EnemySpawn(4, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(4, 7, "slow", 0, 100));
  this.waves.push(new EnemySpawn(4, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(4, 7, "frozen", 0, 100));
  //wave 8
  this.waves.push(new EnemySpawn(4, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(4, 8, "difficult", 0, 100));
  //wave 9
  this.waves.push(new EnemySpawn(4, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(4, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(4, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(4, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(4, 13, "frozen", 0, 100));
  //wave 14
  this.waves.push(new EnemySpawn(4, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(4, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(4, 16, "barrier", 0, 100));
  //wave 17
  this.waves.push(new EnemySpawn(4, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(4, 18, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(4, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(4, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(4, 19, "extreme", 0, 100));
  this.waves.push(new EnemySpawn(4, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(4, 19, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(4, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(4, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(4, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(4, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(4, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(4, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(4, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(4, 21, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(4, 21, "shield", 0, 100));
};

/* creates stage Six Stair background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageSixWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(5, 0, "hard", 0, 500));
  //wave 1
  this.waves.push(new EnemySpawn(5, 1, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 1, "normal", 0, 100));
  //wave 2
  this.waves.push(new EnemySpawn(5, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(5, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(5, 3, "difficult", 0, 10));
  //wave 4
  this.waves.push(new EnemySpawn(5, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(5, 4, "easy", 0, 100));
  this.waves.push(new EnemySpawn(5, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 4, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(5, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(5, 4, "extreme", 0, 100));
  //wave 5
  this.waves.push(new EnemySpawn(5, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(5, 5, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(5, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(5, 5, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(5, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(5, 5, "liSpeed", 0, 100));
  //wave 6
  this.waves.push(new EnemySpawn(5, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(5, 6, "shield", 0, 100));
  this.waves.push(new EnemySpawn(5, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(5, 6, "wall", 0, 100));
  this.waves.push(new EnemySpawn(5, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(5, 7, "slow", 0, 100));
  this.waves.push(new EnemySpawn(5, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(5, 7, "frozen", 0, 100));
  //wave 8
  this.waves.push(new EnemySpawn(5, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(5, 8, "difficult", 0, 100));
  //wave 9
  this.waves.push(new EnemySpawn(5, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(5, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(5, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(5, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(5, 13, "frozen", 0, 100));
  //wave 14
  this.waves.push(new EnemySpawn(5, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(5, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(5, 16, "barrier", 0, 100));
  //wave 17
  this.waves.push(new EnemySpawn(5, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(5, 18, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(5, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(5, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(5, 19, "extreme", 0, 100));
  this.waves.push(new EnemySpawn(5, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(5, 19, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(5, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(5, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(5, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(5, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(5, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(5, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(5, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(5, 21, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(5, 21, "shield", 0, 100));
};

/* creates stage Seven Lava background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageSevenWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(6, 0, "extreme", 0, 700));
  //wave 1
  this.waves.push(new EnemySpawn(6, 1, "normal", 1, 100));
  this.waves.push(new EnemySpawn(6, 1, "normal", 1, 100));
  //wave 2
  this.waves.push(new EnemySpawn(6, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(6, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(6, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(6, 3, "difficult", 1, 10));
  //wave 4
  this.waves.push(new EnemySpawn(6, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(6, 4, "easy", 1, 100));
  this.waves.push(new EnemySpawn(6, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(6, 4, "difficult", 1, 100));
  this.waves.push(new EnemySpawn(6, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(6, 4, "extreme", 1, 100));
  //wave 5
  this.waves.push(new EnemySpawn(6, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(6, 5, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(6, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(6, 5, "lightning", 1, 100));
  this.waves.push(new EnemySpawn(6, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(6, 5, "liSpeed", 1, 100));
  //wave 6
  this.waves.push(new EnemySpawn(6, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(6, 6, "shield", 1, 100));
  this.waves.push(new EnemySpawn(6, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(6, 6, "wall", 1, 100));
  this.waves.push(new EnemySpawn(6, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(6, 7, "slow", 1, 100));
  this.waves.push(new EnemySpawn(6, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(6, 7, "frozen", 1, 100));
  //wave 8
  this.waves.push(new EnemySpawn(6, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(6, 8, "tank", 1, 100));
  this.waves.push(new EnemySpawn(6, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(6, 8, "sleepy", 1, 100));
  this.waves.push(new EnemySpawn(6, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(6, 8, "basic", 1, 100));
  this.waves.push(new EnemySpawn(6, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(6, 8, "difficult", 1, 100));
  //wave 9
  this.waves.push(new EnemySpawn(6, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(6, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(6, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(6, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(6, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(6, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(6, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(6, 13, "frozen", 1, 100));
  //wave 14
  this.waves.push(new EnemySpawn(6, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(6, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(6, 16, "barrier", 1, 100));
  //wave 17
  this.waves.push(new EnemySpawn(6, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(6, 18, "difficult", 1, 100));
  this.waves.push(new EnemySpawn(6, 18, "normal", 1, 100));
  this.waves.push(new EnemySpawn(6, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(6, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(6, 19, "extreme", 1, 100));
  this.waves.push(new EnemySpawn(6, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(6, 19, "lightning", 1, 100));
  this.waves.push(new EnemySpawn(6, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(6, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(6, 20, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(6, 20, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(6, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(6, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(6, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(6, 21, "barrier", 1, 100));
  this.waves.push(new EnemySpawn(6, 21, "shield", 0, 100));
};

/* creates stage Eight Snail background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageEightWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(7, 0, "tank", 0, 100));
  //wave 1
  this.waves.push(new EnemySpawn(7, 1, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 1, "normal", 0, 100));
  //wave 2
  this.waves.push(new EnemySpawn(7, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(7, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(7, 3, "difficult", 0, 10));
  //wave 4
  this.waves.push(new EnemySpawn(7, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(7, 4, "easy", 0, 100));
  this.waves.push(new EnemySpawn(7, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 4, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(7, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(7, 4, "extreme", 0, 100));
  //wave 5
  this.waves.push(new EnemySpawn(7, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(7, 5, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(7, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(7, 5, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(7, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(7, 5, "liSpeed", 0, 100));
  //wave 6
  this.waves.push(new EnemySpawn(7, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(7, 6, "shield", 0, 100));
  this.waves.push(new EnemySpawn(7, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(7, 6, "wall", 0, 100));
  this.waves.push(new EnemySpawn(7, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(7, 7, "slow", 0, 100));
  this.waves.push(new EnemySpawn(7, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(7, 7, "frozen", 0, 100));
  //wave 8
  this.waves.push(new EnemySpawn(7, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(7, 8, "difficult", 0, 100));
  //wave 9
  this.waves.push(new EnemySpawn(7, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(7, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(7, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(7, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(7, 13, "frozen", 0, 100));
  //wave 14
  this.waves.push(new EnemySpawn(7, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(7, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(7, 16, "barrier", 0, 100));
  //wave 17
  this.waves.push(new EnemySpawn(7, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(7, 18, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(7, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(7, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(7, 19, "extreme", 0, 100));
  this.waves.push(new EnemySpawn(7, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(7, 19, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(7, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(7, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(7, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(7, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(7, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(7, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(7, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(7, 21, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(7, 21, "shield", 0, 100));
};

/* creates stage Nine Dual background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageNineWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(8, 0, "shark", 0, 2200));
  //wave 1
  this.waves.push(new EnemySpawn(8, 1, "normal", 1, 100));
  this.waves.push(new EnemySpawn(8, 1, "normal", 1, 100));
  //wave 2
  this.waves.push(new EnemySpawn(8, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(8, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(8, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(8, 3, "difficult", 1, 10));
  //wave 4
  this.waves.push(new EnemySpawn(8, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(8, 4, "easy", 1, 100));
  this.waves.push(new EnemySpawn(8, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(8, 4, "difficult", 1, 100));
  this.waves.push(new EnemySpawn(8, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(8, 4, "extreme", 1, 100));
  //wave 5
  this.waves.push(new EnemySpawn(8, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(8, 5, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(8, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(8, 5, "lightning", 1, 100));
  this.waves.push(new EnemySpawn(8, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(8, 5, "liSpeed", 1, 100));
  //wave 6
  this.waves.push(new EnemySpawn(8, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(8, 6, "shield", 1, 100));
  this.waves.push(new EnemySpawn(8, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(8, 6, "wall", 1, 100));
  this.waves.push(new EnemySpawn(8, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(8, 7, "slow", 1, 100));
  this.waves.push(new EnemySpawn(8, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(8, 7, "frozen", 1, 100));
  //wave 8
  this.waves.push(new EnemySpawn(8, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(8, 8, "tank", 1, 100));
  this.waves.push(new EnemySpawn(8, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(8, 8, "sleepy", 1, 100));
  this.waves.push(new EnemySpawn(8, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(8, 8, "basic", 1, 100));
  this.waves.push(new EnemySpawn(8, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(8, 8, "difficult", 1, 100));
  //wave 9
  this.waves.push(new EnemySpawn(8, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(8, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(8, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(8, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(8, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(8, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(8, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(8, 13, "frozen", 1, 100));
  //wave 14
  this.waves.push(new EnemySpawn(8, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(8, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(8, 16, "barrier", 1, 100));
  //wave 17
  this.waves.push(new EnemySpawn(8, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(8, 18, "difficult", 1, 100));
  this.waves.push(new EnemySpawn(8, 18, "normal", 1, 100));
  this.waves.push(new EnemySpawn(8, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(8, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(8, 19, "extreme", 1, 100));
  this.waves.push(new EnemySpawn(8, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(8, 19, "lightning", 1, 100));
  this.waves.push(new EnemySpawn(8, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(8, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(8, 20, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(8, 20, "athleat", 1, 100));
  this.waves.push(new EnemySpawn(8, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(8, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(8, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(8, 21, "barrier", 1, 100));
  this.waves.push(new EnemySpawn(8, 21, "shield", 0, 100));
};

/* creates stage Ten Sand background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageTenWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(9, 0, "lightning", 0, 500));
  //wave 1
  this.waves.push(new EnemySpawn(9, 1, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 1, "normal", 0, 100));
  //wave 2
  this.waves.push(new EnemySpawn(9, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(9, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(9, 3, "difficult", 0, 10));
  //wave 4
  this.waves.push(new EnemySpawn(9, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(9, 4, "easy", 0, 100));
  this.waves.push(new EnemySpawn(9, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 4, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(9, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(9, 4, "extreme", 0, 100));
  //wave 5
  this.waves.push(new EnemySpawn(9, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(9, 5, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(9, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(9, 5, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(9, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(9, 5, "liSpeed", 0, 100));
  //wave 6
  this.waves.push(new EnemySpawn(9, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(9, 6, "shield", 0, 100));
  this.waves.push(new EnemySpawn(9, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(9, 6, "wall", 0, 100));
  this.waves.push(new EnemySpawn(9, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(9, 7, "slow", 0, 100));
  this.waves.push(new EnemySpawn(9, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(9, 7, "frozen", 0, 100));
  //wave 8
  this.waves.push(new EnemySpawn(9, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(9, 8, "difficult", 0, 100));
  //wave 9
  this.waves.push(new EnemySpawn(9, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(9, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(9, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(9, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(9, 13, "frozen", 0, 100));
  //wave 14
  this.waves.push(new EnemySpawn(9, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(9, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(9, 16, "barrier", 0, 100));
  //wave 17
  this.waves.push(new EnemySpawn(9, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(9, 18, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(9, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(9, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(9, 19, "extreme", 0, 100));
  this.waves.push(new EnemySpawn(9, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(9, 19, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(9, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(9, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(9, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(9, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(9, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(9, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(9, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(9, 21, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(9, 21, "shield", 0, 100));
};

/* creates stage Eleven X background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageElevenWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(10, 0, "flash", 0, 500));
  //wave 1
  this.waves.push(new EnemySpawn(10, 1, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 1, "normal", 0, 100));
  //wave 2
  this.waves.push(new EnemySpawn(10, 2, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 2, "normal", 0, 100));
  //wave 3
  this.waves.push(new EnemySpawn(10, 3, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(10, 3, "difficult", 0, 10));
  //wave 4
  this.waves.push(new EnemySpawn(10, 4, "basic", 0, 100));
  this.waves.push(new EnemySpawn(10, 4, "easy", 0, 100));
  this.waves.push(new EnemySpawn(10, 4, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 4, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(10, 4, "hard", 0, 100));
  this.waves.push(new EnemySpawn(10, 4, "extreme", 0, 100));
  //wave 5
  this.waves.push(new EnemySpawn(10, 5, "fast", 0, 100));
  this.waves.push(new EnemySpawn(10, 5, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(10, 5, "shark", 0, 100));
  this.waves.push(new EnemySpawn(10, 5, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(10, 5, "flash", 0, 100));
  this.waves.push(new EnemySpawn(10, 5, "liSpeed", 0, 100));
  //wave 6
  this.waves.push(new EnemySpawn(10, 6, "armored", 0, 100));
  this.waves.push(new EnemySpawn(10, 6, "shield", 0, 100));
  this.waves.push(new EnemySpawn(10, 6, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(10, 6, "wall", 0, 100));
  this.waves.push(new EnemySpawn(10, 6, "tank", 0, 100));
  //wave 7
  this.waves.push(new EnemySpawn(10, 7, "slow", 0, 100));
  this.waves.push(new EnemySpawn(10, 7, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(10, 7, "frozen", 0, 100));
  //wave 8
  this.waves.push(new EnemySpawn(10, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "tank", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "wall", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "sleepy", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "liSpeed", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "basic", 0, 100));
  this.waves.push(new EnemySpawn(10, 8, "difficult", 0, 100));
  //wave 9
  this.waves.push(new EnemySpawn(10, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 9, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 9, "normal", 0, 100));
  //wave 10
  this.waves.push(new EnemySpawn(10, 10, "barrier", 0, 100));
  //wave 11
  this.waves.push(new EnemySpawn(10, 11, "frozen", 0, 100));
  //wave 12
  this.waves.push(new EnemySpawn(10, 12, "barrier", 0, 100));
  //wave 13
  this.waves.push(new EnemySpawn(10, 13, "frozen", 0, 100));
  //wave 14
  this.waves.push(new EnemySpawn(10, 14, "barrier", 0, 100));
  //wave 15
  this.waves.push(new EnemySpawn(10, 15, "frozen", 0, 100));
  //wave 16
  this.waves.push(new EnemySpawn(10, 16, "barrier", 0, 100));
  //wave 17
  this.waves.push(new EnemySpawn(10, 17, "frozen", 0, 100));
  //wave 18
  this.waves.push(new EnemySpawn(10, 18, "difficult", 0, 100));
  this.waves.push(new EnemySpawn(10, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 18, "normal", 0, 100));
  this.waves.push(new EnemySpawn(10, 18, "easy", 0, 100));
  //wave 19
  this.waves.push(new EnemySpawn(10, 19, "extreme", 0, 100));
  this.waves.push(new EnemySpawn(10, 19, "tank", 0, 100));
  this.waves.push(new EnemySpawn(10, 19, "lightning", 0, 100));
  this.waves.push(new EnemySpawn(10, 19, "normal", 0, 100));
  //wave 20
  this.waves.push(new EnemySpawn(10, 20, "easy", 0, 100));
  this.waves.push(new EnemySpawn(10, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(10, 20, "athleat", 0, 100));
  this.waves.push(new EnemySpawn(10, 20, "normal", 0, 100));
  //wave 21
  this.waves.push(new EnemySpawn(10, 21, "fast", 0, 100));
  this.waves.push(new EnemySpawn(10, 21, "armored", 0, 100));
  this.waves.push(new EnemySpawn(10, 21, "barrier", 0, 100));
  this.waves.push(new EnemySpawn(10, 21, "shield", 0, 100));
};

/* creates stage Twelve spcae background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageTwelveWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(11, 0, "basic", 0, 500));
  //wave 1
  this.waves.push(new EnemySpawn(11, 1, "basic", 1, 200));
  this.waves.push(new EnemySpawn(11, 1, "basic", 0, 80));
  //wave 2
  this.waves.push(new EnemySpawn(11, 2, "basic", 0, 300));
  this.waves.push(new EnemySpawn(11, 2, "basic", 1, 50));
  this.waves.push(new EnemySpawn(11, 2, "basic", 0, 50));
  this.waves.push(new EnemySpawn(11, 2, "basic", 1, 50));
  //wave 3
  this.waves.push(new EnemySpawn(11, 4, "basic", 1, 300));
  this.waves.push(new EnemySpawn(11, 4, "basic", 0, 30));
  this.waves.push(new EnemySpawn(11, 4, "basic", 1, 30));
  this.waves.push(new EnemySpawn(11, 4, "basic", 0, 30));
  //wave 4
  this.waves.push(new EnemySpawn(11, 4, "basic", 1, 400));
  this.waves.push(new EnemySpawn(11, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 4, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 4, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 4, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 4, "basic", 0, 20));
  //wave 5
  this.waves.push(new EnemySpawn(11, 5, "fast", 1, 300));
  this.waves.push(new EnemySpawn(11, 5, "fast", 0, 20));
  //wave 6
  this.waves.push(new EnemySpawn(11, 6, "fast", 1, 200));
  this.waves.push(new EnemySpawn(11, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 6, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 6, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 6, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 6, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 6, "fast", 0, 10));
  //wave 7
  this.waves.push(new EnemySpawn(11, 7, "basic", 1, 100));
  this.waves.push(new EnemySpawn(11, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 7, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 7, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 7, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 7, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 7, "basic", 0, 20));
  //wave 8
  this.waves.push(new EnemySpawn(11, 8, "basic", 1, 100));
  this.waves.push(new EnemySpawn(11, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 8, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 8, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 8, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 8, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 8, "basic", 0, 20));
  //wave 9
  this.waves.push(new EnemySpawn(11, 9, "armored", 0, 200));
  //wave 10
  this.waves.push(new EnemySpawn(11, 10, "armored", 1, 200));
  this.waves.push(new EnemySpawn(11, 10, "armored", 0, 50));
  //wave 11
  this.waves.push(new EnemySpawn(11, 11, "fast", 1, 100));
  this.waves.push(new EnemySpawn(11, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 11, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 11, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 11, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 11, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 11, "fast", 0, 10));
  //wave 12
  this.waves.push(new EnemySpawn(11, 12, "basic", 1, 50));
  this.waves.push(new EnemySpawn(11, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 12, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 12, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 12, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 12, "basic", 0, 20));
  //wave 13
  this.waves.push(new EnemySpawn(11, 13, "armored", 1, 200));
  this.waves.push(new EnemySpawn(11, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(11, 13, "armored", 1, 50));
  this.waves.push(new EnemySpawn(11, 13, "armored", 0, 50));
  this.waves.push(new EnemySpawn(11, 13, "armored", 1, 50));
  this.waves.push(new EnemySpawn(11, 13, "armored", 0, 50));
  //wave 14
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 80));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 1, 20));
  this.waves.push(new EnemySpawn(11, 14, "basic", 0, 20));
  //wave 15
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 100));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 1, 10));
  this.waves.push(new EnemySpawn(11, 15, "fast", 0, 10));
};
