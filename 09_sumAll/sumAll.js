const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0){
        return 'ERROR'
    }
    if (!Number.isInteger(number1) || !Number.isInteger(number2)){
        return 'ERROR'
    }
    
    let sum = 0;
    if(number1>number2){
        for(let i=number2; i<=number1; i++){
            sum += i;
        }
    } else{
        for(let i=number1; i<=number2; i++){
            sum += i;
        }
    }
    return sum;
}

console.log(sumAll(2,4));

// Do not edit below this line
module.exports = sumAll;
