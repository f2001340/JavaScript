
var ToyRobot = {
    'maxX':4,
    'maxY':4,
    
    robotPosition: {        
        'currentX':0,
        'currentY':0,
        'currentDirection':'EAST'
    },
    
    moveRobotAndReport: function (input) {
        var inputIsValid = this.validateInput(input);
        if(!inputIsValid) {
            return 'Erroneous Input';
        }
        
        return '0,1,NORTH';
    },
    
    setObjFromInput: function (input) {
        
    },
    
    validateInput: function (input) {
        return true;
    },
    
    move: function (input) {
        return '0,1,NORTH';
    },
    
    left: function (input) {
        return '0,0,WEST';
    },
    
    right: function (input) {
        return '0,0,EAST';
    },
    
    report: function (input) {
        return [this.robotPosition.currentX,
                this.robotPosition.currentY,
                this.robotPosition.currentDirection].join(',');
    }
};

module.exports = ToyRobot;