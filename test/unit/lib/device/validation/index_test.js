'use strict';

const expect = require('chai').expect;
const validation = require('../../../../../lib/device/validation');

describe('./lib/device/validation.js', function() {

  it('should create unique name', function() {
    const name1 = validation.getUniqueName('foo');
    const name2 = validation.getUniqueName('foo');
    expect(name1).to.equal(name2);
  });

  it('should get button group', function() {
    const result = validation.getButtonGroup('Volume');
    expect(result.length).to.equal(3);
    expect(result).to.deep.equal(['VOLUME UP', 'VOLUME DOWN', 'MUTE TOGGLE']);
  });

  it('should get ip address', function() {
    const result = validation.getAnyIpAddress();
    expect(result.length > 3).to.equal(true);
  });

  it('should return false when calling stringLength with invalid parameters', function() {
    const result = validation.stringLength();
    expect(result).to.equal(false);
  });

  it('should fail stringLength check', function() {
    const result = validation.stringLength('aaa', 1);
    expect(result).to.equal(false);
  });

  it('should succeed stringLength check', function() {
    const result = validation.stringLength('aaa', 5);
    expect(result).to.equal(true);
  });

});
