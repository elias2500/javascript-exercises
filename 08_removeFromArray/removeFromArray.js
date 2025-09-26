const removeFromArray = function(array, ...toBeRemovedItems) {
    for (let i=0; i<toBeRemovedItems.length; i++){
        for (let j=0; j<array.length; j++){
            if (array[j] === toBeRemovedItems[i]){
                array.splice(j, 1);
                j = 0;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
