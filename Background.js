function Background() {}

Background.WIDTH = 1024;
Background.HEIGHT = 576;

Background.SCREEN_X = 25;
Background.SCREEN_Y = 125;
Background.SCREEN_WIDTH = 820;
Background.SCREEN_HEIGHT = 430;

//gradient variables
Background.grd;
Background.grd2;

//draws the background layer
Background.drawAll = function (ctxBackgroundImage, ctxUIStatic, ctxUIDynamic, backgroundImage, mouseX, mouseY) {
  Background.drawBackgroundImage(ctxBackgroundImage, backgroundImage);
  Background.drawStatic(ctxUIStatic);
  Background.drawDynamic(ctxUIDynamic, mouseX, mouseY);
};

//Cut out Draw BackGround Image
Background.drawBackgroundImage = function (ctx, backgroundImage) {
  //Draw a rectangle over the entire area
  ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);

  ctx.fillStyle = "#222222";
  ctx.fillRect(0, 0, Background.WIDTH, Background.HEIGHT);

  //draw the stage background image
  ctx.fillStyle = "#222222";
  ctx.drawImage(backgroundImage, Background.SCREEN_X, Background.SCREEN_Y);
};

//Draw all Static Things
Background.drawStatic = function (ctx) {
  //Draw a rectangle over the entire area
  ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);

  //draw Screen Cover
  Background.drawScreenCoverStatic(ctx);

  //draw background stageCircle
  Background.drawStageStatic(ctx);

  //draw background Upgrade Tower menu
  Background.drawUpgradeTowerMenuStatic(ctx);

  //draw background Health / Money Display
  Background.drawHealthMoneyDisplayStatic(ctx);

  //draw Title
  Background.drawTitleStatic(ctx);

  //draw background Build Towers menu
  Background.drawBuildTowerMenuStatic(ctx);

  //draw Tower Status
  Background.drawTowerStatusStatic(ctx);
};

//draw all Dynamic Things
Background.drawDynamic = function (ctx, mouseX, mouseY) {
  //Draw a rectangle over the entire area
  ctx.clearRect(0, 0, Background.WIDTH + 300, Background.HEIGHT);

  Background.drawStageDynamic(ctx);
  Background.drawUpgradeTowerMenuDynamic(ctx);
  Background.drawHealthMoneyDisplayDynamic(ctx);
  //Background.drawMousePosition(ctx, mouseX, mouseY);

  Background.drawBuildTowerMenuDynamic(ctx);

  //Tower Status Background
  Background.drawTowerStatusDynamic(ctx);
};

//draw screen
Background.drawScreenCoverStatic = function (ctx) {
  /*
   *    Screen Cover
   */
  // Create gradient for screen
  grd = ctx.createLinearGradient(150.0, 20, 150.0, Background.HEIGHT + 10);
  grd.addColorStop(0.0, "rgba(80, 80, 80, 1.000)");
  grd.addColorStop(0.02, "rgba(51, 51, 51, 1.000)");
  grd.addColorStop(0.95, "rgba(51, 51, 51, 1.000)");
  grd.addColorStop(1.0, "rgba(60, 60, 60, 1.000)");

  grd2 = ctx.createLinearGradient(0, 150.0, Background.WIDTH, 150.0);
  grd2.addColorStop(0.0, "rgba(80, 80, 80, 1.000)");
  grd2.addColorStop(0.018, "rgba(51, 51, 51, 1.000)");
  grd2.addColorStop(0.965, "rgba(51, 51, 51, 1.000)");
  grd2.addColorStop(1.0, "rgba(60, 60, 60, 1.000)");

  Background.drawScreen(
    ctx,
    0,
    20,
    Background.WIDTH - 10,
    Background.HEIGHT - 20,
    Background.SCREEN_X,
    Background.SCREEN_Y,
    Background.SCREEN_WIDTH,
    Background.SCREEN_HEIGHT,
    20,
    true,
    false,
    grd,
    grd2
  );

  //Inner border of Screen
  grd = ctx.createLinearGradient(
    150.0,
    Background.SCREEN_Y - 10,
    150.0,
    Background.SCREEN_HEIGHT + Background.SCREEN_Y + 10
  );
  grd.addColorStop(0.0, "rgba(51, 51, 51, 1.000)");
  grd.addColorStop(0.01, "rgba(41, 41, 41, 1.000)");
  grd.addColorStop(0.976, "rgba(51, 51, 51, 1.000)");
  grd.addColorStop(1.0, "rgba(70, 70, 70, 1.000)");

  grd2 = ctx.createLinearGradient(
    Background.SCREEN_X - 10,
    150.0,
    Background.SCREEN_WIDTH + Background.SCREEN_X + 8,
    150.0
  );
  grd2.addColorStop(0.0, "rgba(51, 51, 51, 1.000)");
  grd2.addColorStop(0.01, "rgba(41, 41, 41, 1.000)");
  grd2.addColorStop(0.976, "rgba(51, 51, 51, 1.000)");
  grd2.addColorStop(1.0, "rgba(70, 70, 70, 1.000)");

  Background.drawScreen(
    ctx,
    Background.SCREEN_X - 10,
    Background.SCREEN_Y - 10,
    Background.SCREEN_WIDTH + 18,
    Background.SCREEN_HEIGHT + 18,
    Background.SCREEN_X,
    Background.SCREEN_Y,
    Background.SCREEN_WIDTH,
    Background.SCREEN_HEIGHT,
    20,
    true,
    false,
    grd,
    grd2
  );
};

