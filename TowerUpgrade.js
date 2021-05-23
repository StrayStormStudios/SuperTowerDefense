/*Tower Upgrade - this defines an upgrade for a tower
 * @param {String} type The type of the upgrade (i.e. framesPerShort)
 * @param {String} name The name of the upgrade (i.e. Speed LVl 2 ) this is what is displayed
 * @param {Number} cost the cost of the upgrade in gold
 * @param {Number} value THe value to rasie (or lower) the stat
 */
function TowerUpgrade(type, name, cost, value) {
  this.type = type;
  this.name = name;
  this.cost = cost;
  this.value = value;
}
