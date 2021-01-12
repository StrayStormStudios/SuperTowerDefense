/*Defines the list of Stages (add new stages here)
*/
function StageList(){
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
	this.addStage12();
}

//adds stage 0 to the game
StageList.prototype.addStage0 = function(){
	//set up main variables
	var id = 0;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/background1.png";
	var money = 1000;
	var lives = 25;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(820, 170);
	points1[1] = new Point(140, 170);
	points1[2] = new Point(140, 300);
	points1[3] = new Point(820, 400);
	points1[4] = new Point(820, 500);
	points1[5] = new Point(92,502);
	
	var width = 15.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 1 to the game -- grass medo
StageList.prototype.addStage1 = function(){
	//set up main variables
	var id = 1;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-1.png";
	var money = 150;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(30, 208);
	points1[1] = new Point(240, 208);
	points1[2] = new Point(240, 460);
	points1[3] = new Point(495, 460);
	points1[4] = new Point(495, 400);
	points1[5] = new Point(740, 400);
	points1[6] = new Point(740, 540);
	
	var width = 20.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 2 to the game -- wood bridge
StageList.prototype.addStage2 = function(){
	//set up main variables
	var id = 2;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-2.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(740, 135);
	points1[1] = new Point(740, 208);
	points1[2] = new Point(488, 208);
	points1[3] = new Point(488, 310);
	points1[4] = new Point(290, 310);
	points1[5] = new Point(290, 365);
	points1[6] = new Point(390, 365);
	points1[7] = new Point(390, 500);
	points1[8] = new Point(198, 500);
	points1[9] = new Point(198, 550);
	
	var width = 12.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = true;

	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 3 to the game -- mouce loop-d-loop
StageList.prototype.addStage3 = function(){
	//set up main variables
	var id = 3;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-3.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(35, 310);
	points1[1] = new Point(220, 310);
	points1[2] = new Point(248, 335);
	points1[3] = new Point(270, 365);
	points1[4] = new Point(316, 370);
	points1[5] = new Point(368, 348);
	points1[6] = new Point(424, 332);
	points1[7] = new Point(460, 325);
	points1[8] = new Point(495, 350);
	points1[9] = new Point(517, 360);
	points1[10] = new Point(570, 373);
	points1[11] = new Point(588, 365);
	points1[12] = new Point(625, 345);
	points1[13] = new Point(638, 309);
	points1[14] = new Point(633, 265);
	points1[15] = new Point(595, 235);
	points1[16] = new Point(557, 228);
	points1[17] = new Point(520, 240);
	points1[18] = new Point(495, 264);
	points1[19] = new Point(485, 310);
	points1[20] = new Point(502, 348);
	points1[21] = new Point(528, 388);
	points1[22] = new Point(518, 430);
	points1[23] = new Point(500, 450);
	points1[24] = new Point(470, 465);
	points1[25] = new Point(434, 470);
	points1[26] = new Point(434, 545);
	
	var width = 13.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the second path
	var points2 = new Array();
	points2[0] = new Point(835, 298);
	points2[1] = new Point(645, 298);
	points2[2] = new Point(620, 350);
	points2[3] = new Point(570, 373);
	points2[4] = new Point(517, 360);
	points2[5] = new Point(528, 396);
	points2[6] = new Point(523, 421);
	points2[7] = new Point(508, 444);
	points2[8] = new Point(480, 460);
	points2[9] = new Point(460, 468);
	points2[10] = new Point(404, 470);
	points2[11] = new Point(362, 447);
	points2[12] = new Point(340, 421);
	points2[13] = new Point(336, 388);
	points2[14] = new Point(355, 357);
	points2[15] = new Point(366, 329);
	points2[16] = new Point(367, 286);
	points2[17] = new Point(335, 250);
	points2[18] = new Point(300, 242);
	points2[19] = new Point(265, 255);
	points2[20] = new Point(245, 274);
	points2[21] = new Point(238, 315);
	points2[22] = new Point(250, 348);
	points2[23] = new Point(285, 372)
	points2[24] = new Point(316, 370);
	points2[25] = new Point(355, 357);
	points2[26] = new Point(400, 335);
	points2[27] = new Point(445, 325);
	points2[28] = new Point(485, 340);
	points2[29] = new Point(517, 360);
	points2[30] = new Point(528, 396);
	points2[31] = new Point(523, 421);
	points2[32] = new Point(508, 444);
	points2[33] = new Point(480, 460);
	points2[34] = new Point(460, 468);
	points2[35] = new Point(434, 470);
	points2[36] = new Point(434, 545);
	
	stage.addPath(points2, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 4 to the game -- IDK
StageList.prototype.addStage4 = function(){
	//set up main variables
	var id = 4;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-4.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(246, 543);
	points1[1] = new Point(226, 497);
	points1[2] = new Point(86, 505);
	points1[3] = new Point(108, 453);
	points1[4] = new Point(165, 422);
	points1[5] = new Point(335, 405);
	points1[6] = new Point(480, 405);
	points1[7] = new Point(550, 430);
	points1[8] = new Point(585, 430)
	points1[9] = new Point(710, 390);
	points1[10] = new Point(760, 420);
	points1[11] = new Point(837, 438);
	
	var width = 15.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 5 to the game -- stairs
StageList.prototype.addStage5 = function(){
	//set up main variables
	var id = 5;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-5.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(130, 145);
	points1[1] = new Point(130, 252);
	points1[2] = new Point(315, 252);
	points1[3] = new Point(315, 373);
	points1[4] = new Point(435, 373);
	points1[5] = new Point(436, 350);
	points1[6] = new Point(455, 310);
	points1[7] = new Point(490, 282);
	points1[8] = new Point(527, 275);
	points1[9] = new Point(555, 275);
	points1[10] = new Point(598, 295);
	points1[11] = new Point(625, 330);
	points1[12] = new Point(635, 380);
	points1[13] = new Point(625, 420);
	points1[14] = new Point(598, 455);
	points1[15] = new Point(555, 470);
	points1[16] = new Point(527, 475);
	points1[17] = new Point(490, 465);
	points1[18] = new Point(461, 442);
	points1[19] = new Point(440, 408);
	points1[20] = new Point(435, 373);
	points1[21] = new Point(436, 350);
	points1[22] = new Point(455, 310);
	points1[23] = new Point(490, 282);
	points1[24] = new Point(527, 275);
	points1[25] = new Point(555, 275);
	points1[26] = new Point(598, 295);
	points1[27] = new Point(625, 330);
	points1[28] = new Point(635, 380);
	points1[29] = new Point(650, 380);
	points1[30] = new Point(650, 475);
	points1[31] = new Point(750, 475);
	points1[32] = new Point(750, 550);
	
	var width = 8.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 6 to the game -- lava
StageList.prototype.addStage6 = function(){
	//set up main variables
	var id = 6;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-6.png";
	var money = 450;
	var lives = 85;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(180, 140);
	points1[1] = new Point(180, 270);
	points1[2] = new Point(280, 270);
	points1[3] = new Point(280, 370);
	points1[4] = new Point(430, 370);
	points1[5] = new Point(430, 535);
	
	var width = 30.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the second path
	var points2 = new Array();
	points2[0] = new Point(685, 140);
	points2[1] = new Point(685, 270);
	points2[2] = new Point(585, 270);
	points2[3] = new Point(585, 370);
	points2[4] = new Point(430, 370);
	points2[5] = new Point(430, 535);
		
	stage.addPath(points2, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 7 to the game -- snail
StageList.prototype.addStage7 = function(){
	//set up main variables
	var id = 7;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-7.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(830, 390);
	points1[1] = new Point(745, 390);
	points1[2] = new Point(695, 420);
	points1[3] = new Point(650, 415);
	points1[4] = new Point(600, 405);
	points1[5] = new Point(530, 410);
	points1[6] = new Point(420, 465);
	points1[7] = new Point(360, 470);
	points1[8] = new Point(250, 470);
	points1[9] = new Point(170, 405);
	points1[10] = new Point(143, 370);
	points1[11] = new Point(125, 300);
	points1[12] = new Point(155, 245);
	points1[13] = new Point(210, 210);
	points1[14] = new Point(300, 195);
	points1[15] = new Point(390, 205);
	points1[16] = new Point(460, 230);
	points1[17] = new Point(500, 260);
	points1[18] = new Point(510, 320);
	points1[19] = new Point(470, 365);
	points1[20] = new Point(430, 390);
	points1[21] = new Point(355, 408);
	points1[22] = new Point(275, 398);
	points1[23] = new Point(230, 375);
	points1[24] = new Point(200, 340);
	points1[25] = new Point(205, 290);
	points1[26] = new Point(250, 245);
	points1[27] = new Point(310, 240);
	points1[28] = new Point(370, 245);
	points1[29] = new Point(430, 285);
	points1[30] = new Point(435, 320);
	points1[31] = new Point(395, 358);
	points1[32] = new Point(340, 368);
	points1[33] = new Point(290, 360);
	points1[34] = new Point(260, 330);
	points1[35] = new Point(280, 290);
	points1[36] = new Point(325, 275);
	points1[37] = new Point(380, 295);
	points1[38] = new Point(365, 330);
	points1[39] = new Point(320, 320);
	
	var width = 11.0;
	
	var color = "#336600"; //007799
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#999999"; //cc3300  //0099bb
	var startHighlightColor = "#4d4d4d"; //992600  //33aaee
	var endColor = "#4d4d4d"; //802000  //004466
	var endHighlightColor = "#8c8c8c"; //ff4000  //006688
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 8 to the game -- dual
StageList.prototype.addStage8 = function(){
	//set up main variables
	var id = 8;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-8.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(150, 135);
	points1[1] = new Point(140, 165);
	points1[2] = new Point(300, 265);
	points1[3] = new Point(315, 320);
	points1[4] = new Point(300, 360);
	points1[5] = new Point(170, 410);
	points1[6] = new Point(165, 445);
	points1[7] = new Point(220, 540);
	
	var width = 15.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the second path
	var points2 = new Array();
	points2[0] = new Point(630, 135);
	points2[1] = new Point(645, 250);
	points2[2] = new Point(620, 355);
	points2[3] = new Point(545, 305);
	points2[4] = new Point(535, 420);
	points2[5] = new Point(675, 430);
	points2[6] = new Point(730, 465);
	points2[7] = new Point(750, 540);
	
	stage.addPath(points2, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 9 to the game -- desert
StageList.prototype.addStage9 = function(){
	//set up main variables
	var id = 9;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-9.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(35, 350);
	points1[1] = new Point(210, 390);
	points1[2] = new Point(400, 485);
	points1[3] = new Point(535, 385);
	points1[4] = new Point(615, 360);
	points1[5] = new Point(755, 330);
	points1[6] = new Point(830, 330);
	
	var width = 15.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = true;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 10 to the game -- X
StageList.prototype.addStage10 = function(){
	//set up main variables
	var id = 10;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/stage1-10.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(45, 140);
	points1[1] = new Point(430, 335);
	
	var width = 15.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = true;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the second path
	var points2 = new Array();
	points2[0] = new Point(795, 140);
	points2[1] = new Point(430, 335);
		
	stage.addPath(points2, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the theird path
	var points3 = new Array();
	points3[0] = new Point(810, 540);
	points3[1] = new Point(430, 335);
		
	stage.addPath(points3, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the fourth path
	var points4 = new Array();
	points4[0] = new Point(45, 540);
	points4[1] = new Point(430, 335);
		
	stage.addPath(points4, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 11 to the game -- space
StageList.prototype.addStage11 = function(){
	//set up main variables
	var id = 11;
	var backgroundImage = new Image();
	backgroundImage.src = "Images/background1.png";
	var money = 100;
	var lives = 50;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(820, 330);
	points1[1] = new Point(140, 330);
	points1[2] = new Point(140, 160);
	points1[3] = new Point(820, 160);
	
	var width = 10.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = false;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	//create the second path
	var points2 = new Array();
	points2[0] = new Point(820, 330);
	points2[1] = new Point(140, 330);
	points2[2] = new Point(140, 510);
	points2[3] = new Point(820, 510);
		
	stage.addPath(points2, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

//adds stage 12 to the game
StageList.prototype.addStage12 = function(){
	//set up main variables
	var id = 12;
	var backgroundImage = new Image();
	backgroundImage.src = "gameover.png";
	var money = 0;
	var lives = 1;
	var stage = new Stage(id, backgroundImage, money, lives);
	
	//Create the first path
	var points1 = new Array();
	points1[0] = new Point(820, 170);
	points1[1] = new Point(140, 170);
	points1[2] = new Point(140, 300);
	points1[3] = new Point(820, 400);
	points1[4] = new Point(820, 500);
	points1[5] = new Point(92,502);
	
	var width = 15.0;
	
	var color = "#007799";
	var highlightColor = "#0099bb";
	var shadowColor = "#003333";
	var startColor = "#0099bb";
	var startHighlightColor = "#33aaee";
	var endColor = "#004466";
	var endHighlightColor = "#006688";
	var hide = true;
	
	stage.addPath(points1, width, color, highlightColor, shadowColor, 
	startColor, startHighlightColor, endColor, endHighlightColor, hide);
	
	this.stages.push(stage);
}

StageList.prototype.draw = function(ctx, stage){
	this.stages[stage].draw(ctx);
}