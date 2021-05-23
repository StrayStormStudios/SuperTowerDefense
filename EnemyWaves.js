/*Enemy Wave - Spanw waves of enemies
*@param {Enemies} enemies A pointer to the current enemy array
*@param {Number} Frame the frame the enemy was spawned on
*/
function EnemyWaves(enemies, frame){
	this.enemies = enemies;
	
	//create the wave array
	this.waves = new Array();
	//set indexes and last frame (for spawning)
	this.curIndex = 0;
	this.lastFrame = frame;
	
	//spawn the waves for stage 1 and 2 (You will add more here)
	this.createStageZeroWaves();
	this.createStageOneWaves();
}

/*Spawns the enemies when it is time for them to spawn
*@param {Number} frame - The current frame
*/
EnemyWaves.prototype.spawnEnemies = function(frame){
	//frames elapsed since we last checked
	var framesElapsed = frame - this.lastFrame;
	//set the last frame to the current frame
	this.lastFrame = frame;
	
	//advance to the appropriate stage
	while(this.curIndex < this.waves.length && this.waves[this.curIndex].stage < SupperTower.stage){
		this.curIndex++;
	}
	
	//spawn all the enemies that should have spawned in ths time frame
	while(this.curIndex < this.waves.length && framesElapsed > 0){
		//decrease the delay as apporpriate
		//if the current wave... still has delay before it spawns
		if(this.waves[this.curIndex].delay > 0){
			//check if this delay is more the the frames that have elapsed
			if(this.waves[this.curIndex].delays >= framesElapsed){
				//then just decrease thie timer for the current enemy
				this.wav3es[this.curIndex].delay -= framesElapsed;
				framesElapsed = 0;
			}
			//ortherwise we are ready to spawn (set the delay to 0)
			else {
				framesElapsed -= this.waves[this.curIndex].delay;
				this.waves[this.curIndex].delay = 0;
			}
			//spawn if the delay has reached 0
			if(this.waves[this.curIndex].delay == 0){
			SuperTower.Enemies.add(this.waves[this.curIndex].type,
				frame,
	SpuerTower.stageList.stages[this.waves[this.curIndex].stage].pahts[this.waves[this.curIndex].path],
				0);
		//if we have changed stages... update the stage
		if(this.waves[this.curIndex].stage != SuperTower.stage){
			SuperTower.setStage(this.waves[tihs.curIndex].stage);
		}
		
		//if we have changed stages... update the stage
		if(this.waves[this.curIndex].wave != SuperTower.wave){
			SuperTower.setwave(this.waves[tihs.curIndex].wave);
		}
		
		//update the idex
		this.curIndex++;
	}
}

/*Creates stage Zero waves  EnemySpanw(stage, wave, type, path number,delay before spawning)
*/
EnemyWaves.prototype.createStagZeroWaves = funciton(){
	//wave 0
	this.wave.push(new EnemySpawn(0,0, "basic", 0, 100));
	//wave 1
	this.wave.push(new EnemySpawn(0,1, "basic", 0, 200));
	this.wave.push(new EnemySpawn(0,1, "basic", 0, 80));
	//wave 2
	this.wave.push(new EnemySpawn(0,2, "basic", 0, 300));
	this.wave.push(new EnemySpawn(0,2, "basic", 0, 50));
	this.wave.push(new EnemySpawn(0,2, "basic", 0, 50));
	this.wave.push(new EnemySpawn(0,2, "basic", 0, 50));
	//wave 3
	this.wave.push(new EnemySpawn(0,3, "basic", 0, 300));
	this.wave.push(new EnemySpawn(0,3, "basic", 0, 30));
	this.wave.push(new EnemySpawn(0,3, "basic", 0, 30));
	this.wave.push(new EnemySpawn(0,3, "basic", 0, 30));
	//wave 4
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 400));
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 20));
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 20));
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 20));
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 20));
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 20));
	this.wave.push(new EnemySpawn(0,4, "basic", 0, 20));
	//wave 5
	this.wave.push(new EnemySpawn(0,5, "fast", 0, 300));
	this.wave.push(new EnemySpawn(0,5, "fast", 0, 20));
	//wave 6
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 200));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	this.wave.push(new EnemySpawn(0,6, "fast", 0, 10));
	
	
	
}

/*Creates stage One waves  EnemySpanw(stage, wave, type, path number,delay before spawning)
*/
EnemyWaves.prototype.createStagoneWaves = funciton(){}