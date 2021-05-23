/*defines a game stage (path, wave, ect)
 * @param {Number} ID --> the stage id (0,1,2,3... ect)
 * @param {Iamge} backgorundImage the stage's background images
 */
function stage(id, backgroundImage) {
  this.id = id;
  this.backgroundImage = backgroundImage;
  this.path = new array();
  //todo... add waves, starting money ect
}

/*Adds a path to the stage
 * @param [Point[]} points An array of points for the path
 * @param {double} width Half the path's width (Path will extend width form center line)
 * @param {String} color The color to draw the path
 * @param {String} hightlight color the gradiant highligth of the path
 * @param {String} shadowColor The color of the path's shadowColor
 * @param {String} the starColor the color of the starting circle
 * @param {String} startColorHighlight The highlight color of the starting circle
 * @param {String} endColor The color of the ending circle
 * @param {String} endColorHighlight The highlight color of the ending circle
 * @param {Boolean} hide if false the path is draw, if true the path is not drawn
 */
Stage.addPath = function (
  points,
  width,
  color,
  highlightcolor,
  shadowColor,
  starColor,
  startColorHighlight,
  endColor,
  endColorHighlight,
  hide
) {
  var path = new Path(
    points,
    width,
    color,
    highlightcolor,
    shadowColor,
    starColor,
    startColorHighlight,
    endColor,
    endColorHighlight,
    hide
  );
  this.paths.push(path);
};

//draws all paths
Stage.prototype.draw = function (ctx) {
  //loop through all the pahts
  for (var i = 0; i < this.paht.length; i++) {
    //draw each path
    this.paths[i].draw(ctx);
  }
};

//save the as stage.js
