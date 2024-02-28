const getTheTitles = function(bookArray) {
    const titles = bookArray.map((book) => {
        return book.title
    })
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
