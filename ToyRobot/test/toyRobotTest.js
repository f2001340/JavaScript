var expect = require('chai').expect;

var ToyRobot = require('../toyRobot.js');

describe('ToyRobot', function () {
    
    it('should exist', function () {
        expect(ToyRobot).to.not.be.undefined;
    });    
})

describe('#moveRobotAndReport()', function () {
    it('should move the robot and report the final position', function () {
        var input = ['PLACE 0,0,NORTH','MOVE','REPORT'];
        var expected = '0,1,NORTH';
        var actual = ToyRobot.moveRobotAndReport(input);
        expect(actual).to.equal(expected);
    });
    
    it('should move the robot and report the final position', function () {
        var input = ['PLACE 1,2,EAST','MOVE','MOVE','LEFT','MOVE','REPORT'];
        var expected = '3,3,NORTH';
        var actual = ToyRobot.moveRobotAndReport(input);
        expect(actual).to.equal(expected);
    });
})

describe('#validateInput()', function () {
    it('should validate for correctness of input', function () {
        var input = ['PLACE 0,0,NORTH','MOVE','REPORT'];
        var expected = true;
        var actual = ToyRobot.validateInput(input);
        expect(actual).to.equal(expected);
    })
})

describe('#actions()', function () {
    it('should move one unit forward in the facing direction', function () {
        var input = ['PLACE 0,0,NORTH','MOVE','REPORT'];
        var expected = '0,1,NORTH';
        var actual = ToyRobot.move(input);
        expect(actual).to.equal(expected);
    });
    
    it('should rotate 90 degrees left', function () {
        var input = ['PLACE 0,0,NORTH','LEFT','REPORT'];
        var expected = '0,0,WEST';
        var actual = ToyRobot.left(input);
        expect(actual).to.equal(expected);
    });
    
    it('should rotate 90 degrees right', function () {
        var input = ['PLACE 0,0,NORTH','RIGHT','REPORT'];
        var expected = '0,0,EAST';
        var actual = ToyRobot.right(input);
        expect(actual).to.equal(expected);
    });
    
    it('should report the position', function () {
        var input = ['PLACE 0,0,NORTH','RIGHT','REPORT'];
        var expected = '0,0,EAST';
        var actual = ToyRobot.report(input);
        expect(actual).to.equal(expected);
    })
})