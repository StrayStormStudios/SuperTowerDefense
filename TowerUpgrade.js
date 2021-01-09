/*TowerUpgrade - This defines an upgrade for a tower
* @param {String} type The type of the upgrade (i.e. framesPerShot)
* @param {String} name The name of the upgrade (i.e. Speed Lvl 2) This is what is displayed
* @param {Number} cost the cost of the upgrade in gold
* @param {Number} value The value to raise (or lower) the stat
*/
function TowerUpgrade(type, name, cost, value){
	this.type = type;
	this.name = name;
	this.cost = cost;
	this.value = value;
}