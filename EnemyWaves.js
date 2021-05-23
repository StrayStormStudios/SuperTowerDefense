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
  this.waves.push(new EnemySpawn(1, 0, "basic", 0, 2200));
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
  this.waves.push(new EnemySpawn(1, 4, "eaasy", 0, 20));
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
  this.waves.push(new EnemySpawn(2, 0, "basic", 0, 2200));
};

/* creates stage Four mouse loop-d-loop background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageFourWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(2, 0, "basic", 0, 2200));
};

/* creates stage Five Random IDK background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageFiveWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(4, 0, "basic", 0, 2200));
};

/* creates stage Six Stair background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageSixWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(5, 0, "basic", 0, 2200));
};

/* creates stage Seven Lava background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageSevenWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(6, 0, "basic", 0, 2200));
};

/* creates stage Eight Snail background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageEightWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(7, 0, "basic", 0, 2200));
};

/* creates stage Nine Dual background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageNineWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(8, 0, "basic", 0, 2200));
};

/* creates stage Ten Sand background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageTenWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(9, 0, "basic", 0, 2200));
};

/* creates stage Eleven X background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageElevenWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(10, 0, "basic", 0, 2200));
};

/* creates stage Twelve spcae background
 *    parameters for EnemySpawn(stage, wave, type, path, delay)
 */
EnemyWaves.prototype.createStageTwelveWaves = function () {
  //wave 0
  this.waves.push(new EnemySpawn(11, 0, "basic", 0, 600));
  //wave 1
  this.waves.push(new EnemySpawn(11, 1, "basic", 1, 200));
  this.waves.push(new EnemySpawn(11, 1, "basic", 0, 80));
  //wave 2
  this.waves.push(new EnemySpawn(11, 2, "basic", 0, 300));
  this.waves.push(new EnemySpawn(11, 2, "basic", 1, 50));
  this.waves.push(new EnemySpawn(11, 2, "basic", 0, 50));
  this.waves.push(new EnemySpawn(11, 2, "basic", 1, 50));
  //wave 3
  this.waves.push(new EnemySpawn(11, 3, "basic", 1, 300));
  this.waves.push(new EnemySpawn(11, 3, "basic", 0, 30));
  this.waves.push(new EnemySpawn(11, 3, "basic", 1, 30));
  this.waves.push(new EnemySpawn(11, 3, "basic", 0, 30));
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
