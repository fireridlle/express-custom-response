"use strict";

module.exports = function (message, extraData) {
    // Set status code
    this.status(422);
    this.send({
        error : {
            message   : message || 'The request is logically intact. However, it asks the server to execute an action which is not allowed by application logic.',
            extraData : extraData || undefined
        }
    });
};
