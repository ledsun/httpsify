const cpx = require('cpx')
const httpsify = require('../')
const assert = require('assert')
const {
  readFileSync
} = require("fs")

describe('httpsify', () => {
  it('replaces http of script sources', (done) => {
    cpx.copy("test/bar.html", "test/dist", {
      clean: true,
      transform: httpsify
    }, (err) => {
      const before = readFileSync('test/bar.html', {
        encoding: "utf8"
      })
      const after = readFileSync('test/dist/bar.html', {
        encoding: "utf8"
      })

      assert.notEqual(before, after)
      assert(before.indexOf('<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>'))
      assert(after.indexOf('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>'))

      done()
    })
  })
})
