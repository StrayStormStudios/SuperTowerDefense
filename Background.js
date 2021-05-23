function Background() {}

Background.WIDTH = 1024;
Background.HEIGHT = 576;

Background.SCREEN_X = 25;
Background.SCREEN_Y = 115;
Background.SCREEN_WIDTH = 820;
Background.SCREEN_HEIGHT = 430;

//gradient variables
Background.grd;
Background.grd2;

//draws the background layer
Background.drawAll = function (
  ctxBackgroundImage,
  ctxUIStatic,
  ctxUIDynamic,
  backgroundImage,
  mouseX,
  mouseY
) {
  Background.drawBackgroundImage(ctxBackgroundImage, backgroundImage);
  Background.drawStatic(ctxUIStatic);
  Background.drawDynamic(ctxUIDynamic, mouseX, mouseY);
};

Background.drawBackgroundImage = function (ctx, backgroundImage) {
  //Draw a rectangle over the entire area
  ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);

  ctx.fillStyle = "#222222";
  ctx.fillRect(0, 0, Background.WIDTH, Background.HEIGHT);

  //draw the stage background image
  ctx.fillStyle = "#222222";
  ctx.drawImage(backgroundImage, Background.SCREEN_X, Background.SCREEN_Y);
};

Background.drawStatic = function (ctx) {
  //Draw a rectangle over the entire area
  ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);

  //draw Screen Cover
  Background.drawScreenCoverStatic(ctx);

  //draw background stageCircle
  Background.drawStageStatic(ctx);

  //draw background Build Towers menu
  Background.drawBuildTowerMenuStatic(ctx);

  //draw background Upgrade Tower menu
  Background.drawUpgradeTowerMenuStatic(ctx);

  //draw background Health / Money Display
  Background.drawHealthMoneyDisplayStatic(ctx);

  //draw Title
  Background.drawTitleStatic(ctx);
};

Background.drawDynamic = function (ctx, mouseX, mouseY) {
  //Draw a rectangle over the entire area
  ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);

  Background.drawStageDynamic(ctx);
  Background.drawBuildTowerMenuDynamic(ctx);
  Background.drawUpgradeTowerMenuDynamic(ctx);
  Background.drawHealthMoneyDisplayDynamic(ctx);
  Background.drawMousePosition(ctx, mouseX, mouseY);
};