//path, speed stage background,
Background.drawStageStatic = function (ctx) {
  /*
   *    Top Circle
   */
  //circle border
  //trace path
  ctx.save();
  ctx.scale(1.1, 0.95);
  ctx.translate(-93, 0);
  ctx.fillStyle = "#222222";
  ctx.beginPath();
  ctx.arc(Background.WIDTH - 85, 77, 77, 0, 2 * Math.PI);
  ctx.closePath();
  // Create gradient
  grd = ctx.createRadialGradient(Background.WIDTH - 110, 40, 0.0, Background.WIDTH - 110, 40, 138.0);
  grd.addColorStop(0.015, "rgba(90, 90, 90, 1.000)");
  grd.addColorStop(0.199, "rgba(81, 81, 81, 1.000)");
  grd.addColorStop(0.937, "rgba(41, 41, 41, 1.000)");
  grd.addColorStop(1.0, "rgba(70, 70, 70, 1.000)");
  //draw circle
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.restore();

  //draw inner circle
  //trace path
  ctx.save();
  ctx.scale(1.1, 0.95);
  ctx.translate(-102, 9);
  ctx.fillStyle = "#cccccc";
  ctx.beginPath();
  ctx.arc(Background.WIDTH - 76, 68, 68, 0, 2 * Math.PI);
  ctx.closePath();

  // Create gradient
  grd = ctx.createRadialGradient(Background.WIDTH - 38, 96, 0.0, Background.WIDTH - 38, 96, 117.0);
  grd.addColorStop(0.015, "rgba(90, 90, 90, 1.000)");
  grd.addColorStop(0.199, "rgba(81, 81, 81, 1.000)");
  grd.addColorStop(0.937, "rgba(41, 41, 41, 1.000)");
  grd.addColorStop(1.0, "rgba(70, 70, 70, 1.000)");

  //draw Circle
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.restore();

  //Speed Text Background
  Background.setBorderGradient(ctx, 870, 32, 120, 40, false);
  Background.roundRectGradient(ctx, 870, 32, 120, 40, 20, true, false);
  Background.setGreenGradient(ctx, 872, 34, 116, 36, false, true);
  Background.roundRectGradient(ctx, 872, 34, 116, 36, 18, true, false, false);

  //Stage Text Background
  Background.setBorderGradient(ctx, 870, 75, 120, 40, false);
  Background.roundRectGradient(ctx, 870, 75, 120, 40, 20, true, false);
  Background.setGreenGradient(ctx, 872, 77, 116, 36, false, true);
  Background.roundRectGradient(ctx, 872, 77, 116, 36, 18, true, false, false);
};

//stage and speed display
Background.drawStageDynamic = function (ctx) {
  if (SuperTower.gameSpeed == 0) {
    //Speed Text
    Background.drawText(ctx, 930, 62, "Speed: MAX", 16, false, true);
  } else if (SuperTower.gameSpeed == 4) {
    //Speed Text
    Background.drawText(ctx, 930, 62, "Speed: MIN", 16, false, true);
  } else {
    //Speed Text
    Background.drawText(ctx, 930, 62, "Speed: " + SuperTower.gameSpeed, 18, false, true);
  }
  //Stage Text
  Background.drawText(ctx, 929, 105, "Stage: " + (SuperTower.stage + 1) + "-" + (SuperTower.wave + 1), 18, false, true);
};

//display build tower
Background.drawBuildTowerMenuStatic = function (ctx) {
  //border
  Background.setBorderGradient(ctx, Background.WIDTH - 160.0, 150, 130, 220, true);
  Background.roundRectGradient(ctx, Background.WIDTH - 160.0, 150, 130, 220, 20, true, false);

  //Build Tower Text Background
  Background.setBorderGradient(ctx, 868, 156, 120, 28, false);
  Background.roundRectGradient(ctx, 868, 156, 120, 28, 14, true, false);
  Background.setGreenGradient(ctx, 870, 158, 116, 24, false, true);
  Background.roundRectGradient(ctx, 870, 158, 116, 24, 14, true, false, false);
};

