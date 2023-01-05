//BigInt it can Contain numbers greater than limit of js number data type
console.log(Number.MAX_SAFE_INTEGER);
//Gives the max range of number in js
let numBer1=09504504285080235894;
console.log(numBer1);
let numBer= BigInt(09504504285080235894);
console.log(numBer);
//It can also hold small values
let newNum=BigInt(25);
console.log(newNum);
let otherNum=36n;
let sum=newNum + otherNum;
console.log(sum);
//You can perform any operation between two Bigints 
//bigInt with some other number operation not allowed 
let ranNum=67;
let sum2;
sum2=newNum+ranNum;
//Error:Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(sum2);