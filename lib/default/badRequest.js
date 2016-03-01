
module.exports = function (message, fields, extraData) {
    // Set status code
    this.status(400);
    this.send({
                  error : {
                      message   : message || 'Request could not be handled.',
                      code      : 400,
                      fields    : fields || null,
                      extraData : extraData || null
                  }
              });
};