//display cannons
Background.drawBuildTowerMenuDynamic = function (ctx) {
  //Build Tower Text
  Background.drawText(ctx, 927, 177, "Build Tower", 15, false, true);

  //Build Cannon Buttons
  Background.drawBuildCannonButton(ctx, 870, 188, false, false, false, 1);
  Background.drawBuildCannonButton(ctx, 930, 188, false, false, false, 2);
  Background.drawBuildCannonButton(ctx, 870, 248, false, false, false, 3);
  Background.drawBuildCannonButton(ctx, 930, 248, true, true, true, 4);
  Background.drawBuildCannonButton(ctx, 870, 308, true, false, false, 5);
  Background.drawBuildCannonButton(ctx, 930, 308, true, false, false, 6);
};

//box info
Background.drawBuildCannonButton = function (ctx, x, y, isDisabled, isHover, isSelected, type) {
  //see if it is disabled
  var cost = SuperTower.towerMenu.getCost(type);
  var name = SuperTower.towerMenu.getName(type);
  //is it disabled?
  var isDisabled = cost >= SuperTower.cash;
  //are we hovering?
  var isHover = type == SuperTower.towerMenu.towerHighlighted;
  //are we selected?
  var isSelected = type == SuperTower.towerMenu.towerSelected;

  //Draw border of cannon button
  if (!isSelected || isDisabled) {
    Background.setBorderGradient(ctx, x, y, 56, 58, false);
  } else {
    Background.setBorderGradient(ctx, x, y, 56, 58, true);
  }
  Background.roundRectGradient(ctx, x, y, 56, 58, 14, true, false, true);

  //Draw Tower Type Text
  Background.setBorderGradient(ctx, x + 6, y + 2, 44, 14, false);
  Background.roundRectGradient(ctx, x + 6, y + 2, 44, 14, 5, true, false);
  Background.setGreenGradient(ctx, x + 7, y + 3, 42, 12, isDisabled, isSelected || isHover);
  Background.roundRectGradient(ctx, x + 7, y + 3, 42, 12, 5, true, false, false);
  Background.drawText(ctx, x + 27, y + 12, name, 8, isDisabled, isSelected || isHover);

  //Draw Price Text
  Background.setBorderGradient(ctx, x + 6, y + 41, 44, 14, false);
  Background.roundRectGradient(ctx, x + 6, y + 41, 44, 14, 5, true, false);
  Background.setGreenGradient(ctx, x + 7, y + 42, 42, 12, isDisabled, isSelected || isHover);
  Background.roundRectGradient(ctx, x + 7, y + 42, 42, 12, 5, true, false, false);
  Background.drawText(ctx, x + 27, y + 52, "$" + cost, 8, isDisabled, isSelected || isHover);

  var isHighlighted = isSelected && !isDisabled;

  SuperTower.towerMenu.drawAll(ctx);
};

//cannon box
Background.drawCannon = function (ctx, x, y, scaleX, scaleY, rotation, isHighlighted) {
  ctx.fillStyle = "#555566";
  if (isHighlighted) {
    ctx.strokeStyle = "#00ff00";
  } else {
    ctx.strokeStyle = "#000000";
  }
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scaleX, scaleY);
  ctx.rotate(rotation);

  ctx.beginPath();
  ctx.arc(0, 0, 15, 0, 2 * Math.PI);
  ctx.closePath();

  ctx.fill();
  ctx.stroke();
  if (isHighlighted) {
    ctx.strokeStyle = "#00ff00";
  } else {
    ctx.strokeStyle = "#000000";
  }
  ctx.fillStyle = "#333344";
  Utilities.roundRect(ctx, 0, -5, 25, 10, 5, true, true);

  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "#333344";
  if (isHighlighted) {
    ctx.strokeStyle = "#00ff00";
  } else {
    ctx.strokeStyle = "#000000";
  }
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

Background.drawUpgradeTowerMenuStatic = function (ctx) {
  //Large Inset Border
  Background.setBorderGradient(ctx, Background.WIDTH - 160, 410, 130, 160, true);
  Background.roundRectGradient(ctx, Background.WIDTH - 160, 410, 130, 160, 20, true, false);

  //Top Inset Border
  Background.setBorderGradient(ctx, 869, 416, 120, 57, true);
  Background.roundRectGradient(ctx, 869, 416, 120, 57, 14, true, false);

  //Bottom Inset Border
  Background.setBorderGradient(ctx, 869, 478, 120, 86, true);
  Background.roundRectGradient(ctx, 869, 478, 120, 86, 14, true, false);
};

