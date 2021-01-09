/*Towers - Stores all towers*/
function Towers(){
	this.towers = new Array();
	this.selectedTower = null;
}

/*Add an Tower
*@param {Point} position The x y position of the tower
*@param {Number} The rotation of the tower (in radians)
*@param {Number} The type of tower 1,2,3,4,5,6
*/
Towers.prototype.add = function(position, rotation, type){
	var tower = TowerType.createTower(position, rotation, type);
	this.towers.push(tower);
	this.calculateBuffs();
	this.mouseDown();
}

/*Remove a tower
*@param {Integer} index, The element to remove
*/
Towers.prototype.remove = function(index){
	//refund half the gold
	SuperTower.cash += (this.towers[index].cost / 2);
	
	var selectedChanged = false;
	if(this.towers[index].isSelected){
		selectedChanged = true;
	}
	this.towers.splice(index, 1);
	if(selectedChanged){
		this.setSelected();
	}
	
	
}

/*Remove all towers
*/
Towers.prototype.removeAll = function(){
	for(var i = this.towers.length - 1; i >= 0; i--){
		this.remove(i);
	}
}

/*Draws all towers... 
* @param {Canvas Drawing Context} ctx
* @param {Integer} currentFrame (our currentFrame)
* @return {Number}  The damage the enemies should do to the player
*/
Towers.prototype.drawAll = function(ctx){
	ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);	
	for(var i = this.towers.length-1; i>=0; i--){
		if(this.towers[i].draw(ctx, false, false, false, true));
		
		//increase tower money
		if(this.towers[i].framesPerMoney != -1){
			this.towers[i].currentFramesPerMoney--;
			if(this.towers[i].currentFramesPerMoney <= 0){
				this.towers[i].currentFramesPerMoney = this.towers[i].framesPerMoney;
				SuperTower.cash += 10;
				//console.log("You just earned $10, you now have: " + SuperTower.cash);
			}
		}
	}
}

/*MouseDown ... updates whether or not a tower was clicked on
*/
Towers.prototype.mouseDown = function(){
	if(!SuperTower.towerMenu.upgradeClicked()){
		var mouseX = SuperTower.mouseX;
		var mouseY = SuperTower.mouseY;
		
		var width = 0;
		var widthSquared = 0;
		if(this.towers.length >= 1){
			width = this.towers[0].width;
			widthSquared = width * width;
		}
		for(var i = this.towers.length-1; i >= 0; i--){
			//inside the bounding box?
			var xDiff = Math.abs(mouseX - this.towers[i].position.x);
			var yDiff = Math.abs(mouseY - this.towers[i].position.y);
			
			if(xDiff <= width && yDiff <= width){
				//inside bounding circle
				var diffSquared = xDiff * xDiff + yDiff * yDiff;
				if(diffSquared <= widthSquared){
					this.towers[i].isSelected = true;
				} else {
					this.towers[i].isSelected = false;
				}
			} else {
				this.towers[i].isSelected = false;
			}
		}
		this.setSelected();
	}
}

/*sets the selected tower*/
Towers.prototype.setSelected = function(){
	this.selectedTower = null;
	for(var i = this.towers.length-1; i >= 0; i--){
		if(this.towers[i].isSelected){
			this.selectedTower = this.towers[i];
			break;
		}
	}
}

/* targets all towers and fires if appropriate*/
Towers.prototype.targetEnemies = function(){
	for(var i = 0, n = this.towers.length; i < n; i++){
		this.towers[i].targetEnemy();
	}
}

/* Calculates buff for all towers */
Towers.prototype.calculateBuffs = function(){
	for(var i = 0, n = this.towers.length; i < n; i++){
		this.towers[i].calculateBuffs();
	}
}

/*Shows the selected tower's advanced infromation*/
Towers.prototype.advancedInfo = function(){
	for(var i = this.towers.length-1; i >= 0; i--){
			if(this.towers[i].isSelected){
				console.log(this.towers[i]);
			}
	}
}

/*Shows the selected tower's basic infromation*/
Towers.prototype.basicInfo = function(){
	for(var i = this.towers.length-1; i >= 0; i--){
			if(this.towers[i].isSelected){
				console.log(Tower.basicInfo());
			}
	}
}

/*Shows the selected tower's buffing infromation*/
Towers.prototype.buffedInfo = function(){
	for(var i = this.towers.length-1; i >= 0; i--){
			if(this.towers[i].isSelected){
				console.log(Tower.buffedInfo);
			}
	}
}

/*deletes the selected tower*/
Towers.prototype.deleteSelected = function(){
	for(var i = this.towers.length-1; i >= 0; i--){
		if(this.towers[i].isSelected){
			this.remove(i);
		}
	}
}






