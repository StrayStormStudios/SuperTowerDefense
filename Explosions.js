/*Stores all explosions*/
function Explosions(){
	this.explosions = new Array();
}

/*Adds an Explosion
* @param {Point} position The initial x / y position of the explosion
* @param {Number} initialRadius How big the explosion is when it first fires
* @param {Number} fullSizeRadius how big is the full size radius?
* @param {Integer} growthFrames How many frames does it take the explosion to grow?
* @param {Number} initialAlpha The initial transparency of the explosion (0.0 clear, 1.0 opaque)
* @param {Number} fullSizeAlpha What alpha should the explosion be when full?( 0.0-1.0)
* @param {Number} fadeFrames   How many frames should the explosion last before fading?
* @param {Number} finalAlpha What alpha should the explosion be before it fades (0.0-1.0)
* @param {Integer} targetFrame What frame should we be before starting the animation?
*/
Explosions.prototype.add = function(position, color, initialRadius, fullSizeRadius,  
		growthFrames, initialAlpha, fullSizeAlpha, fadeFrames, finalAlpha, targetFrame){
	var explosion = new Explosion(position, color, initialRadius, fullSizeRadius,  
		growthFrames, initialAlpha, fullSizeAlpha, fadeFrames, finalAlpha, targetFrame);
	this.explosions.push(explosion);
}

/*Remove an Explosions
*@param {Integer} index, The element to remove
*/
Explosions.prototype.remove = function(index){
	this.explosions.splice(index, 1);
}

/*Remove all Explosions
*/
Explosions.prototype.removeAll = function(){
	for(var i = this.explosions.length - 1; i >= 0; i--){
		this.remove(i);
	}
}

/*Draws all explosions, deletes all explosions that have reached the end of their life
* @param {Canvas Drawing Context} ctx
*/
Explosions.prototype.drawAll = function(ctx, frame){
	ctx.clearRect(0, 0, Background.WIDTH, Background.HEIGHT);	
	for(var i = this.explosions.length-1; i>=0; i--){
		if(this.explosions[i].draw(ctx)){
			this.remove(i);
		} 	
	}
}