module.exports = function (message, code, extraData) {
    // Set status code
    this.status(401);
    this.send({
                  error : {
                      message   : message || 'Unauthorized..',
                      code      : code || undefined,
                      extraData : extraData || undefined
                  }
              });
}
