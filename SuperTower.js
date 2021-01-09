/* SuperTower()... This acts as the main 
* game class for our SuperTower game.  
* All main game loops are here.  This is the only
* class that should interact directly with the 
* html and css.
*/
//Create the class
function SuperTower(){}

/*Class fields */
//Canvas Layers
SuperTower.layerBackgroundImage;
SuperTower.layerStage;
SuperTower.layerEnemies;
SuperTower.layerBullets;
SuperTower.layerTowers;
SuperTower.layerExplosions;
SuperTower.layerUIStatic;
SuperTower.layerUIDynamic;

//Canvas Context
SuperTower.ctxBackgroundImage;
SuperTower.ctxStage;
SuperTower.ctxEnemies;
SuperTower.ctxBullets;
SuperTower.ctxTowers;
SuperTower.ctxExplosions;
SuperTower.ctxUIStatic;
SuperTower.ctxUIDynamic;

//mouse position
SuperTower.mouseX;
SuperTower.mouseY;

//Stages
SuperTower.stageList;

SuperTower.backgroundImage = new Image();

//current stage / wave
SuperTower.stage;
SuperTower.wave;

//currentFrame
SuperTower.frame;

//Enemies
SuperTower.enemies;
SuperTower.enemyWaves;

//Towers
SuperTower.towers;
SuperTower.towerMenu; //towers for the menu

//bullets
SuperTower.bullets;

//explosions
SuperTower.explosions;

//stats
SuperTower.cash = 1000;
SuperTower.lives = 100;
SuperTower.kills = 0;
SuperTower.missed = 0;

//game speed
SuperTower.gameSpeed = 2; //2 is normal speed, 1 is dobble speed, 4 is half speed
SuperTower.curSpeed = SuperTower.gameSpeed; //the current delay

/* Initializes the game with initial states and calls the main game loop
*/
SuperTower.init = function() {
	//setup layers
	SuperTower.backgroundImage.src ="background1.png";
	SuperTower.layerBackgroundImage = document.getElementById("layerBackgroundImage");
	SuperTower.ctxBackgroundImage = SuperTower.layerBackgroundImage.getContext("2d");
	SuperTower.layerStage = document.getElementById("layerStage");
	SuperTower.ctxStage = SuperTower.layerStage.getContext("2d");
	SuperTower.layerEnemies = document.getElementById("layerEnemies");
	SuperTower.ctxEnemies = SuperTower.layerEnemies.getContext("2d");
	SuperTower.layerBullets = document.getElementById("layerBullets");
	SuperTower.ctxBullets = SuperTower.layerBullets.getContext("2d");
	SuperTower.layerTowers = document.getElementById("layerTowers");
	SuperTower.ctxTowers = SuperTower.layerTowers.getContext("2d");
	SuperTower.layerExplosions = document.getElementById("layerExplosions");
	SuperTower.ctxExplosions = SuperTower.layerExplosions.getContext("2d");
	SuperTower.layerUIStatic = document.getElementById("layerUIStatic");
	SuperTower.ctxUIStatic = SuperTower.layerUIStatic.getContext("2d");
	SuperTower.layerUIDynamic = document.getElementById("layerUIDynamic");
	SuperTower.ctxUIDynamic = SuperTower.layerUIDynamic.getContext("2d");
	
	//add event listeners
	SuperTower.layerUIDynamic.addEventListener('mousedown', function(e) {
		var rect = SuperTower.layerUIDynamic.getBoundingClientRect();		
		SuperTower.mouseX = e.clientX - rect.left;
		SuperTower.mouseY = e.clientY - rect.top;
		SuperTower.mouseDown();
	});	
	SuperTower.layerUIDynamic.addEventListener('mouseup', function(e) {
		var rect = SuperTower.layerUIDynamic.getBoundingClientRect();		
		SuperTower.mouseX = e.clientX - rect.left;
		SuperTower.mouseY = e.clientY - rect.top;
		SuperTower.mouseUp();
	});	
	SuperTower.layerUIDynamic.addEventListener('mousemove', function(e) {
		var rect = SuperTower.layerUIDynamic.getBoundingClientRect();		
		SuperTower.mouseX = e.clientX - rect.left;
		SuperTower.mouseY = e.clientY - rect.top;
		SuperTower.mouseMove();
	});
	document.addEventListener('keydown', function(e) {
		//alert(e.keyCode);
		if(e.keyCode == "61" || e.keyCode == "187"){ // +, or speed up
			SuperTower.gameSpeed--;
			if(SuperTower.gameSpeed <= 0){
				SuperTower.gameSpeed = 0;
				console.log("Fastest Speed: " + SuperTower.gameSpeed);
			}
			else {
				console.log("speed up  " + SuperTower.gameSpeed);
			}
		}
		else if (e.keyCode == "173" || e.keyCode == "189"){ // -, or slow down
			SuperTower.gameSpeed++;
			if(SuperTower.gameSpeed >= 4){
				SuperTower.gameSpeed = 4;
				console.log("Slowest Speed: " + SuperTower.gameSpeed);
			}
			else {
				console.log("slow down  " + SuperTower.gameSpeed);
			}
		}
	});
	document.addEventListener('keydown', function(e) {
		//delete a tower
		if (e.keyCode== "46"){
			SuperTower.towers.deleteSelected();
		}
	});
	document.addEventListener('keydown', function(e) {
		var tower = SuperTower.towers.towers;
		//Show Tower Info
		if(e.shiftKey && e.keyCode == "73") { 
			SuperTower.towers.advancedInfo();
		}
		if (e.keyCode == "73" && tower.name != "Support"){
			SuperTower.towers.basicInfo();
		} else if (e.keyCode== "66" && tower.name == "Support"){
			SuperTower.towers.buffInfo();
		}
	});
	
	//Set Frame
	SuperTower.frame = 0;
	
	//Create Stages
	SuperTower.createStages();
	
	SuperTower.stage = 0;
	SuperTower.wave = 0;
	
	//create Enemies
	SuperTower.enemies = new Enemies();
	SuperTower.enemyWaves = new EnemyWaves(SuperTower.enemies, SuperTower.frame);
	
	//create tower listStyleType
	SuperTower.towers = new Towers();
	
	//create bullets
	SuperTower.bullets = new Bullets();
	
	//create the towers for the background
	SuperTower.towerMenu = new TowerMenu();
	
	//create explosions
	SuperTower.explosions = new Explosions();
	
	//redraw everything
	SuperTower.drawAll();
	
	//main game loop
	setInterval(SuperTower.playGame, 20);
	
	//set the current stage
	SuperTower.setStage(SuperTower.stage);
	
	
}

