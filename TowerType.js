/*Handles create for a variety of tower types*/
function TowerType() {}

/*constructs a type of tower at a given location and returns the object
 * @param {Point} position the tower's x and y position
 * @param {Number} rotation the tower's rotation in radians
 * @param {Number} type Tower type(1-6)
 */
TowerType.createTower = function (position, rotation, type) {
  if (type == 1) {
    return TowerType.createTower1(position, rotation);
  } else if (type == 2) {
    return TowerType.createTower2(position, rotation);
  } else if (type == 3) {
    return TowerType.createTower3(position, rotation);
  } else if (type == 4) {
    return TowerType.createTower4(position, rotation);
  } else if (type == 5) {
    return TowerType.createTower5(position, rotation);
  } else if (type == 6) {
    return TowerType.createTower6(position, rotation);
  } else {
    console.log("Bad tower type (should be 1-6): value was " + type);
  }
};

/*constructs a basic Cannon tower (tower 1) at a given location and returns the object
 * 	cannon towers have a large initial damage and then small explosion damage
 * @param {Point} position the tower's x and y position
 * @param {Number} rotation the tower's rotation in radians
 * @return {Tower} returns the tower
 */
TowerType.createTower1 = function (position, rotation, upgraded) {
  //basic range, damage and speed
  var range = 80;
  var damage = 25;
  var armorDamage = 50;
  var framesPerShot = 25;
  var bulletSpeed = 4; //ideally range should be divisible by this value
  var numberShots = 1;

  //does this tower fire exploding bullets?
  var explodes = true;
  var explosionRadius = 20;
  var explosionDamage = 20;
  var explosionArmorDamage = 15;

  //tower upgrades
  var upgradesOne = new Array();
  upgradesOne.push(new TowerUpgrade("damage", "Damage+", 25, 100));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage+", 50, 100));
  upgradesOne.push(new TowerUpgrade("damage", "Damage++", 100, 200));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage++", 150, 200));
  var upgradesTwo = new Array();
  upgradesTwo.push(new TowerUpgrade("explosionRadius", "Blast Radius+", 50, 5));
  upgradesTwo.push(
    new TowerUpgrade("explosionDamage", "Blast Damage+", 75, 25)
  );
  upgradesTwo.push(
    new TowerUpgrade("explosionRadius", "Blast Radius++", 100, 5)
  );
  upgradesTwo.push(
    new TowerUpgrade("explosionDamage", "Blast Damage++", 125, 50)
  );

  //does this tower buff other towers?
  var buffRadius = 0;
  var buffDamage = 0;
  var buffArmorDamage = 0;
  var buffRange = 0;
  var buffFramesPerShot = 0;

  //drawing information
  var drawType = 1; //1-6
  var color1 = "#aaaaaa";
  var color2 = "#444455";
  var color3 = "#555566";
  var color4 = "#000000";
  var highlightColor = "#00ff00";

  //bullet drawing Information
  var bulletDrawingType = 1; //1 <-- circle, 2 <- square, 3 <-- rectangle, 4 <-- long rectangle (laser)
  var bulletRadius = 4;
  var bulletColor = "#222255";

  //explosion drawing Information
  var explosionColor = "#ffcc00";
  var explosionInitialRadius = 2;
  var explosionGrowthFrames = 15;
  var explosionInitialAlpha = 0.9;
  var explosionFullSizeAlpha = 0.6;
  var explosionFadeFrames = 5;
  var explosionFinalAlpha = 0.2;

  //id stuff
  var name = "Cannon";
  var cost = 25;

  //create the new tower and return it
  var tower = new Tower(
    position,
    rotation,
    range,
    damage,
    armorDamage,
    framesPerShot,
    bulletSpeed,
    numberShots,
    explodes,
    explosionRadius,
    explosionDamage,
    explosionArmorDamage,
    upgradesOne,
    upgradesTwo,
    buffRadius,
    buffDamage,
    buffArmorDamage,
    buffRange,
    buffFramesPerShot,
    drawType,
    color1,
    color2,
    color3,
    color4,
    highlightColor,
    bulletDrawingType,
    bulletRadius,
    bulletColor,
    explosionColor,
    explosionInitialRadius,
    explosionGrowthFrames,
    explosionInitialAlpha,
    explosionFullSizeAlpha,
    explosionFadeFrames,
    explosionFinalAlpha,
    name,
    cost
  );

  return tower;
};

