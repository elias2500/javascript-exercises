const repeatString = function(string, repeatNumber) {
    if (repeatNumber < 0){
        return 'ERROR';
    }
    
    let resultString='';
    for(let i=0; i<repeatNumber; i++){
        resultString += string;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
