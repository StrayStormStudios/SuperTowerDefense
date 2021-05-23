/*Defines a tower */
Tower.id = 0; //master tower id

/*Constructor
 * @param {Point} position The tower's x and y position
 * @param {Number} rotation The tower's rotation (in radians)
 * Basic Shooting stuff
 * @param {Number} range The tower's max range (in pixels)
 * @param {Number} damage The tower's normal damage (100 is baseline)
 * @param {Number} armorDamage The amount of armour damage the tower does (For big gun towers)
 * @param {Number} framesPerShot The number of frames between shots (hint... don't go less than 5)
 * @param {Number} bulletSpeed How fast do the bullets move?
 * @param {Number} numberShots How many shots the tower shoots (Each is separated by a 10 degrees PI / 18)
 * Explosion stuff
 * @param {Boolean} explodes Does this tower's bullets explode?
 * @param {Number} explosionRadius How big are the explosions? (in pixels)
 * @param {Number} explosionDamage How much damage does the explosion do? (100 is baseline)
 * @param {Number} explosionArmorDamage How much armour damage does the explosion do?
 * Upgrade stuff
 * @param {Array of TowerUpgrade} upgradesOne The first set of upgrades for the tower
 * @param {Array of TowerUpgrade} upgradesTwo The second set of upgrades for the tower
 * Tower buff stuff
 * @param {Number} buffRadius All other towers inside of this range will be buffed (in Pixels)
 * @param {Number} buffDamage How much damage is added to the other towers?
 * @param {Number} buffArmorDamage How much armor damage is added to the other towers?
 * @param {Number} buffRange How much range does this tower buff other towers?
 * @param {Number} buffFramesPerShot How much does this tower speed up other towers?  (Be careful...
 *towers with less than 10 frames per shot may break the game)
 * Tower drawing stuff
 * @param {Integer} drawType Which tower graphic should be drawn?  (1-6)
 * @param {String} color1 The first color to draw the tower (may not use these... but they are here
 *  		for people that want their tower to change colors during upgrades)
 * @param {String} color2 The second color
 * @param {String} color3 The third color
 * @param {String} color4 The fourth color
 * @param {String} highlightColor The color the stroke should be highlighted when selected
 * Bullet Drawing stuff
 * @param {Integer} bulletDrawingType (Number... 1 is circle... 2 will be up to you to implement)
 * @param {Integer} bulletRadius How big is the bullet in radius?
 * @param {String} bulletColor What color is the bullet?
 * Explosion drawing stuff
 * @param {String} explosionColor What color is the explosion?
 * @param {Number} explosionInitialRadius How big the explosion is when it first fires
 * @param {Number} explosionGrowthFrames How many frames does it take the explosion to grow?
 * @param {Number} explosionInitialAlpha The initial transparency of the explosion (0.0 clear, 1.0 opaque)
 * @param {Number} explosionFullSizeAlpha What alpha should the explosion be when full?( 0.0-1.0)
 * @param {Number} explosionFadeFrames   How many frames should the explosion last before fading?
 * @param {Number} explosionFinalAlpha What alpha should the explosion be before it fades (0.0-1.0)
 * Tower Info
 * @param {String} name The tower name (for the UI) (i.e. "Cannon")
 * @param {Number} cost The cost of the tower in money
 */
