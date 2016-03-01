
module.exports = function (message, code, extraData) {
    // Set status code
    this.status(500);
    this.send({
                  error : {
                      message   : message || 'We\'re sorry, a server error occurred. Please wait a bit and try again.',
                      code      : code || null,
                      extraData : extraData || null
                  }
              });
};