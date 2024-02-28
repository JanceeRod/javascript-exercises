const fibonacci = function(number) {
    let firstDigit = 0;
    let secondDigit = 1;
    let fiboNumber = 0;

    if (number < 0) return "OOPS"
    if (number == 1) return 1

    for (i = 1; i < String(number); i++) {
        fiboNumber = firstDigit + secondDigit
        firstDigit = secondDigit
        secondDigit = fiboNumber
    }

    return fiboNumber
};

// Do not edit below this line
module.exports = fibonacci;
