/*Stores all bullets*/
function Bullets(){
	this.bullets = new Array();
}

/*Add an Bullet
@param {Point} The current position of a bullet
@param {Number} The starting rotation (in radians)
@param {Enemy} targetEnemy The enemy the bullet is targeting
@param {Integer} targetFrame The target frame of the bullet we are shooting
@param {Number} speed The speed of the bullet (in pixels per frame)
@param {Integer} drawingType 1 = circle, 2 = square, 3 = rectangle, 4 = long rectangle, 5 = rocket 
@param {Number} radius used for dimensions of all types of drawing types
@param {String} color The color to draw the bullet
*/
Bullets.prototype.add = function(position, rotation, targetEnemy, targetFrame, 
	speed, drawingType, radius, color){
	var bullet = new Bullet(position, rotation, targetEnemy, targetFrame, 
		speed, drawingType, radius, color);
	this.bullets.push(bullet);
}

/*Remove a Bullet
*@param {Integer} index, The element to remove
*/
Bullets.prototype.remove = function(index){
	this.bullets.splice(index, 1);
}

/*Remove all Bullets
*/
Bullets.prototype.removeAll = function(){
	for(var i = this.bullets.length - 1; i >= 0; i--){
		this.remove(i);
	}
}

/*Draws all bullets, deletes all bullets that have reached the end of their life
* @param {Canvas Drawing Context} ctx
*/
Bullets.prototype.drawAll = function(ctx, frame){
	ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);	
	for(var i = this.bullets.length-1; i>=0; i--){
		if(this.bullets[i].draw(ctx)){
			this.remove(i);
		} 	
	}
}