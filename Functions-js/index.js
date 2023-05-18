'use strict';

// // function declaration
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }

// const age1 = calcAge1(1999);

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// // Arrow function

// const calcAge3  = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1980);
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `You are ${firstName}. You will retire in ${retirement} years.`;
// }

// const retirementYear = yearsUntilRetirement(1991, 'Jonas');
// console.log(retirementYear)

function CutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = CutFruitPieces(apples);
    const orangePieces =  CutFruitPieces(oranges);
    
    const juice  = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}
const fruitProject = fruitProcessor(2, 3);
console.log(fruitProject);
