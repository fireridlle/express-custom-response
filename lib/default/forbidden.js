
module.exports = function (message, code, extraData) {
    // Set status code
    this.status(403);
    this.send({
                  error : {
                      message   : message || 'This request is forbidden.',
                      code      : code || undefined,
                      extraData : extraData || undefined
                  }
              });
}