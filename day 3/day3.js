// DATA TYPES IN JAVASCRIPT

// STRING
// NUMBER, INTEGER, FLOAT
// BIGINT
// BOOLEAN
// NULL (NO VALUE))
// SYMBOL
// undefined (NO VALUE)


// WHAT IS DATA?
// DATA IS ANYTHING THAT CAN BE CAPTURED OR RECORDED
// DATA + SOME PROCESSING = INFORMATION

// DATA TYPE -> DESCRIBES WHAT TYPES OF DATA WE ARE RECORDING

// 1) STRING

// STRING IS COMBINATION OF CHARACTERS, WRAPPED BY SINGLE OR DOUBLE QUOTES (' ' OR " ")
// (EXAMPLE) let firstName =('Enter  your first name');
// "enter your first name" IS THE 'string' HERE

let myName = 'Atal';
let salary = 999999;

// '  ' yesto comma vitra rakhne bitikai sab string value ma janxa number haru pani but comma rakherna vane number value ma auxa feri

// typesof (gives what type of value variable holds)
console.log(typeof myName);
console.log(typeof salary);

// NUMBER (FLOAT -> 1,2, 1,3)
// interger -> 100, 200

let number = 10.1; // (MORE GENERIC DATA TYPE -> NUMBER)
console.log(typeof number);

console.log(0.1 + 0.2);

let myNumber = 9007199254740991; // max
let myMinimumNuber = -9007199254740991; // min 
//console.log(myMinimumNumber);

let myBinary = 0b1010;
console.log(myBinary);
// binary ho vane aagadi 0b hunai paro

let myOctal = 0o100; //(0-7)
console.log(myOctal);
// octal ho vane agadi 0o hunai paro 


let muHex = 0xf; // (0 - 9, A, B, C D E F)
console.log(muHex);

// 3) BIG INT

let myBigInt = 1000n;
// n le Big Int bujauxa
// value jati ni rakhna paiyo compared to 41 line wala and overflow ni hudaina paxadi value ajai thapida agadi ko haraune
let myAnotherBigInt = 10000n;
console.log(myBigInt);
console.log(myAnotherBigInt);

// console.log(10n + 10) error (both type must be same)

//BOOLEAN

// either yes or no, true or false, 0 or 1 

// EXAMPLE 
let isMarried = true;
let canVote = false; // MORE WHEN WE GET INTO IF ELSE......

//UNDEFINE WALA CASE
let myVariable;
console.log(myVariable); //returns undefined (value is not defined)






