const reverseString = function(text) {
    let result = "";

    for (i = text.length - 1; i >= 0; i--) {
        result += text.charAt(i);
    }
    
    return result;
};

// Do not edit below this line
module.exports = reverseString;
