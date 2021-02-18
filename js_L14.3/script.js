/* const add = function (number1, number2) {
    const sum = number1 + number2; 
    return sum;
};
// return stops thefunction
const result = add(4, 5);
console.log(result);

// Returning a Array
const doubleArray = function (numbers) {
    const doubled = numbers.map(n => n * 2);
    return doubled
};

const result2 = doubleArray([2, 4, 8]);
console.log(result2);

const scream = function(sentence) {
    console.log(`${sentence}!!!`);
};

const result3 = scream("Bees");
console.log(result3); */
// result3 = undefined

// Checking if a number is big

const checkingBigNumber = function (number) {
    if(number > 100) {
        return "true";
    } else {
        return "false";
    } 
};

console.log(checkingBigNumber(150));
console.log(checkingBigNumber(25));

// Bouncer at a club
const maxPeople = 100;
const minAge = 18;
const bouncerBotBrenda = function (currentPeople, personsAge) {
    if(personsAge > minAge && currentPeople < maxPeople) {
        return "come in";
    } else if(personsAge < 18) {
        return "this is a club for adults";
    } else if(currentPeople >= 100) {
        return "it's too busy now, come back later";
    }
};

console.log(bouncerBotBrenda(150, 20));
console.log(bouncerBotBrenda(20, 15));
console.log(bouncerBotBrenda(90, 20));
console.log(bouncerBotBrenda(100, 43));

// Calculating the average

const calculateAverage = function (number1, number2, number3, number4, number5) {
    return Math.round((number1 + number2 + number3 + number4 + number5)/5);
};

console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(10, 20, 13, 64, 15));
console.log(calculateAverage(2, 2, 2, 2, 2));
console.log(calculateAverage(115, 290, 310, 140, 580));

