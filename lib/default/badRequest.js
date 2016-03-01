
module.exports = function (message, code, fields, extraData) {
    // Set status code
    this.status(400);
    this.send({
                  error : {
                      message   : message || 'Request could not be handled.',
                      code      : code || null,
                      fields    : fields || null,
                      extraData : extraData || null
                  }
              });
};