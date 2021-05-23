/*EnemyList --> Provides master functions that make enemies based on type, frame etc
 * and give them basic attributes.  This is going to be something you change a lot
 */
function EnemyList() {}

/*This function is the master function for creating an enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createEnemy = new (function (type, frame, path, distanceTravelled) {
  if (type == "basic") {
    return EnemyList.createBasicEnemy(type, frame, path, distanceTravelled);
  } else if (type == "fast") {
    return EnemyList.createFastEnemy(type, frame, path, distanceTravelled);
  }
  //armored enemy that is slow, and splits into basic enemies
  else if (type == "armored") {
    return EnemyList.createArmoredEnemy(type, frame, path, distanceTravelled);
  } else {
    return EnemyList.createBasicEnemy(type, frame, path, distanceTravelled);
  }
})();

/* Defines a Basic enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createBasicEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 100;
  var armor = 0;
  var money = 1;
  var speed = 0.8;
  var damage = 1;
  var color1 = "#cc0000"; //dark red
  var color2 = "#000000"; //black
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Easy enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createEasyEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 300;
  var armor = 50;
  var money = 2;
  var speed = 0.8;
  var damage = 2;
  var color1 = "#00cc00"; //dark green
  var color2 = "#000000"; //back
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Normal enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createNormalEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 500;
  var armor = 100;
  var money = 5;
  var speed = 1;
  var damage = 3;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Difficult enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createDifficultEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 700;
  var armor = 200;
  var money = 10;
  var speed = 1;
  var damage = 4;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Hard enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createHardEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 900;
  var armor = 300;
  var money = 15;
  var speed = 2;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Extreme enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createExtremeEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 1500;
  var armor = 450;
  var money = 35;
  var speed = 3;
  var damage = 8;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Fast enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createFastEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 200;
  var armor = 0;
  var money = 2;
  var speed = 2.5;
  var damage = 1;
  var color1 = "#005500"; //dark green
  var color2 = "#000000"; //black
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Athleat enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createAthleatEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 400;
  var armor = 100;
  var money = 5;
  var speed = 5;
  var damage = 5;
  var color1 = "#00cc00"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a shark enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createLoudEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 600;
  var armor = 100;
  var money = 10;
  var speed = 10;
  var damage = 10;
  var color1 = "#00cc00"; //dark green
  var color2 = "#000000"; //back
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Lighting enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createLightingEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 800;
  var armor = 0;
  var money = 25;
  var speed = 20;
  var damage = 25;
  var color1 = "#00cc00"; //dark green
  var color2 = "#000000"; //back
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Flash enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createFlashEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 1000;
  var armor = 200;
  var money = 30;
  var speed = 45;
  var damage = 45;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Light enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createLightEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 1500;
  var armor = 200;
  var money = 50;
  var speed = 65;
  var damage = 50;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Armored enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createArmoredEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 350;
  var armor = 500;
  var money = 10;
  var speed = 2.5;
  var damage = 10;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");
  deathsplit.push("basic");
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Shielded enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createSheildedEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 550;
  var armor = 600;
  var money = 25;
  var speed = 2;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Barriered enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createBarrieredEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 700;
  var armor = 700;
  var money = 35;
  var speed = 1.5;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Walled enemy 
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createWalledEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 900;
  var armor = 800;
  var money = 40;
  var speed = 1.5;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a tank enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createTankEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 1200;
  var armor = 1150;
  var money = 55;
  var speed = 1;
  var damage = 15;
  var color1 = "#00cc00"; //dark green
  var color2 = "#000000"; //back
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("armored");
  deathsplit.push("armored");
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Slow enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createSlowEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 600;
  var armor = 200;
  var money = 10;
  var speed = 3;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Sleepy enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createSleepyEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 600;
  var armor = 200;
  var money = 10;
  var speed = 3;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();

/* Defines a Frozen enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createFrozenEnemy = new (function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 600;
  var armor = 200;
  var money = 10;
  var speed = 3;
  var damage = 5;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathsplit.push("basic");
  deathsplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
})();
