# express-custom-response

Create custom response methods for express.js

## Getting Started
Install the module with: `npm install express-custom-response`

##Quick Start
```javascript
require('express-custom-response')();
```


## Documentation
The module contains pre-defined custom responses:

**res.serverError (extraData)**
- *mixed* **data**
- Any data that have to be returned to the user
 
> return response with http code 500 and body:```json
error: {
    message: 'We're sorry, a server error occurred. Please wait a bit and try again',
	extraData: null or extraData
	}
```

**res.badRequest (message, extraData)**
- *string* **message**
- Message why the user's request could not be processed
- *mixed* **extraData**
- Any data that have to be returned to the user
 
> return response with http code 400 and body:```json
error: {
    message: 'Validation failed',
	fields: {email: 'Email has to be unique'},
	extraData: null or extraData
}
```

**res.forbidden (message, extraData)**
- *object* **message**
- Message why the user's request was forbidden
- *mixed* **extraData**
- Any data that have to be returned to the user
 
> return response with http code 405 and body:```json
error: {
    message: 'Validation failed',
	fields: {email: 'Email has to be uniq'},
	error_extra: null or extra
}
```


**res.notFound (uri, extraData)**
- *string* **uri**
- The URI the server cannot find
- *mixed* **extraData**
- Any data that have to be returned to the user
 
> return response with http code 404 and body:```json
error: {
    message: 'User not found',
	code: 404,
	extraData: null or extraData
}
```

**res.ok (extraData)**
- *mixed* **extraData**
- Any data that have to be returned to the user
 
> return reponse with http code 200 and body:```json
{} or extraData
```


## Create your own response
If you want to add your own responses you can pass the absolute path of the directory to the module constructor:
```javascript
require('express-custom-response')(__dirname+ '/api/responses');
```
Then each script in this directory will be available as a response method. The method's name equals the file name. Example:
```javascript
/** 
 * api/responses/accepted.js
 *
 * This will be available in controllers as res.accepted(message);
 */

module.exports = function(message) {
    //"this" points to express.response
	this.status(202);
	this.send(message);
}
```
If you want to override existing pre-defined responses, simply add a new script to your directory with the name of the response which you want to override.