/*constructs a basic Machine Gun tower (tower 2) at a given location and rerturns the object
 *	machine gun towers are single target and small projectiles very fast
 * @param {Point} position the tower's x and y position
 * @param {Numebr} rotation the tower's rotation in radians
 * @return {Tower} returns the tower
 */
TowerType.createTower2 = function (position, rotation) {
  //basic range, damge and speed
  var range = 60;
  var damage = 75;
  var armorDamage = 5;
  var framesPerShot = 10; //lower the number the faster the bullet
  var bulletSpeed = 5; //ideally range should be divisible by this value
  var numberShots = 2;

  //does this tower fire exploding bullets?
  var explodes = false;
  var explosionRadius = 0;
  var explosionDamage = 0;
  var explosionArmorDamage = 0;

  //tower upgrades
  var upgradesOne = new Array();
  upgradesOne.push(new TowerUpgrade("damage", "Damage+", 50, 50));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage+", 100, 100));
  upgradesOne.push(new TowerUpgrade("damage", "Damage++", 150, 150));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage++", 200, 200));
  var upgradesTwo = new Array();
  upgradesTwo.push(new TowerUpgrade("range", "Range+", 100, 25));
  upgradesTwo.push(new TowerUpgrade("framesPerShot", "Speed+", 150, 2));
  upgradesTwo.push(new TowerUpgrade("range", "Range++", 200, 10));
  upgradesTwo.push(new TowerUpgrade("framesPerShot", "Speed++", 250, 4));

  //does this tower buff other towers?
  var buffRadius = 0;
  var buffDamage = 0;
  var buffArmorDamage = 0;
  var buffRange = 0;
  var buffFramesPerShot = 0;

  //drawing Infromation
  var drawType = 2; //1-6
  var color1 = "#800080";
  var color2 = "#666666";
  var color3 = "#0000ff";
  var color4 = "#000000";
  var highlightColor = "#00ff00";

  //bullet drawing Information
  var bulletDrawingType = 3; //1 <-- circle, 2 <- square, 3 <- rectangle,4 <-- long rectangle (laser)
  var bulletRadius = 2;
  var bulletColor = "#712d2d";

  //explosion drawing Information
  var explosionColor = "#ffffff";
  var explosionInitialRadius = 0;
  var explosionGrowthFrames = 0;
  var explosionInitialAlpha = 0;
  var explosionFullSizeAlpha = 0;
  var explosionFadeFrames = 0;
  var explosionFinalAlpha = 0;

  //id stuff
  var name = "Machine";
  var cost = 75;

  //create the new tower and return it
  var tower = new Tower(
    position,
    rotation,
    range,
    damage,
    armorDamage,
    framesPerShot,
    bulletSpeed,
    numberShots,
    explodes,
    explosionRadius,
    explosionDamage,
    explosionArmorDamage,
    upgradesOne,
    upgradesTwo,
    buffRadius,
    buffDamage,
    buffArmorDamage,
    buffRange,
    buffFramesPerShot,
    drawType,
    color1,
    color2,
    color3,
    color4,
    highlightColor,
    bulletDrawingType,
    bulletRadius,
    bulletColor,
    explosionColor,
    explosionInitialRadius,
    explosionGrowthFrames,
    explosionInitialAlpha,
    explosionFullSizeAlpha,
    explosionFadeFrames,
    explosionFinalAlpha,
    name,
    cost
  );

  return tower;
};

/*constructs a basic Support tower (tower 3) at a given location and rerturns the object
 *	Support tower doesn't fir, but buffs other towers damage and range
 * @param {Point} position the tower's x and y position
 * @param {Numebr} rotation the tower's rotation in radians
 * @return {Tower} returns the tower
 */
