const add = function(firstAddend, secondAddend) {
	return firstAddend + secondAddend
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend
};

const sum = function(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element
    });
    return sum
};

const multiply = function(array) {
    let product = 1;
    array.forEach(element => {
        product *= element
    })
    return product
};

const power = function(number, exponent) {
	let result = number;
    for (i = 1; i < exponent; i++) {
        result *= number
    }
    return result
};

const factorial = function(number) {
    if (number == 0) return 1
    let current = number
	for (curr = number - 1; curr > 0; curr--) {
        current *= curr
    }
    return current
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
