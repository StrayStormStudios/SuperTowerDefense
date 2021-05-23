/*Defines the list of Stages (add new stages here)
 */
function StageList() {
  this.stages = new Array();
  this.addStage0();
  this.addStage1();
  this.addStage2();
  this.addStage3();
  this.addStage4();
  this.addStage5();
  this.addStage6();
  this.addStage7();
  this.addStage8();
  this.addStage9();
  this.addStage10();
  this.addStage11();
}

//adds stage 0 to the game
StageList.prototype.addStage0 = function () {
  //set up main variables
  var id = 0;
  var backgroundImage = new Image();
  backgroundImage.src = "background1.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(820, 170);
  points1[1] = new Point(140, 170);
  points1[2] = new Point(140, 300);
  points1[3] = new Point(820, 400);
  points1[4] = new Point(820, 500);
  points1[5] = new Point(92, 502);

  var width = 15.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = false;

  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 1 to the game
StageList.prototype.addStage1 = function () {
  //set up main variables
  var id = 1;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-1.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(30, 198);
  points1[1] = new Point(240, 198);
  points1[2] = new Point(240, 450);
  points1[3] = new Point(488, 450);
  points1[4] = new Point(488, 390);
  points1[5] = new Point(740, 390);
  points1[6] = new Point(740, 530);

  var width = 20.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = false;

  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 2 to the game
StageList.prototype.addStage2 = function () {
  //set up main variables
  var id = 2;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-2.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(740, 125);
  points1[1] = new Point(740, 198);
  points1[2] = new Point(488, 198);
  points1[3] = new Point(488, 300);
  points1[4] = new Point(290, 300);
  points1[5] = new Point(290, 355);
  points1[6] = new Point(390, 355);
  points1[7] = new Point(390, 490);
  points1[8] = new Point(198, 490);
  points1[9] = new Point(198, 540);

  var width = 13.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = true;

  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 3 to the game
StageList.prototype.addStage3 = function () {
  //set up main variables
  var id = 3;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-3.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(35, 295);
  points1[1] = new Point(220, 295);
  points1[2] = new Point(248, 325);
  points1[3] = new Point(270, 355);
  points1[4] = new Point(316, 360);
  points1[5] = new Point(368, 338);
  points1[6] = new Point(424, 322);
  points1[7] = new Point(460, 325);
  points1[8] = new Point(495, 340);
  points1[9] = new Point(517, 350);
  points1[10] = new Point(570, 363);
  points1[11] = new Point(588, 355);
  points1[12] = new Point(625, 335);
  points1[13] = new Point(638, 299);
  points1[14] = new Point(633, 255);
  points1[15] = new Point(595, 225);
  points1[16] = new Point(557, 218);
  points1[17] = new Point(520, 230);
  points1[18] = new Point(495, 254);
  points1[19] = new Point(485, 300);
  points1[20] = new Point(502, 338);
  points1[21] = new Point(528, 378);
  points1[22] = new Point(518, 420);
  points1[23] = new Point(500, 440);
  points1[24] = new Point(470, 455);
  points1[25] = new Point(434, 460);
  points1[26] = new Point(434, 535);

  var width = 10.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = true;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the second path
  var points2 = new Array();
  points2[0] = new Point(835, 288);
  points2[1] = new Point(645, 288);
  points2[2] = new Point(620, 340);
  points2[3] = new Point(570, 363);
  points2[4] = new Point(517, 350);
  points2[5] = new Point(528, 386);
  points2[6] = new Point(523, 411);
  points2[7] = new Point(508, 434);
  points2[8] = new Point(480, 450);
  points2[9] = new Point(460, 458);
  points2[10] = new Point(404, 460);
  points2[11] = new Point(362, 437);
  points2[12] = new Point(340, 411);
  points2[13] = new Point(336, 378);
  points2[14] = new Point(355, 347);
  points2[15] = new Point(366, 319);
  points2[16] = new Point(367, 276);
  points2[17] = new Point(335, 240);
  points2[18] = new Point(300, 232);
  points2[19] = new Point(265, 245);
  points2[20] = new Point(245, 264);
  points2[21] = new Point(238, 305);
  points2[22] = new Point(250, 338);
  points2[23] = new Point(285, 362);
  points2[24] = new Point(316, 360);
  points2[25] = new Point(355, 347);
  points2[26] = new Point(400, 325);
  points2[27] = new Point(445, 325);
  points2[28] = new Point(485, 330);
  points2[29] = new Point(517, 350);
  points2[30] = new Point(528, 386);
  points2[31] = new Point(523, 411);
  points2[32] = new Point(508, 434);
  points2[33] = new Point(480, 450);
  points2[34] = new Point(460, 458);
  points2[35] = new Point(434, 460);
  points2[36] = new Point(434, 535);

  stage.addPath(
    points2,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 4 to the game
StageList.prototype.addStage4 = function () {
  //set up main variables
  var id = 4;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-4.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(246, 533);
  points1[1] = new Point(226, 487);
  points1[2] = new Point(86, 495);
  points1[3] = new Point(108, 443);
  points1[4] = new Point(165, 412);
  points1[5] = new Point(335, 395);
  points1[6] = new Point(480, 395);
  points1[7] = new Point(550, 420);
  points1[8] = new Point(585, 420);
  points1[9] = new Point(710, 380);
  points1[10] = new Point(760, 410);
  points1[11] = new Point(837, 428);

  var width = 15.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = false;

  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 5 to the game
StageList.prototype.addStage5 = function () {
  //set up main variables
  var id = 5;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-5.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(130, 135);
  points1[1] = new Point(130, 240);
  points1[2] = new Point(315, 240);
  points1[3] = new Point(315, 363);
  points1[4] = new Point(435, 363);
  points1[5] = new Point(436, 340);
  points1[6] = new Point(455, 300);
  points1[7] = new Point(490, 272);
  points1[8] = new Point(527, 265);
  points1[9] = new Point(555, 265);
  points1[10] = new Point(598, 285);
  points1[11] = new Point(625, 320);
  points1[12] = new Point(635, 370);
  points1[13] = new Point(625, 410);
  points1[14] = new Point(598, 445);
  points1[15] = new Point(555, 460);
  points1[16] = new Point(527, 465);
  points1[17] = new Point(490, 455);
  points1[18] = new Point(461, 432);
  points1[19] = new Point(440, 398);
  points1[20] = new Point(435, 363);
  points1[21] = new Point(436, 340);
  points1[22] = new Point(455, 300);
  points1[23] = new Point(490, 272);
  points1[24] = new Point(527, 265);
  points1[25] = new Point(555, 265);
  points1[26] = new Point(598, 285);
  points1[27] = new Point(625, 320);
  points1[28] = new Point(635, 370);
  points1[29] = new Point(650, 370);
  points1[30] = new Point(650, 465);
  points1[31] = new Point(750, 465);
  points1[32] = new Point(750, 530);

  var width = 5.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = true;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 6 to the game
StageList.prototype.addStage6 = function () {
  //set up main variables
  var id = 6;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-6.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(180, 135);
  points1[1] = new Point(180, 265);
  points1[2] = new Point(280, 265);
  points1[3] = new Point(280, 365);
  points1[4] = new Point(430, 365);
  points1[5] = new Point(430, 530);

  var width = 30.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = true;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the second path
  var points2 = new Array();
  points2[0] = new Point(685, 135);
  points2[1] = new Point(685, 265);
  points2[2] = new Point(585, 265);
  points2[3] = new Point(585, 365);
  points2[4] = new Point(430, 365);
  points2[5] = new Point(430, 530);

  stage.addPath(
    points2,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 7 to the game
StageList.prototype.addStage7 = function () {
  //set up main variables
  var id = 7;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-7.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(830, 380);
  points1[1] = new Point(745, 380);
  points1[2] = new Point(695, 410);
  points1[3] = new Point(650, 405);
  points1[4] = new Point(600, 395);
  points1[5] = new Point(530, 420);
  points1[6] = new Point(420, 455);
  points1[7] = new Point(360, 460);
  points1[8] = new Point(250, 460);
  points1[9] = new Point(170, 395);
  points1[10] = new Point(143, 360);
  points1[11] = new Point(125, 290);
  points1[12] = new Point(155, 235);
  points1[13] = new Point(210, 200);
  points1[14] = new Point(300, 185);
  points1[15] = new Point(390, 195);
  points1[16] = new Point(460, 220);
  points1[17] = new Point(500, 250);
  points1[18] = new Point(510, 310);
  points1[19] = new Point(470, 355);
  points1[20] = new Point(430, 380);
  points1[21] = new Point(355, 398);
  points1[22] = new Point(275, 388);
  points1[23] = new Point(230, 365);
  points1[24] = new Point(200, 330);
  points1[25] = new Point(205, 280);
  points1[26] = new Point(250, 235);
  points1[27] = new Point(310, 230);
  points1[28] = new Point(370, 235);
  points1[29] = new Point(430, 275);
  points1[30] = new Point(435, 310);
  points1[31] = new Point(395, 348);
  points1[32] = new Point(340, 358);
  points1[33] = new Point(290, 350);
  points1[34] = new Point(260, 320);
  points1[35] = new Point(280, 280);
  points1[36] = new Point(325, 265);
  points1[37] = new Point(380, 285);
  points1[38] = new Point(365, 320);
  points1[39] = new Point(320, 310);

  var width = 12.0;

  var color = "#336600"; //007799
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#999999"; //cc3300  //0099bb
  var startHighlightColor = "#4d4d4d"; //992600  //33aaee
  var endColor = "#4d4d4d"; //802000  //004466
  var endHighlightColor = "#8c8c8c"; //ff4000  //006688
  var hide = false;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 8 to the game
StageList.prototype.addStage8 = function () {
  //set up main variables
  var id = 8;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-8.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(150, 125);
  points1[1] = new Point(140, 155);
  points1[2] = new Point(300, 255);
  points1[3] = new Point(315, 310);
  points1[4] = new Point(300, 355);
  points1[5] = new Point(170, 400);
  points1[6] = new Point(165, 435);
  points1[7] = new Point(220, 530);

  var width = 10.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = false;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the second path
  var points2 = new Array();
  points2[0] = new Point(630, 125);
  points2[1] = new Point(645, 240);
  points2[2] = new Point(625, 335);
  points2[3] = new Point(570, 320);
  points2[4] = new Point(540, 295);
  points2[5] = new Point(535, 410);
  points2[6] = new Point(675, 420);
  points2[7] = new Point(730, 455);
  points2[8] = new Point(750, 530);

  stage.addPath(
    points2,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 9 to the game
StageList.prototype.addStage9 = function () {
  //set up main variables
  var id = 9;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-9.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(35, 340);
  points1[1] = new Point(210, 380);
  points1[2] = new Point(400, 475);
  points1[3] = new Point(540, 380);
  points1[4] = new Point(615, 350);
  points1[5] = new Point(755, 320);
  points1[6] = new Point(830, 320);

  var width = 10.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = true;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  this.stages.push(stage);
};

//adds stage 10 to the game
StageList.prototype.addStage10 = function () {
  //set up main variables
  var id = 10;
  var backgroundImage = new Image();
  backgroundImage.src = "Stage1-10.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(45, 130);
  points1[1] = new Point(430, 325);

  var width = 10.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = true;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the second path
  var points2 = new Array();
  points2[0] = new Point(795, 130);
  points2[1] = new Point(430, 325);

  stage.addPath(
    points2,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the theird path
  var points3 = new Array();
  points3[0] = new Point(810, 530);
  points3[1] = new Point(430, 325);

  stage.addPath(
    points3,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the fourth path
  var points4 = new Array();
  points4[0] = new Point(45, 530);
  points4[1] = new Point(430, 325);

  stage.addPath(
    points4,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

//adds stage 11 to the game
StageList.prototype.addStage11 = function () {
  //set up main variables
  var id = 11;
  var backgroundImage = new Image();
  backgroundImage.src = "background1.png";
  var stage = new Stage(id, backgroundImage);

  //Create the first path
  var points1 = new Array();
  points1[0] = new Point(820, 320);
  points1[1] = new Point(140, 320);
  points1[2] = new Point(140, 150);
  points1[3] = new Point(820, 150);

  var width = 10.0;

  var color = "#007799";
  var highlightColor = "#0099bb";
  var shadowColor = "#003333";
  var startColor = "#0099bb";
  var startHighlightColor = "#33aaee";
  var endColor = "#004466";
  var endHighlightColor = "#006688";
  var hide = false;
  stage.addPath(
    points1,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );

  //create the second path
  var points2 = new Array();
  points2[0] = new Point(820, 320);
  points2[1] = new Point(140, 320);
  points2[2] = new Point(140, 500);
  points2[3] = new Point(820, 500);

  stage.addPath(
    points2,
    width,
    color,
    highlightColor,
    shadowColor,
    startColor,
    startHighlightColor,
    endColor,
    endHighlightColor,
    hide
  );
  this.stages.push(stage);
};

StageList.prototype.draw = function (ctx, stage) {
  this.stages[stage].draw(ctx);
};
