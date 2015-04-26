/**
 * Created by Sergii on 26.04.2015.
 */


module.exports = function(extra){
	// Set status code
	this.status(200);
	this.send(extra || {});
}