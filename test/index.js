const assert = require('power-assert');
const format = require('../');

describe('rmb-format', function() {
  describe('#format()', function() {
    it('should return 10,000 when the value is 10000', function() {
      assert('10,000' === format(10000));
    });
    it('should return 10,000.12 when the value is 10000.12', function() {
      assert('10,000.12' === format(10000.12));
    });
  });
});
