/**
 * Created by Sergii on 26.04.2015.
 */


module.exports = function(extra){
	// Set status code
	this.status(500);
	this.send({
		error: {
			error_message: 'We\'re sorry, a server error occurred. Please wait a bit and try again',
			error_code: 500,
			error_extra: extra || null
		}
	});
}