/**
 * Created by Sergii on 26.04.2015.
 */


module.exports = function(name, extra){
	// Set status code
	this.status(404);
	this.send({
		error: {
			error_message: name + ' not found',
			error_code: 404,
			error_extra: extra || null
		}
	});
}