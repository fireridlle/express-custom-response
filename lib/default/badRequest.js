/**
 * Created by Sergii on 26.04.2015.
 */


module.exports = function(fields, extra){
	// Set status code
	this.status(405);
	this.send({
		error: {
			error_message: 'Validation failed',
			error_code: 405,
			fields: fields,
			error_extra: extra || null
		}
	});
}