const {
  Transform
} = require('stream')

class Httpsify extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(data, encoding, callback) {
    this.push(data.toString().replace('<script src="http://', '<script src="https://'));
    callback();
  }
}

module.exports = function() {
  return new Httpsify
}
