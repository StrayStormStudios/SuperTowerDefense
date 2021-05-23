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
SuperTower.layerUIStatic;
SuperTower.layerUIDynamic;

//Canvas Context
SuperTower.ctxBackgroundImage;
SuperTower.ctxStage;
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

  //Create Stages
  SuperTower.createStages();

  SuperTower.stage = 7;
  SuperTower.wave = 0;

  //redraw everything
  SuperTower.drawAll();

  //main game loop
  setInterval(SuperTower.playGame, 20);
};

/*Main game loop, this should run multiple times each second*/
SuperTower.playGame = function () {
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