/*Main game loop, this should run multiple times each second*/
SuperTower.playGame = function(){
	SuperTower.curSpeed--;
	//if lives go neagative, go to gmaover
	if(SuperTower.lives <= 0){
		SuperTower.lives = 0;
		SuperTower.setStage (12);
	}
	if(SuperTower.curSpeed <= 0){
		SuperTower.curSpeed = SuperTower.gameSpeed;
		SuperTower.enemyWaves.spawnEnemies(SuperTower.frame);
		//Check if the next enemy is from the next level
		var curIndex = SuperTower.enemyWaves.curIndex;
		var waves = SuperTower.enemyWaves.waves;
		if(curIndex < waves.length){
			if(waves[curIndex].stage > SuperTower.stage){
				//are there still enemies?
				if(SuperTower.enemies.enemies.length > 0){
					//set the time for the next wave to 200
					
					waves[curIndex].delay = 200;
				} else {
					waves[curIndex].delay = Math.min(waves[curIndex].delay, 200);
				}
			}
		}
	
		SuperTower.towers.targetEnemies();
		SuperTower.drawAll();
	}
} 

SuperTower.drawAll = function() {
	Background.drawAll(SuperTower.ctxBackgroundImage, SuperTower.ctxUIStatic, SuperTower.ctxUIDynamic, 
	 SuperTower.stageList.stages[SuperTower.stage].backgroundImage, SuperTower.mouseX, 
	 SuperTower.mouseY);
	 SuperTower.stageList.draw(SuperTower.ctxStage, SuperTower.stage);
	 //draw enemies
	 SuperTower.enemies.drawAll(SuperTower.ctxEnemies, SuperTower.frame);
	 //draw bullets
	 SuperTower.bullets.drawAll(SuperTower.ctxBullets);
	 //draw towers
	 SuperTower.towers.drawAll(SuperTower.ctxTowers);
	 //draw explosions
	 SuperTower.explosions.drawAll(SuperTower.ctxExplosions);
	 SuperTower.frame++;	 
	 
}

SuperTower.drawDynamic = function(){
	Background.drawDynamic(SuperTower.ctxUIDynamic, SuperTower.mouseX, SuperTower.mouseY);
}

SuperTower.createStages = function(){
	SuperTower.stageList = new StageList();
}

//sets a new Stage
SuperTower.setStage = function(stage){
	//clear the old stage
	SuperTower.ctxStage.clearRect(0, 0, Background.WIDTH+300, Background.HEIGHT);
	
	//clear old towers
	SuperTower.towers.removeAll();
	
	//clear old enemies
	SuperTower.enemies.removeAll();
	
	SuperTower.stage = stage;
	

	//current stage
	var curStage = SuperTower.stageList.stages[stage];
	console.log(curStage);
	
	//display game speed
	console.log("Game Speed: " + SuperTower.gameSpeed);
	
	//set money and lives
	if(curStage.money != -1){
		SuperTower.cash = curStage.money;		
	}
	if(curStage.lives != -1){
		SuperTower.lives = curStage.lives;
	}
	
}

//sets a new Wave
SuperTower.setWave = function(wave){
	SuperTower.wave = wave;
}

//handles mouseDown
SuperTower.mouseDown = function(){
	SuperTower.towerMenu.mouseDown();
	SuperTower.towers.mouseDown();
}

//handles mouseUp
SuperTower.mouseUp = function(){
	SuperTower.towerMenu.mouseUp();

}

//handles mouseMove
SuperTower.mouseMove = function(){

}