TowerType.createTower3 = function (position, rotation) {
  //basic range, damge and speed
  var range = 0;
  var damage = 0;
  var armorDamage = 0;
  var framesPerShot = -1; //lower the number the faster the bullet, -1 doesn't shoot
  var bulletSpeed = 0; //ideally range should be divisible by this value
  var numberShots = 0;

  //does this tower fire exploding bullets?
  var explodes = false;
  var explosionRadius = 0;
  var explosionDamage = 0;
  var explosionArmorDamage = 0;

  //tower upgrades
  var upgradesOne = new Array();
  upgradesOne.push(new TowerUpgrade("buffDamage", " Buff Damage+", 200, 50));
  upgradesOne.push(
    new TowerUpgrade("buffArmorDamage", "Buff A. Dam.+", 300, 50)
  );
  upgradesOne.push(new TowerUpgrade("buffDamage", "Buff Damage++", 500, 100));
  upgradesOne.push(
    new TowerUpgrade("buffArmorDamage", "Buff A. Dam.++", 750, 100)
  );
  var upgradesTwo = new Array();
  upgradesTwo.push(new TowerUpgrade("buffRadius", "Buff Radius+", 200, 50));
  upgradesTwo.push(new TowerUpgrade("buffRange", "Buff Range+", 300, 20));
  upgradesTwo.push(new TowerUpgrade("buffRadius", "Buff Radius++", 500, 50));
  upgradesTwo.push(new TowerUpgrade("buffRange", "Buff Range++", 750, 20));

  //does this tower buff other towers?
  var buffRadius = 100;
  var buffDamage = 50;
  var buffArmorDamage = 50;
  var buffRange = 100;
  var buffFramesPerShot = 0;

  //drawing Infromation
  var drawType = 3; //1-6
  var color1 = "#aaaaaa";
  var color2 = "#000000";
  var color3 = "#000000";
  var color4 = "#000000";
  var highlightColor = "#00ff00";

  //bullet drawing Information
  var bulletDrawingType = 1; //1 <-- circle, 2 <- square, 3 <- rectangle,4 <-- long rectangle (laser)
  var bulletRadius = 0;
  var bulletColor = "#000000";

  //explosion drawing Information
  var explosionColor = "#ffffff";
  var explosionInitialRadius = 0;
  var explosionGrowthFrames = 0;
  var explosionInitialAlpha = 0;
  var explosionFullSizeAlpha = 0;
  var explosionFadeFrames = 0;
  var explosionFinalAlpha = 0;

  //id stuff
  var name = "Support";
  var cost = 200;
  var framesPerMoney = 100; //The lower it is the faster it will make money

  //create the new tower and return it
  var tower = new Tower(
    position,
    rotation,
    range,
    damage,
    armorDamage,
    framesPerShot,
    bulletSpeed,
    numberShots,
    explodes,
    explosionRadius,
    explosionDamage,
    explosionArmorDamage,
    upgradesOne,
    upgradesTwo,
    buffRadius,
    buffDamage,
    buffArmorDamage,
    buffRange,
    buffFramesPerShot,
    drawType,
    color1,
    color2,
    color3,
    color4,
    highlightColor,
    bulletDrawingType,
    bulletRadius,
    bulletColor,
    explosionColor,
    explosionInitialRadius,
    explosionGrowthFrames,
    explosionInitialAlpha,
    explosionFullSizeAlpha,
    explosionFadeFrames,
    explosionFinalAlpha,
    name,
    cost,
    framesPerMoney
  );

  return tower;
};

/*constructs a basic Spinner tower (tower 4) at a given location and returns the object
 *	Spinner towers are multy targeted and small projectiles very fast
 * @param {Point} position the tower's x and y position
 * @param {Number} rotation the tower's rotation in radians
 * @return {Tower} returns the tower
 */
