
module.exports = function (message, code, extraData) {
    // Set status code
    this.status(500);
    if(extraData instanceof Error) {
        extraData = extraData.toString();
    }
    this.send({
                  error : {
                      message   : message || 'We\'re sorry, a server error occurred. Please wait a bit and try again.',
                      code      : code || undefined,
                      extraData : extraData || undefined
                  }
              });
};
