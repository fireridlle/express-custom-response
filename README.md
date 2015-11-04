# express-custom-response

Create custom response methods for express.js

## Getting Started
Install the module with: `npm install express-custom-response`

##Quick Start
```javascript
require('express-custom-response')();
```


## Documentation
Module contain pre-defined custom responses:

**res.serverError (extra)**
- *mixed* **extra**
 - Any data that have to be returned to user
 
> return reponse with http code 500 and body:```
error: {
    error_message: 'We're sorry, a server error occurred. Please wait a bit and try again',
	error_code: 500,
	error_extra: null or extra
	}
```

**res.validation (message, extra)**
- *string* **message**
 - Message to show user why his request were forbidden
- *mixed* **extra**
 - Any data that have to be returned to user
 
> return reponse with http code 405 and body:```
error: {
    error_message: 'Validation failed',
	error_code: 405,
	fields: {email: 'Email has to be uniq'},
	error_extra: null or extra
}
```

**res.forbidden (fields, extra)**
- *object* **fields**
 - Object which contain validation error,  where key is field name and value is message
- *mixed* **extra**
 - Any data that have to be returned to user
 
> return reponse with http code 405 and body:```
error: {
    error_message: 'Validation failed',
	error_code: 405,
	fields: {email: 'Email has to be uniq'},
	error_extra: null or extra
}
```


**res.notFound (name, extra)**
- *string* **name**
 - What server can't find
- *mixed* **extra**
 - Any data that have to be returned to user
 
> return reponse with http code 404 and body:```
error: {
    error_message: 'User not found',
	error_code: 404,
	error_extra: null or extra
}
```

**res.ok (extra)**
- *mixed* **extra**
 - Any data that have to be returned to user
 
> return reponse with http code 404 and body:```
{} or extra
```


## Create own response
If you want to add you own responses you should pass absolute path to module constructor
```javascript
require('express-custom-response')(__dirname+ '/api/responses');
```
Then each script in this directory will be available as response method by filename. Example:
```javascript
/** 
 * api/responses/accepted.js
 *
 * This will be available in controllers as res.accepted(message);
 */

module.exports = function(message){
    //this is points to express.response
	this.status(202);
	this.send(message);
}
```
If you want to override exists pre-defined response simple add new script to your directory with name of response which you want to override
