
module.exports = function(extraData){
	// Set status code
	this.status(200);
	this.send(extraData || {});
}