function Tower(
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
) {
  //id
  this.id = Tower.id;
  Tower.id++;

  //store the width of the current path
  this.width = SuperTower.stageList.stages[SuperTower.stage].paths[0].width;
  this.scale = this.width / 15;

  //location
  this.position = position;
  this.rotation = rotation;

  //basic range, damage and speed
  this.range = range * this.scale;
  this.damage = damage;
  this.armorDamage = armorDamage;
  this.framesPerShot = framesPerShot;
  this.bulletSpeed = bulletSpeed * this.scale;
  this.numberShots = numberShots;

  //whether the tower fires exploding bullets
  this.explodes = explodes;
  this.explosionRadius = explosionRadius * this.scale;
  this.explosionDamage = explosionDamage;
  this.explosionArmorDamage = explosionArmorDamage;

  //tower upgrades
  this.upgradesOne = upgradesOne;
  this.upgradesTwo = upgradesTwo;
  this.currentUpgradeOne = 0; //The currently displaying upgrade 1
  this.currentUpgradeTwo = 0; //The currently displaying upgrade 2

  //whether the tower buffs other towers
  this.buffRadius = buffRadius * this.scale;
  this.buffDamage = buffDamage;
  this.buffArmorDamage = buffArmorDamage;
  this.buffRange = buffRange * this.scale;
  this.buffFramesPerShot = buffFramesPerShot;

  //drawing Information
  this.drawType = drawType; //1-6
  this.color1 = color1;
  this.color2 = color2;
  this.color3 = color3;
  this.color4 = color4;
  this.highlightColor = highlightColor;

  //bullet drawing Information
  this.bulletDrawingType = bulletDrawingType;
  this.bulletRadius = bulletRadius * this.scale;
  this.bulletColor = bulletColor;

  //explosion drawing Information
  this.explosionColor = explosionColor;
  this.explosionInitialRadius = explosionInitialRadius * this.scale;
  this.explosionGrowthFrames = explosionGrowthFrames;
  this.explosionInitialAlpha = explosionInitialAlpha;
  this.explosionFullSizeAlpha = explosionFullSizeAlpha;
  this.explosionFadeFrames = explosionFadeFrames;
  this.explosionFinalAlpha = explosionFinalAlpha;

  //id stuff
  this.name = name;
  this.cost = cost;

  //Is this tower buffed?
  this.buffedRadius = 0;
  this.buffedDamage = 0;
  this.buffedArmorDamage = 0;
  this.buffedRange = 0;
  this.buffedFramesPerShot = 0;

  //calculated stuff
  this.isSelected = false;

  this.fireRadius = new Array();
  this.calculateFireRadius();

  this.enemyTargeted = null;
  this.frameTargeted = -1;

  this.shotCooldown = 0; //how long before we can fire?

  if (typeof framesPerMoney == "undefined") {
    framesPerMoney = -1;
  }
  this.framesPerMoney = framesPerMoney;
  this.currentFramesPerMoney = framesPerMoney;
}

/* Draws the current tower
 * @param {Canvas Drawing Context} ctx
 * @param {Boolean} isButton Is this one of the buttons?
 * @param {Boolean} isClicked If this is a button, is it currently clicked?
 * @param {Boolean} isDragged Is this a tower we are currently dragging?
 * @param {Boolean} greenRadius  Should the radius be green?  The other option is red
 * @return {Number}  The damage the enemies should do to the player
 */