Background.drawScreenCoverStatic = function (ctx) {
  /*
   *    Screen Cover
   */
  // Create gradient for screen
  grd = ctx.createLinearGradient(150.0, 20, 150.0, Background.HEIGHT + 20);
  grd.addColorStop(0.0, "rgba(80, 80, 80, 1.000)");
  grd.addColorStop(0.02, "rgba(51, 51, 51, 1.000)");
  grd.addColorStop(0.95, "rgba(51, 51, 51, 1.000)");
  grd.addColorStop(1.0, "rgba(60, 60, 60, 1.000)");

  grd2 = ctx.createLinearGradient(0, 150.0, 0 + Background.WIDTH, 150.0);
  grd2.addColorStop(0.0, "rgba(80, 80, 80, 1.000)");
  grd2.addColorStop(0.018, "rgba(51, 51, 51, 1.000)");
  grd2.addColorStop(0.965, "rgba(51, 51, 51, 1.000)");
  grd2.addColorStop(1.0, "rgba(60, 60, 60, 1.000)");

  Background.drawScreen(
    ctx,
    0,
    20,
    Background.WIDTH - 20,
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
    Background.SCREEN_HEIGHT + 20,
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
  ctx.arc(Background.WIDTH - 81, 81, 81, 0, 2 * Math.PI);
  ctx.closePath();
  // Create gradient
  grd = ctx.createRadialGradient(
    Background.WIDTH - 110,
    40,
    0.0,
    Background.WIDTH - 110,
    40,
    138.0
  );
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
  ctx.arc(Background.WIDTH - 72, 72, 72, 0, 2 * Math.PI);
  ctx.closePath();

  // Create gradient
  grd = ctx.createRadialGradient(
    Background.WIDTH - 38,
    96,
    0.0,
    Background.WIDTH - 38,
    96,
    117.0
  );
  grd.addColorStop(0.015, "rgba(90, 90, 90, 1.000)");
  grd.addColorStop(0.199, "rgba(81, 81, 81, 1.000)");
  grd.addColorStop(0.937, "rgba(41, 41, 41, 1.000)");
  grd.addColorStop(1.0, "rgba(70, 70, 70, 1.000)");

  //draw Circle
  ctx.fillStyle = grd;
  ctx.fill();
  ctx.restore();

  //Stage Text Background
  Background.setBorderGradient(ctx, 860, 58, 150, 40, false);
  Background.roundRectGradient(ctx, 860, 58, 150, 40, 20, true, false);
  Background.setGreenGradient(ctx, 862, 60, 146, 36, false, true);
  Background.roundRectGradient(ctx, 862, 60, 146, 36, 18, true, false, false);
};

Background.drawStageDynamic = function (ctx) {
  //Stage Text
  Background.drawText(
    ctx,
    934,
    89,
    "Stage: " + (SuperTower.stage + 1) + "-" + (SuperTower.wave + 1),
    22,
    false,
    true
  );
};

Background.drawBuildTowerMenuStatic = function (ctx) {
  //border
  Background.setBorderGradient(
    ctx,
    Background.WIDTH - 160.0,
    160,
    130,
    220,
    true
  );
  Background.roundRectGradient(
    ctx,
    Background.WIDTH - 160.0,
    160,
    130,
    220,
    20,
    true,
    false
  );

  //Build Tower Text Background
  Background.setBorderGradient(ctx, 868, 166, 120, 28, false);
  Background.roundRectGradient(ctx, 868, 166, 120, 28, 14, true, false);
  Background.setGreenGradient(ctx, 870, 168, 116, 24, false, true);
  Background.roundRectGradient(ctx, 870, 168, 116, 24, 14, true, false, false);
};

Background.drawBuildTowerMenuDynamic = function (ctx) {
  //Build Tower Text
  Background.drawText(ctx, 927, 187, "Build Tower", 15, false, true);

  //Build Cannon Buttons
  Background.drawBuildCannonButton(ctx, 870, 198, false, false, false);
  Background.drawBuildCannonButton(ctx, 930, 198, false, false, false);
  Background.drawBuildCannonButton(ctx, 870, 258, false, false, false);
  Background.drawBuildCannonButton(ctx, 930, 258, true, true, true);
  Background.drawBuildCannonButton(ctx, 870, 318, true, false, false);
  Background.drawBuildCannonButton(ctx, 930, 318, true, false, false);
};

Background.drawBuildCannonButton = function (
  ctx,
  x,
  y,
  isDisabled,
  isHover,
  isSelected
) {
  //Draw border of cannon button
  if (!isSelected || isDisabled) {
    Background.setBorderGradient(ctx, x, y, 56, 58, false);
  } else {
    Background.setBorderGradient(ctx, x, y, 56, 58, true);
  }
  Background.roundRectGradient(ctx, x, y, 56, 58, 14, true, false);

  //Draw Tower Type Text
  Background.setBorderGradient(ctx, x + 6, y + 2, 44, 14, false);
  Background.roundRectGradient(ctx, x + 6, y + 2, 44, 14, 5, true, false);
  Background.setGreenGradient(
    ctx,
    x + 7,
    y + 3,
    42,
    12,
    isDisabled,
    isSelected || isHover
  );
  Background.roundRectGradient(
    ctx,
    x + 7,
    y + 3,
    42,
    12,
    5,
    true,
    false,
    false
  );
  Background.drawText(
    ctx,
    x + 27,
    y + 12,
    "Cannon",
    8,
    isDisabled,
    isSelected || isHover
  );

  //Draw Price Text
  Background.setBorderGradient(ctx, x + 6, y + 41, 44, 14, false);
  Background.roundRectGradient(ctx, x + 6, y + 41, 44, 14, 5, true, false);
  Background.setGreenGradient(
    ctx,
    x + 7,
    y + 42,
    42,
    12,
    isDisabled,
    isSelected || isHover
  );
  Background.roundRectGradient(
    ctx,
    x + 7,
    y + 42,
    42,
    12,
    5,
    true,
    false,
    false
  );
  Background.drawText(
    ctx,
    x + 27,
    y + 52,
    "$25",
    8,
    isDisabled,
    isSelected || isHover
  );

  //Cannons
  if (isSelected && !isDisabled) {
    Background.drawCannon(ctx, x + 29, y + 29, 0.75, 0.75, 0, true);
  } else {
    Background.drawCannon(ctx, x + 29, y + 29, 0.75, 0.75, 0, false);
  }
};

Background.drawCannon = function (
  ctx,
  x,
  y,
  scaleX,
  scaleY,
  rotation,
  isHighlighted
) {
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
  Background.setBorderGradient(
    ctx,
    Background.WIDTH - 160,
    390,
    130,
    160,
    true
  );
  Background.roundRectGradient(
    ctx,
    Background.WIDTH - 160,
    390,
    130,
    160,
    20,
    true,
    false
  );

  //Top Inset Border
  Background.setBorderGradient(ctx, 869, 396, 120, 57, true);
  Background.roundRectGradient(ctx, 869, 396, 120, 57, 14, true, false);

  //Upgrade Towers Text Background
  Background.setBorderGradient(ctx, 873, 399, 114, 25, false);
  Background.roundRectGradient(ctx, 873, 399, 114, 25, 12, true, false);
  Background.setGreenGradient(ctx, 875, 401, 110, 21, false, true);
  Background.roundRectGradient(ctx, 875, 401, 110, 21, 12, true, false, false);

  //Tower Type Text Background
  Background.setBorderGradient(ctx, 912, 426, 72, 25, false);
  Background.roundRectGradient(ctx, 912, 426, 72, 25, 14, true, false);
  Background.setGreenGradient(ctx, 914, 428, 68, 21, false, true);
  Background.roundRectGradient(ctx, 914, 428, 68, 21, 12, true, false, false);

  //Bottom Inset Border
  Background.setBorderGradient(ctx, 869, 458, 120, 86, true);
  Background.roundRectGradient(ctx, 869, 458, 120, 86, 14, true, false);
  //Upgrade Insets
  Background.setBorderGradient(ctx, 873, 462, 112, 38, false);
  Background.roundRectGradient(ctx, 873, 462, 112, 38, 14, true, false);
  Background.setBorderGradient(ctx, 873, 502, 112, 38, false);
  Background.roundRectGradient(ctx, 873, 502, 112, 38, 14, true, false);
};

Background.drawUpgradeTowerMenuDynamic = function (ctx) {
  //Upgrade Towers Text
  Background.drawText(ctx, 930, 417, "UpgradeTower", 12, false, true);
  //Tower Type Text
  Background.drawText(ctx, 949, 444, "Cannon", 12, false, true);
  //cannon
  Background.drawCannon(ctx, 891, 438, 0.75, 0.75, 0, true);

  //First Upgrade
  Background.setBorderGradient(ctx, 878, 465, 102, 16, false);
  Background.roundRectGradient(ctx, 878, 465, 102, 16, 6, true, false);
  Background.setGreenGradient(ctx, 879, 466, 100, 14, false, false);
  Background.roundRectGradient(ctx, 879, 466, 100, 14, 5, true, false, false);
  Background.drawText(ctx, 929, 477, "Upgrade Power", 9, false, false);
  Background.setBorderGradient(ctx, 878, 481, 65, 16, false);
  Background.roundRectGradient(ctx, 878, 481, 65, 16, 6, true, false);
  Background.setGreenGradient(ctx, 879, 482, 63, 14, false, false);
  Background.roundRectGradient(ctx, 879, 482, 63, 14, 5, true, false, false);
  Background.drawText(ctx, 910, 493, "Level 1", 9, false, false);
  Background.setBorderGradient(ctx, 943, 481, 38, 16, false);
  Background.roundRectGradient(ctx, 943, 481, 38, 16, 6, true, false);
  Background.setGreenGradient(ctx, 944, 482, 36, 14, false, false);
  Background.roundRectGradient(ctx, 944, 482, 36, 14, 5, true, false, false);
  Background.drawText(ctx, 960, 493, "$25", 9, false, false);
  //Second Upgrade
  Background.setBorderGradient(ctx, 878, 505, 102, 16, false);
  Background.roundRectGradient(ctx, 878, 505, 102, 16, 6, true, false);
  Background.setGreenGradient(ctx, 879, 506, 100, 14, true, false);
  Background.roundRectGradient(ctx, 879, 506, 100, 14, 5, true, false, false);
  Background.drawText(ctx, 929, 517, "Upgrade Range", 9, true, false);
  Background.setBorderGradient(ctx, 878, 521, 65, 16, false);
  Background.roundRectGradient(ctx, 878, 521, 65, 16, 6, true, false);
  Background.setGreenGradient(ctx, 879, 522, 63, 14, true, false);
  Background.roundRectGradient(ctx, 879, 522, 63, 14, 5, true, false, false);
  Background.drawText(ctx, 910, 533, "Level 3", 9, true, false);
  Background.setBorderGradient(ctx, 943, 521, 38, 16, false);
  Background.roundRectGradient(ctx, 943, 521, 38, 16, 6, true, false);
  Background.setGreenGradient(ctx, 944, 522, 36, 14, true, false);
  Background.roundRectGradient(ctx, 944, 522, 36, 14, 5, true, false, false);
  Background.drawText(ctx, 960, 533, "$250", 9, true, false);
};

Background.drawHealthMoneyDisplayStatic = function (ctx) {
  //Inset Border
  Background.setBorderGradient(ctx, 30, 30, 150, 70, true);
  Background.roundRectGradient(ctx, 30, 30, 150, 70, 20, true, false);

  //Money text background
  Background.setBorderGradient(ctx, 40, 35, 130, 28, false);
  Background.roundRectGradient(ctx, 40, 35, 130, 28, 14, true, false);
  Background.setGreenGradient(ctx, 42, 37, 126, 24, false, true);
  Background.roundRectGradient(ctx, 42, 37, 126, 24, 12, true, false, false);

  //Lives background
  Background.setBorderGradient(ctx, 40, 66, 130, 28, false);
  Background.roundRectGradient(ctx, 40, 66, 130, 28, 14, true, false);
  Background.setGreenGradient(ctx, 42, 68, 126, 24, false, true);
  Background.roundRectGradient(ctx, 42, 68, 126, 24, 12, true, false, false);
};

Background.drawHealthMoneyDisplayDynamic = function (ctx) {
  //Money text
  Background.drawText(ctx, 104, 57, "Cash: $100", 15, false, true);
  //Lives text
  Background.drawText(ctx, 104, 87, "Lives: 10", 15, false, true);
};

Background.drawTitleStatic = function (ctx) {
  //inset border
  Background.setBorderGradient(ctx, 190, 30, 650, 70, true);
  Background.roundRectGradient(ctx, 190, 30, 650, 70, 20, true, false);
  //title text
  Background.setBorderGradient(ctx, 210, 35, 610, 60, false);
  Background.roundRectGradient(ctx, 210, 35, 610, 60, 30, true, false);
  Background.setGreenGradient(ctx, 213, 38, 602, 54, false, true);
  Background.roundRectGradient(ctx, 213, 38, 602, 54, 27, true, false, false);
  ctx.font = "42pt Impact";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(0,0,0, 1.000)";
  ctx.fillText("Super Tower Defense", 523, 86);
  //Background.drawText(ctx, 522, 85, "Super Tower Defense", 42, false, true);
  ctx.fillStyle = "rgba(0,80,80, 1.000)";
  ctx.fillText("Super Tower Defense", 522, 85);
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
Background.roundRectGradient = function (
  ctx,
  x,
  y,
  width,
  height,
  radius,
  fill,
  stroke,
  twoGradient
) {
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
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
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
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius.br,
        y + height
      );
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
Background.drawScreen = function (
  ctx,
  x,
  y,
  width,
  height,
  x2,
  y2,
  width2,
  height2,
  radius,
  fill,
  stroke,
  grd,
  grd2
) {
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
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
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
  ctx.quadraticCurveTo(
    x2 + width2,
    y2 + height2,
    x2 + width2,
    y2 + height2 - radius.br
  );
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
    ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius.br,
      y + height
    );
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
    ctx.quadraticCurveTo(
      x2 + width2,
      y2 + height2,
      x2 + width2,
      y2 + height2 - radius.br
    );
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

//Creates Creates Indented / Button style gradients
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
Background.setGreenGradient = function (
  ctx,
  x,
  y,
  width,
  height,
  isDisabled,
  isHighlighted
) {
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
Background.drawText = function (
  ctx,
  x,
  y,
  text,
  fontSize,
  isDisabled,
  isHighlighted
) {
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

//draws the position of the mouse to the screen
Background.drawMousePosition = function (ctx, mouseX, mouseY) {
  Background.drawText(
    ctx,
    930,
    570,
    "Mouse x: " + mouseX + ",  Mouse y: " + mouseY,
    9,
    false,
    false
  );
};