Background.drawUpgradeTowerMenuDynamic = function (ctx) {
  var selectedTower = SuperTower.towers.selectedTower;
  //Upgrade Towers Text Background
  Background.setBorderGradient(ctx, 873, 419, 114, 25, false);
  Background.roundRectGradient(ctx, 873, 419, 114, 25, 12, true, false);
  if (selectedTower == null) {
    //Upgrade Tower Green Background
    Background.setGreenGradient(ctx, 875, 421, 110, 21, true, false);
    Background.roundRectGradient(ctx, 875, 421, 110, 21, 12, true, false, false);
    //Upgrade Towers Text
    Background.drawText(ctx, 930, 437, "UpgradeTower", 12, true, false);
    //Tower Type Text Background
    Background.setBorderGradient(ctx, 890, 446, 94, 25, false);
    Background.roundRectGradient(ctx, 890, 446, 94, 25, 14, true, false);
    Background.setGreenGradient(ctx, 892, 448, 90, 21, true, false);
    Background.roundRectGradient(ctx, 892, 448, 90, 21, 12, true, false, false);
    //Tower Type Text
    Background.drawText(ctx, 935, 463, "None Selected", 10, true, false);
  } else {
    //Upgrade Towers Text Background
    Background.setGreenGradient(ctx, 875, 421, 110, 21, false, true);
    Background.roundRectGradient(ctx, 875, 421, 110, 21, 12, true, false, false);
    //Upgrade Towers Text
    Background.drawText(ctx, 930, 437, "UpgradeTower", 12, false, true);
    //Tower Type Text Background
    Background.setBorderGradient(ctx, 912, 446, 72, 25, false);
    Background.roundRectGradient(ctx, 912, 446, 72, 25, 14, true, false);
    Background.setGreenGradient(ctx, 914, 448, 68, 21, false, true);
    Background.roundRectGradient(ctx, 914, 448, 68, 21, 12, true, false, false);
    //Tower Type Text
    Background.drawText(ctx, 949, 464, selectedTower.name, 12, false, true);
  }
  //draw the selected tower
  if (selectedTower != null) {
    var type = selectedTower.drawType;
    var color1 = selectedTower.color1;
    var color2 = selectedTower.color2;
    var color3 = selectedTower.color3;
    var color4 = selectedTower.color4;
    var highlightColor = selectedTower.highlightColor;
    var rotation = selectedTower.rotation;
    if (type == 1) {
      TowerDrawing.draw1(
        ctx,
        891,
        458,
        0.75,
        0.75,
        rotation,
        true,
        false,
        color1,
        color2,
        color3,
        color4,
        highlightColor
      );
    } else if (type == 2) {
      TowerDrawing.draw2(
        ctx,
        891,
        458,
        0.75,
        0.75,
        rotation,
        true,
        false,
        color1,
        color2,
        color3,
        color4,
        highlightColor
      );
    } else if (type == 3) {
      TowerDrawing.draw3(
        ctx,
        891,
        458,
        0.75,
        0.75,
        rotation,
        true,
        false,
        color1,
        color2,
        color3,
        color4,
        highlightColor
      );
    } else if (type == 4) {
      TowerDrawing.draw4(
        ctx,
        891,
        458,
        0.75,
        0.75,
        rotation,
        true,
        false,
        color1,
        color2,
        color3,
        color4,
        highlightColor
      );
    } else if (type == 5) {
      TowerDrawing.draw5(
        ctx,
        891,
        458,
        0.75,
        0.75,
        rotation,
        true,
        false,
        color1,
        color2,
        color3,
        color4,
        highlightColor
      );
    } else if (type == 6) {
      TowerDrawing.draw6(
        ctx,
        891,
        458,
        0.75,
        0.75,
        rotation,
        true,
        false,
        color1,
        color2,
        color3,
        color4,
        highlightColor
      );
    }
  }
  if (selectedTower != null) {
    //First Upgrade
    var firstDisabled = true;
    var firstHighlighted = false;
    var firstUpgradeLevel = "";
    var firstUpgradeCost = "";
    var firstUpgradeName = "";
    if (selectedTower.currentUpgradeOne >= selectedTower.upgradesOne.length) {
      firstUpgradeName = "Fully Upgraded";
      firstUpgradeLevel = "Max Level";
      firstUpgradeCost = "N/A";
    } else {
      //read in the current upgrade
      var curUpgrade = selectedTower.upgradesOne[selectedTower.currentUpgradeOne];
      firstUpgradeLevel = "Level " + (selectedTower.currentUpgradeOne + 1);
      firstUpgradeCost = "$" + curUpgrade.cost;
      firstUpgradeName = curUpgrade.name;
      if (curUpgrade.cost < SuperTower.cash) {
        firstDisabled = false;
        if (SuperTower.towerMenu.upgradeHighlighted == 1) firstHighlighted = true;
      }
    }
    //Upgrade Insets
    Background.setBorderGradient(ctx, 873, 482, 112, 38, false);
    Background.roundRectGradient(ctx, 873, 482, 112, 38, 14, true, false);
    //Name
    Background.setBorderGradient(ctx, 878, 485, 102, 16, false);
    Background.roundRectGradient(ctx, 878, 485, 102, 16, 6, true, false);
    Background.setGreenGradient(ctx, 879, 486, 100, 14, firstDisabled, firstHighlighted);
    Background.roundRectGradient(ctx, 879, 486, 100, 14, 5, true, false, false);
    Background.drawText(ctx, 929, 497, firstUpgradeName, 9, firstDisabled, firstHighlighted);
    //Level
    Background.setBorderGradient(ctx, 878, 501, 65, 16, false);
    Background.roundRectGradient(ctx, 878, 501, 65, 16, 6, true, false);
    Background.setGreenGradient(ctx, 879, 502, 63, 14, firstDisabled, firstHighlighted);
    Background.roundRectGradient(ctx, 879, 502, 63, 14, 5, true, false, false);
    Background.drawText(ctx, 910, 513, firstUpgradeLevel, 9, firstDisabled, firstHighlighted);
    //Cost
    Background.setBorderGradient(ctx, 943, 501, 38, 16, false);
    Background.roundRectGradient(ctx, 943, 501, 38, 16, 6, true, false);
    Background.setGreenGradient(ctx, 944, 502, 36, 14, firstDisabled, firstHighlighted);
    Background.roundRectGradient(ctx, 944, 502, 36, 14, 5, true, false, false);
    Background.drawText(ctx, 960, 513, firstUpgradeCost, 9, firstDisabled, firstHighlighted);

    //Second Upgrade
    var secondDisabled = true;
    var secondHighlighted = false;
    var secondUpgradeLevel = "";
    var secondUpgradeCost = "";
    var secondUpgradeName = "";
    if (selectedTower.currentUpgradeTwo >= selectedTower.upgradesTwo.length) {
      secondUpgradeName = "Fully Upgraded";
      secondUpgradeLevel = "Max Level";
      secondUpgradeCost = "N/A";
    } else {
      //read in the current upgrade
      var curUpgrade = selectedTower.upgradesTwo[selectedTower.currentUpgradeTwo];
      secondUpgradeLevel = "Level " + (selectedTower.currentUpgradeTwo + 1);
      secondUpgradeCost = "$" + curUpgrade.cost;
      secondUpgradeName = curUpgrade.name;
      if (curUpgrade.cost < SuperTower.cash) {
        secondDisabled = false;
        if (SuperTower.towerMenu.upgradeHighlighted == 2) secondHighlighted = true;
      }
    }
    Background.setBorderGradient(ctx, 873, 522, 112, 38, false);
    Background.roundRectGradient(ctx, 873, 522, 112, 38, 14, true, false);
    Background.setBorderGradient(ctx, 878, 525, 102, 16, false);
    Background.roundRectGradient(ctx, 878, 525, 102, 16, 6, true, false);
    Background.setGreenGradient(ctx, 879, 526, 100, 14, secondDisabled, secondHighlighted);
    Background.roundRectGradient(ctx, 879, 526, 100, 14, 5, true, false, false);
    Background.drawText(ctx, 929, 537, secondUpgradeName, 9, secondDisabled, secondHighlighted);
    Background.setBorderGradient(ctx, 878, 541, 65, 16, false);
    Background.roundRectGradient(ctx, 878, 541, 65, 16, 6, true, false);
    Background.setGreenGradient(ctx, 879, 542, 63, 14, secondDisabled, secondHighlighted);
    Background.roundRectGradient(ctx, 879, 542, 63, 14, 5, true, false, false);
    Background.drawText(ctx, 910, 553, secondUpgradeLevel, 9, secondDisabled, secondHighlighted);
    Background.setBorderGradient(ctx, 943, 541, 38, 16, false);
    Background.roundRectGradient(ctx, 943, 541, 38, 16, 6, true, false);
    Background.setGreenGradient(ctx, 944, 542, 36, 14, secondDisabled, secondHighlighted);
    Background.roundRectGradient(ctx, 944, 542, 36, 14, 5, true, false, false);
    Background.drawText(ctx, 960, 553, secondUpgradeCost, 9, secondDisabled, secondHighlighted);
  }
};

