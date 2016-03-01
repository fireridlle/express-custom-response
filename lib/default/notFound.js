
module.exports = function (uri, extraData) {
    // Set status code
    this.status(404);
    this.send({
                  error : {
                      message   : uri + ' not found.',
                      code      : 404,
                      extraData : extraData || null
                  }
              });
}