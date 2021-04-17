function Stage(id, backgroundImage, money, lives) {
  this.id = id;
  this.backgroundImage = backgroundImage;
  this.paths = new Array();
  if (typeof money == "undefined") {
    money = -1;
  }
  if (typeof lives == "undefined") {
    lives = -1;
  }
  this.money = money;
  this.lives = lives;
}

/*Adds a path to the stage
 * @param {Point[]} points An array of points for the path
 * @param {double} width Half the path's width (path will extend width from center line)
 * @param {String} color The color to draw the path
 * @param {String} highlightColor The color to draw the gradient highlights
 * @param {String} shadowColor The color to draw the dropShadow of the path.
 * @param {String} startColor The color to draw the start of a path
 * @param {String} startHighlightColor The color of the start for gradient
 * @param {String} endColor The color to draw the end of a path
 * @param {String} endHighlightColor The color to draw the end for gradient
 * @param {Boolean} hide If false, the path is not drawn. If true it is drawn
 */
Stage.prototype.addPath = function (
  points,
  width,
  color,
  highlightColor,
  shadowColor,
  startColor,
  startHighlightColor,
  endColor,
  endHighlightColor,
  hide
) {
  var path = new Path(
    points,
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
  this.paths.push(path);
};

Stage.prototype.draw = function (ctx) {
  //Draw a rectangle over the entire area

  for (var i = 0; i < this.paths.length; i++) {
    this.paths[i].draw(ctx);
  }
};
