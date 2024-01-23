const removeFromArray = function(array, ...removeArguments) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < removeArguments.length; j++) {
            if (array[i] === removeArguments[j]) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
