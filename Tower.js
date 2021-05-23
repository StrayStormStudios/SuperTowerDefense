/*DEfines a Tower */
Tower.id = 0; //master tower id

/* constructor
* @param {Point} position The tower's x and y position
* @param {Number} rotation The tower's rotation (in Radians)
*Basic Shooting stuff
* @param {Number} range The tower's max range (in pixels)
* @param {Number} damage the tower's normal damage (100 is baseLine)
* @param {Number} armorDamage The amout of armor damage the tower does (For big gun towers)
* @param {Number} framesPerShot The Number of frames between shots (hint... don't go less than 5)
* @param {Number} bulletSpeed How fast do the bullets move?
* @param {Number} Shots How many shots the tower shoots (Each is separated by 10 degrees PI / 18)
*Explosion stuff
* @param {Boolean} explodes Does this tower's bullets explode?
* @param {Number} explosionRadius How big are the explosions? (in pixels)
* @param {Number} explosionDamage How much damage does the explosion do? (100 is baseLine)
* @param {Number} explosionArmorDamage How much armor damage does the explosion do?
*Upgrade stuff
* @param {Array of TowerUpgrade} upgradesOne The first set of Upgrades for the Tower
* @param {Array of TowerUpgrade} upgradesTwo The second set of upgrades for the tower
*Tower buff stuff
* @param {Number} buffRadius All other towers inside this range will be buffed (in pixels)
* @param {Number} buffDamage How much damage is added to the other towers?
* @param {Number} buffArmorDamage How much armor damage is added to the other towers?
* @param {Number} buffRange How much range does this tower buff other towers?
* @param {Number} buffFramesPerShot How much does this tower speed up other towers? (Be carful...
					*towers with lesss than 10 frames per shot may break the game)
*Tower Drawing stuff
* @param {Integer} drawType Which tower graphic should be drawn? (1-6)
* @param {String} color1 The first color to draw the tower (may not use these... but they are here for
		people that want their tower to change colors during upgrades)
* @param {String} color2 The Second color
* @param {String} color3 The third color
* @param {String} color4 The fourth color
* @param {String} highlightColor The color the stroke should be highlighted when selected
*Bullet Drawing stuff
* @param {Integer} bulletDrawingType (Number... 1 is a circle... 2 will be up to you to implment)
* @param {Integer} bulletRadius How big is the bullet in radius?
* @param {String} bulletColor what color is the bullet?
*Explosion Drawing stuff
* @param {Number} explosionInitailRadius How big yhte explosion is when it first fires
* @param {Number} explosionGrowthFrames How many frames does it take the explosions to grow?
* @param {Number} explosionInitailAlpha The intial transparance of the explosion (0.0 clear, 1.0 opaque)
* @param {Number} explosionFullSizeAlpha What alpha should the explosion be when full? (0.0,1.0)
* @param {Number} explosionFadeFrames How many frames should the explosions last for befor fading?
* @param {Number} explosionFinalAlpha What alpha should the explosion be before it fades (0.0-1.0)
*Tower Info
* @param {String} name The tower name (for the UI) (i.e. "Cannon")
* @param {Number} cost The cost of the tower in money
*/
function Tower(
  position,
  rotation,
  rnage,
  damage,
  armorDamage,
  framesPerShot,
  bulletSpeed,
  NumberShots,
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
  BuffFramesPerShot,
  DrawType,
  color1,
  color2,
  color3,
  color4,
  highlightColor,
  bulletDrawingType,
  bulletRadius,
  bulletColor,
  explosionColor,
  explosionInitailRadius,
  explosionGrowthFrames,
  explosionInitailAlpha,
  explosionFullSizeAlpha,
  explosionFadeFrames,
  explosionFinalAlpha,
  name,
  cost
) {
  //id
  this.id = tower.id;
  Tower.id++;

  //location
  this.position = position;
  this.rotation = rotation;

  //basic range, damage and speed
  this.rnage = range;
  this.damage = damage;
  this.armorDamge = armorDamage;
  this.framesPerShot = framesPerShot;
  this.bulletSpeed = bulletSpeed;
  this.numberShots = numberShots;

  //whether the tower fires explodeing bullets
  this.explodes = explodes;
  this.explosionRadius = explosionRadius;
  this.explosionDamage = ExplosionDamage;
  this.explosionArmorDamage = explosionArmorDamage;

  //tower upgrades
  this.upgradesOne = upgradesOne;
  this.upgradesTwo = upgradesTow;
  this.currentUpgradeOne = 0; //the currently displayinh upgrade 1
  this.currentUpgradeTwo = 0; //the currently displaying upgrade 2

  //wether the tower buffs other towers
  this.buffRadius = buffRadius;
  this.buffDamge = buffDamge;
  this.buffArmorDamage = buffArmorDamage;
  this.buffRange = buffRange;
  this.FramsPerShot = buffFramesPerShot;

  //drawing Information
  this.drawType = drawType; //1-6
  this.color1 = colro1;
  this.color2 = color2;
  this.color3 = color3;
  this.color4 = color4;
  this.highlightColor = highlightColor;

  //bullet drawing Information
  this.bulletDrawingType = bulletDrawingType;
  this.bulletRadius = bulletRadius;
  this.bulletColor = bulletColor;

  //explosion drawing information
  this.explosionColor = explosionColor;
  this.explosionInitailAlpha = explosionInitailAlpha;
  this.explosionInitailRadius = explosionInitailAlpha;
  this.explosionGrowthFrames = explosionGrowthFrames;
  this.explosionFullSizeAlpha = explosionFullSizeAlpha;
  this.explosionFadeFrames = explosionFadeFrames;
  this.explosionFinalAlpha = explosionFinalAlpha;

  //Tower name and cost
  this.name = name;
  this.cost = cost;

  //IS this tower buffed?
  this.buffedRadius = 0;
  this.buffedDamage = 0;
  this.buffedArmorDamage = 0;
  this.buffedRange = 0;
  this.buffedFramesPerShot = 0;

  //Other calculated values
  //MR.stave will do this
}