TowerType.createTower4 = function (position, rotation) {
  //basic range, damage and speed
  var range = 120;
  var damage = 50;
  var armorDamage = 25;
  var framesPerShot = 16; //lower the number the faster the bullet
  var bulletSpeed = 4; //ideally range should be divisible by this value
  var numberShots = 35;

  //does this tower fire exploding bullets?
  var explodes = true;
  var explosionRadius = 15;
  var explosionDamage = 15;
  var explosionArmorDamage = 10;

  //tower upgrades
  var upgradesOne = new Array();
  upgradesOne.push(new TowerUpgrade("damage", "Damage+", 50, 100));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage+", 100, 100));
  upgradesOne.push(new TowerUpgrade("damage", "Damage++", 150, 200));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage++", 200, 200));
  var upgradesTwo = new Array();
  upgradesTwo.push(new TowerUpgrade("range", "Range+", 100, 25));
  upgradesTwo.push(new TowerUpgrade("framesPerShot", "Speed+", 150, 2));
  upgradesTwo.push(new TowerUpgrade("range", "Range++", 200, 25));
  upgradesTwo.push(
    new TowerUpgrade("explosionRadius", "Explosion Rdius++", 250, 5)
  );

  //does this tower buff other towers?
  var buffRadius = 0;
  var buffDamage = 0;
  var buffArmorDamage = 0;
  var buffRange = 0;
  var buffFramesPerShot = 0;

  //drawing information
  var drawType = 4; //1-6
  var color1 = "#00ffff";
  var color2 = "#666666";
  var color3 = "#cc0000";
  var color4 = "#999999";
  var highlightColor = "#00ff00";

  //bullet drawing Information
  var bulletDrawingType = 1; //1 <-- circle, 2 <- square, 3 <-- rectangle, 4 <-- long rectangle (laser)
  var bulletRadius = 3;
  var bulletColor = "#552222";

  //explosion drawing Information
  var explosionColor = color3;
  var explosionInitialRadius = 2;
  var explosionGrowthFrames = 3;
  var explosionInitialAlpha = 0.9;
  var explosionFullSizeAlpha = 0.5;
  var explosionFadeFrames = 10;
  var explosionFinalAlpha = 0.2;

  //id stuff
  var name = "Spinner";
  var cost = 250;

  //create the new tower and return it
  var tower = new Tower(
    position,
    rotation,
    range,
    damage,
    armorDamage,
    framesPerShot,
    bulletSpeed,
    numberShots,
    explodes,
    explosionRadius,
    explosionDamage,
    explosionArmorDamage,
    upgradesOne,
    upgradesTwo,
    buffRadius,
    buffDamage,
    buffArmorDamage,
    buffRange,
    buffFramesPerShot,
    drawType,
    color1,
    color2,
    color3,
    color4,
    highlightColor,
    bulletDrawingType,
    bulletRadius,
    bulletColor,
    explosionColor,
    explosionInitialRadius,
    explosionGrowthFrames,
    explosionInitialAlpha,
    explosionFullSizeAlpha,
    explosionFadeFrames,
    explosionFinalAlpha,
    name,
    cost
  );

  return tower;
};

/*constructs a basic Turret tower (tower 5) at a given location and returns the object
 *	Turret towers are single target and medium projectiles very fast
 * @param {Point} position the tower's x and y position
 * @param {Number} rotation the tower's rotation in radians
 * @return {Tower} returns the tower
 */
TowerType.createTower5 = function (position, rotation) {
  //basic range, damage and speed
  var range = 100;
  var damage = 115;
  var armorDamage = 20;
  var framesPerShot = 5; //-1 means it doesn't shoot
  var bulletSpeed = 8; //ideally range should be divisible by this value
  var numberShots = 3;

  //does this tower fire exploding bullets?
  var explodes = true;
  var explosionRadius = 0;
  var explosionDamage = 25;
  var explosionArmorDamage = 20;

  //tower upgrades
  var upgradesOne = new Array();
  upgradesOne.push(new TowerUpgrade("damage", "Damage+", 50, 120));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage+", 100, 25));
  upgradesOne.push(new TowerUpgrade("damage", "Damage++", 150, 100));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage++", 200, 50));
  var upgradesTwo = new Array();
  upgradesTwo.push(new TowerUpgrade("range", "Range+", 100, 25));
  upgradesTwo.push(new TowerUpgrade("framesPerShot", "Speed+", 150, 2));
  upgradesTwo.push(new TowerUpgrade("range", "Range++", 200, 25));
  upgradesTwo.push(
    new TowerUpgrade("explosionRadius", "exploding Bullets++", 250, 20)
  );

  //does this tower buff other towers?
  var buffRadius = 0;
  var buffDamage = 0;
  var buffArmorDamage = 0;
  var buffRange = 0;
  var buffFramesPerShot = 0;

  //drawing information
  var drawType = 5; //1-6
  var color1 = "#00008b";
  var color2 = "#cc0000";
  var color3 = "#666666";
  var color4 = "#000000";
  var highlightColor = "#00ff00";

  //bullet drawing Information
  var bulletDrawingType = 3; //1 <-- circle, 2 <- square, 3 <-- rectangle, 4 <-- long rectangle (laser)
  var bulletRadius = 3;
  var bulletColor = "#552222";

  //explosion drawing Information
  var explosionColor = color1;
  var explosionInitialRadius = 2;
  var explosionGrowthFrames = 2;
  var explosionInitialAlpha = 0.9;
  var explosionFullSizeAlpha = 0.5;
  var explosionFadeFrames = 5;
  var explosionFinalAlpha = 0.2;

  //id stuff
  var name = "Turret";
  var cost = 400;

  //create the new tower and return it
  var tower = new Tower(
    position,
    rotation,
    range,
    damage,
    armorDamage,
    framesPerShot,
    bulletSpeed,
    numberShots,
    explodes,
    explosionRadius,
    explosionDamage,
    explosionArmorDamage,
    upgradesOne,
    upgradesTwo,
    buffRadius,
    buffDamage,
    buffArmorDamage,
    buffRange,
    buffFramesPerShot,
    drawType,
    color1,
    color2,
    color3,
    color4,
    highlightColor,
    bulletDrawingType,
    bulletRadius,
    bulletColor,
    explosionColor,
    explosionInitialRadius,
    explosionGrowthFrames,
    explosionInitialAlpha,
    explosionFullSizeAlpha,
    explosionFadeFrames,
    explosionFinalAlpha,
    name,
    cost
  );

  return tower;
};

