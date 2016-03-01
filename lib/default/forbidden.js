
module.exports = function (message, extraData) {
    // Set status code
    this.status(403);
    this.send({
                  error : {
                      message   : message || 'This request is forbidden.',
                      code      : 403,
                      extraData : extraData || null
                  }
              });
}