//Live,Money,Kills,Missed (left side) BackGorund
Background.drawHealthMoneyDisplayStatic = function (ctx) {
  //Inset Border
  Background.setBorderGradient(ctx, 15, 30, 220, 70, true);
  Background.roundRectGradient(ctx, 15, 30, 220, 70, 20, true, false);

  //Money text background
  Background.setBorderGradient(ctx, 25, 35, 110, 28, false);
  Background.roundRectGradient(ctx, 25, 35, 110, 28, 14, true, false);
  Background.setGreenGradient(ctx, 27, 37, 106, 24, false, true);
  Background.roundRectGradient(ctx, 27, 37, 106, 24, 12, true, false, false);

  //Lives background
  Background.setBorderGradient(ctx, 25, 66, 110, 28, false);
  Background.roundRectGradient(ctx, 25, 66, 110, 28, 14, true, false);
  Background.setGreenGradient(ctx, 27, 68, 106, 24, false, true);
  Background.roundRectGradient(ctx, 27, 68, 106, 24, 12, true, false, false);

  //kills text background
  Background.setBorderGradient(ctx, 140, 35, 0, 28, false);
  Background.roundRectGradient(ctx, 140, 35, 90, 28, 14, true, false);
  Background.setGreenGradient(ctx, 142, 37, 86, 24, false, true);
  Background.roundRectGradient(ctx, 142, 37, 86, 24, 12, true, false, false);

  //missed background
  Background.setBorderGradient(ctx, 140, 66, 90, 28, false);
  Background.roundRectGradient(ctx, 140, 66, 90, 28, 14, true, false);
  Background.setGreenGradient(ctx, 142, 68, 86, 24, false, true);
  Background.roundRectGradient(ctx, 142, 68, 86, 24, 12, true, false, false);
};

