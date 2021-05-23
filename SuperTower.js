/* SuperTower()... This acts as the main
 * game class for our SuperTower game.
 * All main game loops are here.  This is the only
 * class that should interact directly with the
 * html and css.
 */
//Create the class
function SuperTower() {}

/*Class fields */
//Canvas Layers
SuperTower.layerBackgroundImage;
SuperTower.layerStage;
SuperTower.layerEnemies;
SuperTower.layerUIStatic;
SuperTower.layerUIDynamic;

//Canvas Context
SuperTower.ctxBackgroundImage;
SuperTower.ctxStage;
SuperTower.ctxEnemies;
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

/* Initializes the game with initial states and calls the main game loop
 */
SuperTower.init = function () {
  //setup layers
  SuperTower.backgroundImage.src = "background1.png";
  SuperTower.layerBackgroundImage = document.getElementById(
    "layerBackgroundImage"
  );
  SuperTower.ctxBackgroundImage =
    SuperTower.layerBackgroundImage.getContext("2d");
  SuperTower.layerStage = document.getElementById("layerStage");
  SuperTower.ctxStage = SuperTower.layerStage.getContext("2d");
  SuperTower.layerEnemies = document.getElementById("layerEnemies");
  SuperTower.ctxEnemies = SuperTower.layerEnemies.getContext("2d");
  SuperTower.layerUIStatic = document.getElementById("layerUIStatic");
  SuperTower.ctxUIStatic = SuperTower.layerUIStatic.getContext("2d");
  SuperTower.layerUIDynamic = document.getElementById("layerUIDynamic");
  SuperTower.ctxUIDynamic = SuperTower.layerUIDynamic.getContext("2d");

  //add event listeners
  SuperTower.layerUIDynamic.addEventListener("mousedown", function (e) {
    var rect = SuperTower.layerUIDynamic.getBoundingClientRect();
    SuperTower.mouseX = e.clientX - rect.left;
    SuperTower.mouseY = e.clientY - rect.top;
    console.log(SuperTower.mouseX + "," + SuperTower.mouseY);
  });
  SuperTower.layerUIDynamic.addEventListener("mousemove", function (e) {
    var rect = SuperTower.layerUIDynamic.getBoundingClientRect();
    SuperTower.mouseX = e.clientX - rect.left;
    SuperTower.mouseY = e.clientY - rect.top;
  });

  //Set Frame
  SuperTower.frame = 0;

  //Create Stages
  SuperTower.createStages();

  SuperTower.stage = 0;
  SuperTower.wave = 0;

  //create Enemies
  SuperTower.enemies = new Enemies();
  //SuperTower.enemies.add("fast", SuperTower.frame, SuperTower.stageList.stages[0].paths[0],0);
  SuperTower.enemyWaves = new EnemyWaves(SuperTower.enemies, SuperTower.frame);

  //redraw everything
  SuperTower.drawAll();

  //main game loop
  setInterval(SuperTower.playGame, 20);
};

/*Main game loop, this should run multiple times each second*/
SuperTower.playGame = function () {
  SuperTower.enemyWaves.spawnEnemies(SuperTower.frame);
  SuperTower.drawAll();
};

SuperTower.drawAll = function () {
  Background.drawAll(
    SuperTower.ctxBackgroundImage,
    SuperTower.ctxUIStatic,
    SuperTower.ctxUIDynamic,
    SuperTower.stageList.stages[SuperTower.stage].backgroundImage,
    SuperTower.mouseX,
    SuperTower.mouseY
  );
  SuperTower.stageList.draw(SuperTower.ctxStage, SuperTower.stage);
  //draw enemies
  SuperTower.enemies.drawAll(SuperTower.ctxEnemies, SuperTower.frame);
  SuperTower.frame++;
};

SuperTower.drawDynamic = function () {
  Background.drawDynamic(
    SuperTower.ctxUIDynamic,
    SuperTower.mouseX,
    SuperTower.mouseY
  );
};

SuperTower.createStages = function () {
  SuperTower.stageList = new StageList();
};

//sets a new Stage
SuperTower.setStage = function (stage) {
  //clear the old stage
  SuperTower.ctxStage.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);

  SuperTower.stage = stage;
};

//sets a new Wave
SuperTower.setWave = function (wave) {
  SuperTower.wave = wave;
};
