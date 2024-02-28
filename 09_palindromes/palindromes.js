const palindromes = function (text) {
    const originalText = String(text).toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = originalText.split('').reverse().join('');

    return originalText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