//Lives,Money,Kills,Missed (left side) Text
Background.drawHealthMoneyDisplayDynamic = function (ctx) {
  //Lives text
  Background.drawText(ctx, 79, 57, "Lives: " + SuperTower.lives, 12, false, true);
  //Money text
  Background.drawText(ctx, 79, 87, "Cash: $" + SuperTower.cash, 12, false, true);
  //kills text
  Background.drawText(ctx, 184, 57, "Kills: " + SuperTower.kills, 12, false, true);
  //missed text
  Background.drawText(ctx, 184, 87, "Missed: " + SuperTower.missed, 12, false, true);
};

//Tower Status (right Side) BackGround
Background.drawTowerStatusStatic = function (ctx) {
  //Inset Border
  Background.setBorderGradient(ctx, 1065, 30, 220, 258, true);
  Background.roundRectGradient(ctx, 1065, 30, 220, 258, 20, true, false);

  //Tower Status text background
  Background.setBorderGradient(ctx, 1082, 45, 190, 34, false);
  Background.roundRectGradient(ctx, 1082, 45, 190, 34, 14, true, false);
  Background.setGreenGradient(ctx, 1087, 47, 186, 30, false, true);
  Background.roundRectGradient(ctx, 1087, 47, 186, 30, 12, true, false, false);

  //Tower Status text
  Background.drawText(ctx, 1182, 72, "Tower Stauts", 18, false, true);
};

//Tower Status (right side) Text
Background.drawTowerStatusDynamic = function (ctx, isSelected) {
  for (var i = SuperTower.towers.towers.length - 1; i >= 0; i--) {
    var tower = SuperTower.towers.towers[i];

    //are we selected?
    var isSelected = SuperTower.towers.selectedTower;
    //Not selected
    if (isSelected == null) {
      //Radius background
      Background.setBorderGradient(ctx, 1082, 85, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 85, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 87, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 87, 186, 24, 12, true, false, false);
      //radius text
      Background.drawText(ctx, 1182, 107, "Radius: N/A", 15, false, true);

      //Damage background
      Background.setBorderGradient(ctx, 1082, 125, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 125, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 127, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 127, 186, 24, 12, true, false, false);

      //damage text
      Background.drawText(ctx, 1182, 147, "Damage: N/A", 15, false, true);

      //ArmorDamage background
      Background.setBorderGradient(ctx, 1082, 165, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 165, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 167, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 167, 186, 24, 12, true, false, false);

      //armor damage text
      Background.drawText(ctx, 1182, 187, "Armor Damage: N/A", 15, false, true);

      //Range background
      Background.setBorderGradient(ctx, 1082, 205, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 205, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 207, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 207, 186, 24, 12, true, false, false);
      //range text
      Background.drawText(ctx, 1182, 227, "Range: N/A", 15, false, true);

      //Speed background
      Background.setBorderGradient(ctx, 1082, 245, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 245, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 247, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 247, 186, 24, 12, true, false, false);
      //speed text
      Background.drawText(ctx, 1182, 267, "Speed: N/A", 15, false, true);
    }
    //selected
    else {
      //check if it is a suport or if it has a buff radius
      if (isSelected.name == "Support" || isSelected.buffRadius > 0) {
        //Radius background
        Background.setBorderGradient(ctx, 1082, 85, 190, 28, false);
        Background.roundRectGradient(ctx, 1082, 85, 190, 28, 14, true, false);
        Background.setGreenGradient(ctx, 1087, 87, 186, 24, false, true);
        Background.roundRectGradient(ctx, 1087, 87, 186, 24, 12, true, false, false);
        //Name text
        Background.drawText(ctx, 1182, 107, "Radius: " + isSelected.buffRadius, 15, false, true);
      } else {
        //Radius background
        Background.setBorderGradient(ctx, 1082, 85, 190, 28, false);
        Background.roundRectGradient(ctx, 1082, 85, 190, 28, 14, true, false);
        Background.setGreenGradient(ctx, 1087, 87, 186, 24, false, true);
        Background.roundRectGradient(ctx, 1087, 87, 186, 24, 12, true, false, false);
        //radius text
        Background.drawText(ctx, 1182, 107, "Radius: N/A", 15, false, true);
      }

      //Damage background
      Background.setBorderGradient(ctx, 1082, 125, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 125, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 127, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 127, 186, 24, 12, true, false, false);

      //Damage text
      Background.drawText(ctx, 1182, 147, "Damage: " + isSelected.damage, 15, false, true);

      //ArmorDamage background
      Background.setBorderGradient(ctx, 1082, 165, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 165, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 167, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 167, 186, 24, 12, true, false, false);

      //Armor Damage text
      Background.drawText(ctx, 1182, 187, "Armor Damage: " + isSelected.armorDamage, 12, false, true);

      //Range background
      Background.setBorderGradient(ctx, 1082, 205, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 205, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 207, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 207, 186, 24, 12, true, false, false);
      //Range text
      Background.drawText(ctx, 1182, 227, "Range: " + isSelected.range, 15, false, true);

      //Speed background
      Background.setBorderGradient(ctx, 1082, 245, 190, 28, false);
      Background.roundRectGradient(ctx, 1082, 245, 190, 28, 14, true, false);
      Background.setGreenGradient(ctx, 1087, 247, 186, 24, false, true);
      Background.roundRectGradient(ctx, 1087, 247, 186, 24, 12, true, false, false);
      //Speed text
      Background.drawText(ctx, 1182, 267, "Speed: " + isSelected.framesPerShot, 15, false, true);
    }
  }
};

