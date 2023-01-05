//Game ,winning Number is 19
//17, too loo
// 19,too high
console.log("Price amount $100");
let price =100;
console.log("For each wrong attemp 5 doller will be deducted");
let number= + prompt("Enter a number");
while(number!==18){
     number= + prompt("Enter a number");
    if(number<18){
        console.log("too low -5");
    }
    else{
        console.log("too high -5");
    }
    price-=5;
}
if(price>0){
    console.log(`you won ${price} amount `);
}
else{
    console.log(`you have to pay ${price} `);
}

