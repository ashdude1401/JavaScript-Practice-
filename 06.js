//String template or String interpolation 
let firstName ="Ashutosh";
let age=21;
let aboutMe="My Name is " + firstName + " and I am "+age +" old";
console.log(aboutMe);
//Istead I can use string template which has $ {placeHolder} for the variable
let aboutMe2=`My Name is ${firstName} and I am ${age} old`;
console.log(aboutMe2);