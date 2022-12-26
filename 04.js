//String 
// string are as they are in c and c ++ ,the only difference is that it a objects here
// has many function 
// Some them are .length,.trim(),.slice(),.toUpperCase,.toLowerCase
let firstName="   Ashutosh Jha    ";
console.log(firstName.length);
//.trim() gives the the new String ,by removing all the blanck spaces from beginning and also from end of whole string 
let secondName=firstName.trim();
console.log(secondName.length);
// The index to the beginning of the specified portion of stringObj.


// Returns a section of a string
let thirdName=firstName.slice(0,7);
console.log(thirdName);
let fourthName=firstName.slice(7);
console.log(fourthName);
