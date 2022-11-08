let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let multipleOfThree = someNumbers.some(checksMultiple);

function checksMultiple(number){
    return number % 3 === 0;
}

let multipleOfFive = someNumbers.some(checksMultiple);

function checksMultiple(number){
    return number % 5 === 0;
}

let multipleOfSixty = someNumbers.some(checksMultiple);

function checksMultiple(number){
    return number % 60 === 0;
}

let multipleOfNinty = someNumbers.some(checksMultiple);

function checksMultiple(number){
    return number % 90 === 0;
}