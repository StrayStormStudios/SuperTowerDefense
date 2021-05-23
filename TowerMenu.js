/*TowerMenu sets up the towers for the menus*/
function TowerMenu() {
  //Menu Locations
  this.topLeft = new Array();
  this.topLeft.push(new Point(870, 188));
  this.topLeft.push(new Point(930, 188));
  this.topLeft.push(new Point(870, 248));
  this.topLeft.push(new Point(930, 248));
  this.topLeft.push(new Point(870, 308));
  this.topLeft.push(new Point(930, 308));
  this.width = 56;
  this.height = 58;

  //upgradeLocations
  this.upgradeTopLeft = new Array();
  this.upgradeTopLeft.push(new Point(873, 482));
  this.upgradeTopLeft.push(new Point(873, 522));
  this.upgradeWidth = 112;
  this.upgradeHeight = 38;

  //create the towers
  this.towers = new Array();
  for (var i = 1; i <= this.topLeft.length; i++) {
    this.towers.push(
      TowerType.createTower(
        new Point(this.topLeft[i - 1].x + 29, this.topLeft[i - 1].y + 29),
        0,
        i
      )
    );
  }

  this.draggingTower = false; //are we dragging a tower?
  this.draggedTower = null; //the tower we are dragging
  this.towerHighlighted = -1; //is a tower highlighted -1  = false
  this.towerSelected = -1; //is a tower selected? -1 = false

  this.upgradeHighlighted = -1; //is an upgrade highlighted? -1 = false
}

TowerMenu.prototype.drawAll = function (ctx) {
  //draw the menu tower
  for (var i = 1; i <= this.towers.length; i++) {
    this.getHighlighted();
    this.towers[i - 1].draw(ctx, true, this.towerSelected == i, false, true);
  }

  //draw the draggedTower
  if (this.draggingTower) {
    //test to see if the tower is in a safe place
    var greenRadius = this.validPosition();

    this.draggedTower.position.x = SuperTower.mouseX;
    this.draggedTower.position.y = SuperTower.mouseY;
    this.draggedTower.draw(ctx, false, true, true, greenRadius);
  }
};

/*Determines whether or not a tower is highlighted*/
TowerMenu.prototype.getHighlighted = function () {
  //a clicked tower is automatically highlighted
  if (this.towerSelected != -1) {
    this.towerHighlighted = this.towerSelected;
    this.upgradeHighlighted = -1;
  } else {
    //test if tower is highlighted
    var mouseX = SuperTower.mouseX;
    var mouseY = SuperTower.mouseY;
    this.towerHighlighted = -1;
    for (var i = 0, n = this.topLeft.length; i < n; i++) {
      if (
        mouseX >= this.topLeft[i].x &&
        mouseX <= this.topLeft[i].x + this.width &&
        mouseY >= this.topLeft[i].y &&
        mouseY <= this.topLeft[i].y + this.height
      ) {
        this.towerHighlighted = i + 1;
      }
    }
    //test if upgrade is highlighted
    this.upgradeHighlighted = -1;
    for (var i = 0, n = this.upgradeTopLeft.length; i < n; i++) {
      if (
        mouseX >= this.upgradeTopLeft[i].x &&
        mouseX <= this.upgradeTopLeft[i].x + this.upgradeWidth &&
        mouseY >= this.upgradeTopLeft[i].y &&
        mouseY <= this.upgradeTopLeft[i].y + this.upgradeHeight
      ) {
        this.upgradeHighlighted = i + 1;
      }
    }
  }
};

/*Returns the price for the named tower (1-6)
	@return the price of the tower 
*/
TowerMenu.prototype.getCost = function (tower) {
  return this.towers[tower - 1].cost;
};

/*Returns the price for the named tower (1-6)
	@return the price of the tower 
*/
TowerMenu.prototype.getName = function (tower) {
  return this.towers[tower - 1].name;
};

