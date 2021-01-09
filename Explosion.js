/*Defines an explosion */
Explosion.id = 0; //master explosion id

/*Explosion Defines an explosion
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
function Explosion(position, color, initialRadius, fullSizeRadius,  
	growthFrames, initialAlpha, fullSizeAlpha, fadeFrames, finalAlpha, targetFrame){
	//id
	this.id = Explosion.id;
	Explosion.id++;
	
	//basic fields
	this.position = position;
	this.color = color;
	this.initialRadius = initialRadius;
	this.fullSizeRadius = fullSizeRadius;
	this.growthFrames = growthFrames;
	this.initialAlpha = initialAlpha;
	this.fullSizeAlpha = fullSizeAlpha;
	this.fadeFrames = fadeFrames;
	this.finalAlpha = finalAlpha;
	
	//arrays
	this.frame = targetFrame;
	this.radii = new Array();
	this.alphas = new Array();
	this.calculateArrays();
}

//calculates both radii and alpha arrays
Explosion.prototype.calculateArrays = function(){
	for(var i = 0; i < this.growthFrames; i++){
		this.radii.push(this.initialRadius  + 
			1.0 * (this.fullSizeRadius - this.initialRadius) * (i / this.growthFrames));
		
		this.alphas.push(this.initialAlpha + 
			1.0 * (this.fullSizeAlpha - this.initialAlpha) * (i / this.growthFrames));
	}
	for(var i = 0; i <= this.fadeFrames; i++){
		this.radii.push(this.fullSizeRadius);
		this.alphas.push(this.fullSizeAlpha + 
			1.0 * (this.finalAlpha - this.fullSizeAlpha) * (i / this.fadeFrames));
	}
}

/*draws the explosion
* @param {Canvas Rendering Context} ctx
* @return {Boolean} true if this should be deleted, false if not
*/
Explosion.prototype.draw = function(ctx){
	var index = SuperTower.frame - this.frame; 
	if(index >= 0){
		if(index >= this.radii.length){
			return true;
		}
		ctx.save();
		//console.log(this.radii[index]);
		ctx.translate(this.position.x,this.position.y);
		ctx.fillStyle = this.color;
		ctx.globalAlpha = this.alphas[index];
		ctx.beginPath();
		ctx.arc(0,0,this.radii[index],0,2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
		return false;
	}
}