//SUPER TOWER DEFENSE display
Background.drawTitleStatic = function (ctx) {
  //inset border
  Background.setBorderGradient(ctx, 240, 30, 590, 70, true);
  Background.roundRectGradient(ctx, 240, 30, 590, 70, 20, true, false);
  //title text
  Background.setBorderGradient(ctx, 255, 35, 560, 60, false);
  Background.roundRectGradient(ctx, 255, 35, 560, 60, 30, true, false);
  Background.setGreenGradient(ctx, 258, 38, 552, 54, false, true);
  Background.roundRectGradient(ctx, 258, 38, 552, 54, 27, true, false, false);
  ctx.font = "42pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(0,0,0, 1.000)";
  ctx.fillText("Super Tower Defense", 538, 86);
  //Background.drawText(ctx, 522, 85, "Super Tower Defense", 42, false, true);
  ctx.fillStyle = "rgba(0,80,80, 1.000)";
  ctx.fillText("Super Tower Defense", 537, 85);
};

/**
 * Draws a rounded rectangle with two gradients.  You should typically run either
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 * @param {Boolean} [twoGradients = true] Whether to draw a rectangular gradient
 */
Background.roundRectGradient = function (ctx, x, y, width, height, radius, fill, stroke, twoGradient) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }
  if (typeof twoGradient === "undefined") {
    twoGradient = true;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = Background.grd;
    ctx.fill();

    if (twoGradient) {
      ctx.save();

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y + height);
      ctx.lineTo(x + width, y);
      ctx.lineTo(x, y + height);
      ctx.clip();

      //path
      ctx.beginPath();
      ctx.moveTo(x + radius.tl, y);
      ctx.lineTo(x + width - radius.tr, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
      ctx.lineTo(x + width, y + height - radius.br);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
      ctx.lineTo(x + radius.bl, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      ctx.lineTo(x, y + radius.tl);
      ctx.quadraticCurveTo(x, y, x + radius.tl, y);
      ctx.closePath();

      // Fill with gradient
      ctx.fillStyle = Background.grd2;
      ctx.fill();

      ctx.restore();
    }
  }
  if (stroke) {
    ctx.stroke();
  }
};