Tower.prototype.draw = function (
  ctx,
  isButton,
  isClicked,
  isDragged,
  greenRadius
) {
  //console.log(isButton + " " + isClicked + " " + isDragged + " " + greenRadius);
  var scale = this.scale;
  if (isButton) {
    scale = 0.75;
  }

  //draw the radius if selected
  if (this.isSelected || isDragged) {
    //var radius = Math.max(this.range, this.buffRadius);
    var range = this.range;
    var buffRadius = this.buffRadius;

    var alpha = 0.4;
    if (isDragged) alpha = 0.1;
    //range
    if (greenRadius) {
      ctx.fillStyle = "rgba(0, 200, 0," + alpha + ")";
    } else {
      ctx.fillStyle = "rgba(150, 0, 0," + alpha + ")";
    }
    if (range > 0 && this.numberShots > 0) {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, range, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
    //buff radius
    if (greenRadius) {
      //change these for different buff  color
      ctx.fillStyle = "rgba(230, 115, 0," + alpha + ")";
    } else {
      ctx.fillStyle = "rgba(150, 0, 0," + alpha + ")";
    }
    if (buffRadius > 0) {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, buffRadius, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }

  if (this.drawType == 1) {
    TowerDrawing.draw1(
      ctx,
      this.position.x,
      this.position.y,
      scale,
      scale,
      this.rotation,
      this.isSelected || isClicked,
      isButton,
      this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.highlightColor
    );
  } else if (this.drawType == 2) {
    TowerDrawing.draw2(
      ctx,
      this.position.x,
      this.position.y,
      scale,
      scale,
      this.rotation,
      this.isSelected || isClicked,
      isButton,
      this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.highlightColor
    );
  } else if (this.drawType == 3) {
    TowerDrawing.draw3(
      ctx,
      this.position.x,
      this.position.y,
      scale,
      scale,
      this.rotation,
      this.isSelected || isClicked,
      isButton,
      this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.highlightColor
    );
  } else if (this.drawType == 4) {
    TowerDrawing.draw4(
      ctx,
      this.position.x,
      this.position.y,
      scale,
      scale,
      this.rotation,
      this.isSelected || isClicked,
      isButton,
      this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.highlightColor
    );
  } else if (this.drawType == 5) {
    TowerDrawing.draw5(
      ctx,
      this.position.x,
      this.position.y,
      scale,
      scale,
      this.rotation,
      this.isSelected || isClicked,
      isButton,
      this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.highlightColor
    );
  } else if (this.drawType == 6) {
    TowerDrawing.draw6(
      ctx,
      this.position.x,
      this.position.y,
      scale,
      scale,
      this.rotation,
      this.isSelected || isClicked,
      isButton,
      this.color1,
      this.color2,
      this.color3,
      this.color4,
      this.highlightColor
    );
  }
};

/*increases the current upgrade
 * @param {Integer} 1 or 2 (the tower to upgrade)
 */
Tower.prototype.increaseUpgrade = function (upgrade) {
  var currentUpgrade = null;

  //Is there an upgrade available?
  if (upgrade == 1) {
    if (this.currentUpgradeOne < this.upgradesOne.length) {
      currentUpgrade = this.upgradesOne[this.currentUpgradeOne];
    }
  } else if (upgrade == 2) {
    if (this.currentUpgradeTwo < this.upgradesTwo.length) {
      currentUpgrade = this.upgradesTwo[this.currentUpgradeTwo];
    }
  }

  //can we afford the upgrade?
  if (currentUpgrade != null && currentUpgrade.cost <= SuperTower.cash) {
    SuperTower.cash -= currentUpgrade.cost;
    if (upgrade == 1) {
      this.currentUpgradeOne++;
    } else {
      this.currentUpgradeTwo++;
    }

    //apply the upgrade
    if (currentUpgrade.type == "range") {
      this.range += currentUpgrade.value;
      this.calculateFireRadius();
    }
    if (currentUpgrade.type == "damage") this.damage += currentUpgrade.value;
    if (currentUpgrade.type == "armorDamage")
      this.armorDamage += currentUpgrade.value;
    if (currentUpgrade.type == "framesPerShot") {
      this.framesPerShot -= currentUpgrade.value;
      this.framesPerShot = Math.max(this.framesPerShot, 1);
    }
    if (currentUpgrade.type == "bulletSpeed")
      this.bulletSpeed += currentUpgrade.value;
    if (currentUpgrade.type == "numberShots")
      this.numberShots += currentUpgrade.value;
    if (currentUpgrade.type == "explosionRadius")
      this.explosionRadius += currentUpgrade.value;
    if (currentUpgrade.type == "explosionDamage")
      this.explosionDamage += currentUpgrade.value;
    if (currentUpgrade.type == "explosionArmorDamage")
      this.explosionArmorDamage += currentUpgrade.value;
    //for these we need to calculate buffs afterward
    if (currentUpgrade.type == "buffRadius") {
      this.buffRadius += currentUpgrade.value;
      SuperTower.towers.calculateBuffs();
    }
    if (currentUpgrade.type == "buffRange") {
      this.buffRange += currentUpgrade.value;
      SuperTower.towers.calculateBuffs();
    }
    if (currentUpgrade.type == "buffDamage") {
      this.buffDamage += currentUpgrade.value;
      SuperTower.towers.calculateBuffs();
    }
    if (currentUpgrade.type == "buffArmorDamage") {
      this.buffArmorDamage += currentUpgrade.value;
      SuperTower.towers.calculateBuffs();
    }
    if (currentUpgrade.type == "buffFramesPerShot") {
      this.buffFramesPerShot += currentUpgrade.value;
      SuperTower.towers.calculateBuffs();
    }
  }
};

/*Calculates the fireRadius for each frame
 */
Tower.prototype.calculateFireRadius = function () {
  var radius = 0;
  this.fireRadius = new Array();
  while (radius < this.range) {
    radius += this.bulletSpeed;
    this.fireRadius.push(radius);
  }
};

/*Calculates which enemy should be targeted and fires if it is time to fire
This will be where code optimization helps the most
*   				Because it is a triply nested loop
*/
Tower.prototype.targetEnemy = function () {
  //loop through fire radius
  var frame = SuperTower.frame;
  this.enemyTargeted = null;
  var bestFramesTillEnd = -1;
  this.frameTargeted = -1;
  for (var i = 0, m = this.fireRadius.length; i < m; i++) {
    //loop through enemies
    for (var j = 0, n = SuperTower.enemies.enemies.length; j < n; j++) {
      var curEnemy = SuperTower.enemies.enemies[j];
      if (!curEnemy.isDead) {
        if (
          bestFramesTillEnd == -1 ||
          curEnemy.framesTillEnd(frame) < bestFramesTillEnd
        ) {
          if (
            curEnemy.inRadius(this.position, this.fireRadius[i], frame + i + 1)
          ) {
            bestFramesTillEnd = curEnemy.framesTillEnd(frame);
            this.enemyTargeted = curEnemy;
            this.frameTargeted = frame + i + 1;
          }
        }
      }
    }
  }

  //rotate towards the current enemy
  if (this.enemyTargeted != null) {
    //calculate the angle of rotation
    var positionIndex = this.frameTargeted - this.enemyTargeted.frame;
    var xTarget = this.enemyTargeted.positions[positionIndex].x;
    var yTarget = this.enemyTargeted.positions[positionIndex].y;
    var iTarget = xTarget - this.position.x;
    var jTarget = yTarget - this.position.y;
    var tan = jTarget / iTarget;
    var theta = Math.atan2(iTarget, -jTarget);

    //draw a circle around the target...
    var ctx = SuperTower.ctxTowers;
    //console.log(xTarget + " " + yTarget);
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(xTarget, yTarget, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    this.rotation = theta - Math.PI / 2;
  }

  this.fire();
};

/*Fires at the enemy */
Tower.prototype.fire = function () {
  if (this.shotCooldown > 0) {
    this.shotCooldown--;
  } else {
    if (this.enemyTargeted != null) {
      this.shotCooldown = this.framesPerShot;
      //damage enemy
      this.enemyTargeted.applyDamage(
        this.frameTargeted,
        this.damage,
        this.armorDamage
      );
      //add a bullet
      SuperTower.bullets.add(
        this.position,
        this.rotation,
        this.enemyTargeted,
        this.frameTargeted,
        this.bulletSpeed,
        this.bulletDrawingType,
        this.bulletRadius,
        this.bulletColor
      );
      //should we explode?
      if (this.explodes && this.explosionRadius > 0) {
        //damage all enemies if appropriate
        //loop through all other enemies
        //draw the explosion
        var targetPosition =
          this.enemyTargeted.positions[
            this.frameTargeted - this.enemyTargeted.frame
          ];
        SuperTower.explosions.add(
          targetPosition,
          this.explosionColor,
          this.explosionInitialRadius,
          this.explosionRadius,
          this.explosionGrowthFrames,
          this.explosionInitialAlpha,
          this.explosionFullSizeAlpha,
          this.explosionFadeFrames,
          this.explosionFinalAlpha,
          this.frameTargeted
        );

        for (var j = 0, n = SuperTower.enemies.enemies.length; j < n; j++) {
          var curEnemy = SuperTower.enemies.enemies[j];
          if (!curEnemy.isDead) {
            //is the enemy hit by the explosion?
            //apply the damage
            if (
              curEnemy.inRadius(
                targetPosition,
                this.explosionRadius,
                this.frameTargeted
              )
            ) {
              curEnemy.applyDamage(
                this.frameTargeted,
                this.explosionDamage,
                this.explosionArmorDamage
              );
            }
          }
        }
      }
    }
  }
};

/*Calculate this tower's buffs */
Tower.prototype.calculateBuffs = function () {
  //search all towers to see if they buff our current tower
  //does this tower get buffed by a support
  if (
    this.range > 0 &&
    this.damage >= 0 &&
    this.numberShots >= 0 &&
    this.bulletSpeed >= 0
  ) {
    //check every tower
    for (var i = SuperTower.towers.towers.length - 1; i >= 0; i--) {
      var tower = SuperTower.towers.towers[i];

      //if tower is a supprot
      if (tower.buffRadius > 0) {
        //tower being buffed pos, support tower pos, support width
        var xDiff = Math.abs(tower.position.x - this.position.x) - this.width;
        var yDiff = Math.abs(tower.position.y - this.position.y) - this.width;

        //quick check if other towers are in buff range
        if (xDiff <= tower.buffRadius && yDiff <= tower.buffRadius) {
          //not sure what this does
          var distanceSquared = xDiff * xDiff + yDiff * yDiff;
          var buffRadiusSquared = tower.buffRadius * tower.buffRadius;
          //not sure what we are checking for
          if (distanceSquared < buffRadiusSquared) {
            if (this.buffedRange < tower.buffRange) {
              //reset the range
              this.range -= this.buffedRange;
              //upgrade or downgade buffed
              this.buffedRange = tower.buffRange;
              //reaply the buffed range
              this.range += this.buffedRange;
              //update tower firing range
              this.calculateFireRadius();
            }
            if (this.buffedFramesPerShot < tower.buffFramesPerShot) {
              this.framesPerShot += this.buffedFramesPerShot;
              this.buffedFramesPerShot = tower.buffFramesPerShot;
              this.framesPerShot -= this.buffedFramesPerShot;
              if (this.framesPerShot < 1) {
                this.framesPerShot = 1;
              }
            }
            if (this.buffedDamage < tower.buffDamage) {
              //reset the damage
              this.damage -= this.buffedDamage;
              //upgrade or downgade buffed
              this.buffedDamage = tower.buffDamage;
              //reaply the buufed damage
              this.damage += this.buffedDamage;
            }
            if (this.buffedArmorDamage < tower.buffArmorDamage) {
              //reset the armor damage
              this.armorDamage -= this.buffedArmorDamage;
              //upgrade or downgade buffed
              this.buffedArmorDamage = tower.buffArmorDamage;
              //reaply the armor damage
              this.damage += this.buffedArmorDamage;
            }
          }
          console.log();
          console.log("Support Tower Can Now Buff This Much");
          console.log("------------------------------------");
          console.log("Buff the Damage: " + tower.buffDamage);
          console.log("Buff the Armor Damage: " + tower.buffArmorDamage);
          console.log("Buff the Range: " + tower.buffRange);
          console.log("Buff the Speed: " + tower.buffFramesPerShot);
          console.log();
          console.log(this.name + " Tower Is Now Buffed By This Much");
          console.log("------------------------------------");
          console.log("Buffed Damage: " + this.buffedDamage);
          console.log("Buffed Armor Damage: " + this.buffedArmorDamage);
          console.log("Buffed Range: " + this.buffedRange);
          console.log("Buffed Speed: " + this.buffedFramesPerShot);
        }
      }
    }
  }
};

Tower.basicInfo = function () {
  for (var i = SuperTower.towers.towers.length - 1; i >= 0; i--) {
    var tower = SuperTower.towers.towers[i];
    console.log();
    console.log("How Much Buff " + tower.name + " Has");
    console.log("------------------------------------");
    console.log("Buffed Damage: " + tower.buffedDamage);
    console.log("Buffed Armor Damage: " + tower.buffedArmorDamage);
    console.log("Buffed Range: " + tower.buffedRange);
    console.log("----:P----");
  }
};

Tower.buffedInfo = function () {
  for (var i = SuperTower.towers.towers.length - 1; i >= 0; i--) {
    var tower = SuperTower.towers.towers[i];
    console.log();
    console.log("How Much to Buff other towers");
    console.log("-----------------------------");
    console.log("Buff the Damage: " + tower.buffDamage);
    console.log("Buff the Armor Damage: " + tower.buffArmorDamage);
    console.log("Buff the Range: " + tower.buffRange);
    console.log("Buff the Speed: " + tower.buffFramesPerShot);
  }
};
