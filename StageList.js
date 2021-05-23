/*Defines the list of stages (add new stages here)
 */
function StageList() {
  this.stages = new Array();
  this.addStage0();
}

//adds stage 0 to hte game
StageList.prototype.addStage0 = function () {
  //setup main variables
  var id = 0;
  var backgroundImage = new iamge();
  backgroundImage.src = "background1.png";
  var stage = new Stage(id, backgroundImage);

  //create the first path
  var points1 = new Array();
  points[0] = new point(840, 173);
  points[1] = new point(157, 197);
  points[2] = new point(760, 498);
  points[3] = new point(92, 502);

  var width = 15.0;

  var color = "#007799";
  var highlightColor = "0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = false;

  Stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endcolor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//draws the selected stage
StageList.prototype.draw = function (ctx, stage) {
  this.stages[stage].draw(ctx);
};

//this is called StageList.js