/**
 * Draws a screen which has a rounded rectangle followed by a cutout
 * rounded rectangle hole.  The shape uses a rectangular gradient.
 * @param {CanvasRenderingContext2D} ctx
 * @param {Number} x The top left x coordinate
 * @param {Number} y The top left y coordinate
 * @param {Number} width The width of the rectangle
 * @param {Number} height The height of the rectangle
 * @param {Number} x2 The top left corner of the rectangular hole
 * @param {Number} y2 The top right corner of the rectangular hole
 * @param {Number} width2 The width of the rectangular hole
 * @param {Number} height2 The height of the rectangular hole
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radii for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
Background.drawScreen = function (ctx, x, y, width, height, x2, y2, width2, height2, radius, fill, stroke, grd, grd2) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }

  //path
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();

  //hole
  ctx.moveTo(x2 + radius.tl, y2);
  ctx.quadraticCurveTo(x2, y2, x2, y2 + radius.tl);
  ctx.lineTo(x2, y2 + height2 - radius.bl);
  ctx.quadraticCurveTo(x2, y2 + height2, x2 + radius.bl, y2 + height2);
  ctx.lineTo(x2 + width2 - radius.br, y2 + height2);
  ctx.quadraticCurveTo(x2 + width2, y2 + height2, x2 + width2, y2 + height2 - radius.br);
  ctx.lineTo(x2 + width2, y2 + radius.tr);
  ctx.quadraticCurveTo(x2 + width2, y2, x2 + width2 - radius.tr, y2);
  ctx.lineTo(x2 + radius.tl, y2);
  ctx.closePath();

  if (fill) {
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fill();

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x, y + height);
    ctx.clip();

    //path
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();

    //hole
    ctx.moveTo(x2 + radius.tl, y2);
    ctx.quadraticCurveTo(x2, y2, x2, y2 + radius.tl);
    ctx.lineTo(x2, y2 + height2 - radius.bl);
    ctx.quadraticCurveTo(x2, y2 + height2, x2 + radius.bl, y2 + height2);
    ctx.lineTo(x2 + width2 - radius.br, y2 + height2);
    ctx.quadraticCurveTo(x2 + width2, y2 + height2, x2 + width2, y2 + height2 - radius.br);
    ctx.lineTo(x2 + width2, y2 + radius.tr);
    ctx.quadraticCurveTo(x2 + width2, y2, x2 + width2 - radius.tr, y2);
    ctx.lineTo(x2 + radius.tl, y2);
    ctx.closePath();

    // Fill with gradient
    ctx.fillStyle = grd2;
    ctx.fill();

    ctx.restore();
  }
  if (stroke) {
    ctx.stroke();
  }
};

//Creates Indented / Button style gradients
Background.setBorderGradient = function (ctx, x, y, width, height, indented) {
  ctx.fillStyle = "#222222";
  Background.grd = ctx.createLinearGradient(150.0, y, 150.0, y + height);
  Background.grd2 = ctx.createLinearGradient(x, 150.0, x + width, 150.0);

  //set gradients based on size
  if (!indented) {
    Background.grd.addColorStop(0.0, "rgba(85, 85, 85, 1.000)");
    Background.grd.addColorStop(0.05, "rgba(61, 61, 61, 1.000)");
    Background.grd.addColorStop(0.95, "rgba(61, 61, 61, 1.000)");
    Background.grd.addColorStop(1.0, "rgba(41, 41, 41, 1.000)");

    Background.grd2.addColorStop(0.0, "rgba(85, 85, 85, 1.000)");
    Background.grd2.addColorStop(0.05, "rgba(61, 61, 61, 1.000)");
    Background.grd2.addColorStop(0.95, "rgba(61, 61, 61, 1.000)");
    Background.grd2.addColorStop(1.0, "rgba(41, 41, 41, 1.000)");
  } else {
    Background.grd.addColorStop(0.0, "rgba(41, 41, 41, 1.000)");
    Background.grd.addColorStop(0.05, "rgba(61, 61, 61, 1.000)");
    Background.grd.addColorStop(0.95, "rgba(61, 61, 61, 1.000)");
    Background.grd.addColorStop(1.0, "rgba(85, 85, 85, 1.000)");

    Background.grd2.addColorStop(0.0, "rgba(41, 41, 41, 1.000)");
    Background.grd2.addColorStop(0.05, "rgba(61, 61, 61, 1.000)");
    Background.grd2.addColorStop(0.95, "rgba(61, 61, 61, 1.000)");
    Background.grd2.addColorStop(1.0, "rgba(85, 85, 85, 1.000)");
  }
};

//Sets button gradients for green behind text
Background.setGreenGradient = function (ctx, x, y, width, height, isDisabled, isHighlighted) {
  ctx.fillStyle = "#222222";
  Background.grd = ctx.createLinearGradient(150.0, y, 150.0, y + height);
  if (isDisabled) {
    Background.grd.addColorStop(0.0, "rgba(65, 65, 65, 1.00)");
    Background.grd.addColorStop(0.5, "rgba(80, 80, 80, 1.00)");
    Background.grd.addColorStop(1.0, "rgba(65, 65, 65, 1.00)");
  } else if (isHighlighted) {
    Background.grd.addColorStop(0.0, "rgba(0, 130, 0, 1.00)");
    Background.grd.addColorStop(0.5, "rgba(15, 160, 0, 1.00)");
    Background.grd.addColorStop(1.0, "rgba(0, 130, 0, 1.00)");
  } else {
    Background.grd.addColorStop(0.0, "rgba(5, 65, 0, 1.00)");
    Background.grd.addColorStop(0.5, "rgba(7, 80, 0, 1.00)");
    Background.grd.addColorStop(1.0, "rgba(5, 65, 0, 1.00)");
  }
};

//draws text for the background
Background.drawText = function (ctx, x, y, text, fontSize, isDisabled, isHighlighted) {
  ctx.font = fontSize + "pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(10,10,10, 1.000)";
  ctx.fillText(text, x + 1, y + 1);

  if (isDisabled) {
    ctx.fillStyle = "rgba(150,150,150, 1.000)";
  } else if (isHighlighted) {
    ctx.fillStyle = "rgba(0,230,230, 1.000)";
  } else {
    ctx.fillStyle = "rgba(0,150,150, 1.000)";
  }
  ctx.fillText(text, x, y);
};

/*//draws the position of the mouse to the screen
Background.drawMousePosition = function(ctx, mouseX, mouseY){
	Background.drawText(ctx, 930, 570, "Mouse x: " + mouseX + ",  Mouse y: " + mouseY, 9, false, false);
}*/