/*Handles mouseDown */
TowerMenu.prototype.mouseDown = function () {
  var mouseX = SuperTower.mouseX;
  var mouseY = SuperTower.mouseY;
  this.towerSelected = -1;

  //Did the user click on an upgrade?
  for (var i = 0, n = this.upgradeTopLeft.length; i < n; i++) {
    if (
      mouseX >= this.upgradeTopLeft[i].x &&
      mouseX <= this.upgradeTopLeft[i].x + this.upgradeWidth &&
      mouseY >= this.upgradeTopLeft[i].y &&
      mouseY <= this.upgradeTopLeft[i].y + this.upgradeHeight
    ) {
      //is a tower selected, if so send an upgrade click?
      if (SuperTower.towers.selectedTower != null) {
        SuperTower.towers.selectedTower.increaseUpgrade(i + 1);
      }
    }
  }

  //Did the user click on a tower?
  for (var i = 0, n = this.topLeft.length; i < n; i++) {
    if (
      mouseX >= this.topLeft[i].x &&
      mouseX <= this.topLeft[i].x + this.width &&
      mouseY >= this.topLeft[i].y &&
      mouseY <= this.topLeft[i].y + this.height
    ) {
      //do they have enough money to select this tower?
      if (this.towers[i].cost <= SuperTower.cash) {
        this.towerSelected = i + 1;
        //create a new tower to drag
        this.draggedTower = TowerType.createTower(
          new Point(mouseX, mouseY),
          0,
          i + 1
        );
        this.draggingTower = true;
      }
    }
  }
};

/*Handles mouseUp */
TowerMenu.prototype.mouseUp = function () {
  if (this.draggingTower != false) {
    //create a new tower if the position is valid
    if (this.validPosition()) {
      SuperTower.towers.add(
        new Point(SuperTower.mouseX, SuperTower.mouseY),
        0,
        this.towerSelected
      );
      SuperTower.cash -= this.draggedTower.cost;
    }
    //we are no longer dragging a tower
    this.towerSelected = -1;
    this.draggedTower = null;
    this.draggingTower = false;
  }
};

/*Checks whether or not the tower is in a valid position*/
TowerMenu.prototype.validPosition = function () {
  //off screen
  if (
    this.draggedTower.position.x <= Background.SCREEN_X ||
    this.draggedTower.position.x >=
      Background.SCREEN_X + Background.SCREEN_WIDTH ||
    this.draggedTower.position.y <= Background.SCREEN_Y ||
    this.draggedTower.position.y >=
      Background.SCREEN_Y + Background.SCREEN_HEIGHT
  ) {
    return false;
  }

  //what is the closest distance to another tower?
  var closestDistance =
    SuperTower.stageList.stages[SuperTower.stage].paths[0].width * 2.2;
  var closestDistanceSquared = closestDistance * closestDistance;

  //too close to other towers
  for (var i = SuperTower.towers.towers.length - 1; i >= 0; i--) {
    var xDiff =
      SuperTower.towers.towers[i].position.x - this.draggedTower.position.x;
    var yDiff =
      SuperTower.towers.towers[i].position.y - this.draggedTower.position.y;
    var distanceSquared = xDiff * xDiff + yDiff * yDiff;

    if (distanceSquared < closestDistanceSquared) {
      return false;
    }
  }

  //too close to a path
  for (
    var i = 0, n = SuperTower.stageList.stages[SuperTower.stage].paths.length;
    i < n;
    i++
  ) {
    if (
      SuperTower.stageList.stages[SuperTower.stage].paths[i].inPath(
        this.draggedTower.position
      )
    ) {
      return false;
    }
  }
  return true;
};

/*returns whether or not an upgrade was clicked using current mouse position
@return {Boolean} true if upgrade was clicked*/
TowerMenu.prototype.upgradeClicked = function () {
  var mouseX = SuperTower.mouseX;
  var mouseY = SuperTower.mouseY;

  for (var i = 0, n = this.upgradeTopLeft.length; i < n; i++) {
    if (
      mouseX >= this.upgradeTopLeft[i].x &&
      mouseX <= this.upgradeTopLeft[i].x + this.upgradeWidth &&
      mouseY >= this.upgradeTopLeft[i].y &&
      mouseY <= this.upgradeTopLeft[i].y + this.upgradeHeight
    ) {
      return true;
    }
  }

  return false;
};