/*constructs a basic launching tower (tower 6) at a given location and returns the object
 *	Launcher towers are single target and large projectiles
 * @param {Point} position the tower's x and y position
 * @param {Number} rotation the tower's rotation in radians
 * @return {Tower} returns the tower
 */
TowerType.createTower6 = function (position, rotation) {
  //basic range, damage and speed
  var range = 180;
  var damage = 150;
  var armorDamage = 80;
  var framesPerShot = 10; //lower number the faster, -1 means it doesn't shoot
  var bulletSpeed = 2; //ideally range should be divisible by this value
  var numberShots = 1;

  //does this tower fire exploding bullets?
  var explodes = true;
  var explosionRadius = 60;
  var explosionDamage = 100;
  var explosionArmorDamage = 50;

  //tower upgrades
  var upgradesOne = new Array();
  upgradesOne.push(new TowerUpgrade("damage", "Damage+", 50, 100));
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage+", 100, 100));
  upgradesOne.push(
    new TowerUpgrade("explosionDamage", "Explosion Damage+", 150, 50)
  );
  upgradesOne.push(new TowerUpgrade("armorDamage", "Armor Damage++", 200, 20));
  var upgradesTwo = new Array();
  upgradesTwo.push(new TowerUpgrade("range", "Range+", 100, 50));
  upgradesTwo.push(new TowerUpgrade("framesPerShot", "Speed+", 150, 2));
  upgradesTwo.push(new TowerUpgrade("range", "Range++", 200, 25));
  upgradesTwo.push(
    new TowerUpgrade("explosionRadius", "Explosion Rdius++", 250, 20)
  );

  //does this tower buff other towers?
  var buffRadius = 0;
  var buffDamage = 0;
  var buffArmorDamage = 0;
  var buffRange = 0;
  var buffFramesPerShot = 0;

  //drawing information
  var drawType = 6; //1-6
  var color1 = "#136c13";
  var color2 = "#e67300";
  var color3 = "#cc0000";
  var color4 = "#990000";
  var highlightColor = "#00ff00";

  //bullet drawing Information
  var bulletDrawingType = 3; //1 <-- circle, 2 <- square, 3 <- rectangle,4 <-- long rectangle (laser)
  var bulletRadius = 6;
  var bulletColor = "#006600";

  //explosion drawing Information
  var explosionColor = "#cc3300";
  var explosionInitialRadius = 6;
  var explosionGrowthFrames = 2;
  var explosionInitialAlpha = 0.9;
  var explosionFullSizeAlpha = 0.5;
  var explosionFadeFrames = 5;
  var explosionFinalAlpha = 0.3;

  //id stuff
  var name = "Luancher";
  var cost = 800;

  //create the new tower and return it
  var tower = new Tower(
    position,
    rotation,
    range,
    damage,
    armorDamage,
    framesPerShot,
    bulletSpeed,
    numberShots,
    explodes,
    explosionRadius,
    explosionDamage,
    explosionArmorDamage,
    upgradesOne,
    upgradesTwo,
    buffRadius,
    buffDamage,
    buffArmorDamage,
    buffRange,
    buffFramesPerShot,
    drawType,
    color1,
    color2,
    color3,
    color4,
    highlightColor,
    bulletDrawingType,
    bulletRadius,
    bulletColor,
    explosionColor,
    explosionInitialRadius,
    explosionGrowthFrames,
    explosionInitialAlpha,
    explosionFullSizeAlpha,
    explosionFadeFrames,
    explosionFinalAlpha,
    name,
    cost
  );

  return tower;
};
