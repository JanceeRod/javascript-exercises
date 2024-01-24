const sumAll = function(start, end) {
    let result = 0;
    let numbers = new Array();
    let numDigit = calcNumDigit(start, end);

    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR";
    }

    else {
        if (start > end) {
            for (i = 0; i < numDigit; i++) {
                numbers[i] = end + i;
            }
        }
        else {
            for (i = 0; i < numDigit; i++) {
                numbers[i] = start + i;
            }
        }
    }

    for (j = 0; j < numbers.length; j++) {
        result = result + numbers[j];
    }
    
    console.log(numDigit)
    console.log(numbers);
    return result;
};

function calcNumDigit(initial, stop) {
    if (initial < stop) {
        let counter = initial;
        while (counter <= stop) {
            counter++;
        }
        return (counter - initial);
    }
    else if (initial > stop) {
        let counter = stop;
        while (counter <= initial) {
            counter++;
        }
        return (counter - stop);
    }
    
    
}

// Do not edit below this line
module.exports = sumAll;
