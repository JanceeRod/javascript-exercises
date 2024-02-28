const findTheOldest = function(people) {
    let currentOld = people[0]

    for (let person of people) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear()
        }

        const first = person.yearOfDeath - person.yearOfBirth
        const next = currentOld.yearOfDeath - currentOld.yearOfBirth

        if (first > next) {
            currentOld = person
        }
    }
    return currentOld
};

// Do not edit below this line
module.exports = findTheOldest;
