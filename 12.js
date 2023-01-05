//Taking user input using prompt with take input as a string 
const var1=35;
const var2=prompt("Tell me a number");
console.log(var2,typeof var2);
//Number you entered is a string ,so you can make it number by adding "+"before it
const var3=+var2;
if(var3>var1){
    console.log("You entered a number which greater than 35");
}
else {
    console.log("You entered a number which lesser than 35");
}