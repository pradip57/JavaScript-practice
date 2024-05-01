//assignment operator

var a = 8;
var b = 6;

//arithmetic operator

let c = a + b;
console.log(c);

let dec1 = 0.9;
let dec2 = 0.6;
let sum = dec1 + dec2;
console.log(sum.toFixed(0));  //also round off
console.log(sum.toFixed(1)); //after decimal 1 digits
console.log(sum.toPrecision(2)); //total of 2 digits
console.log(sum.toPrecision(1)); //round off


//string operator : concatenation (+)

var str1 = "Hi";
var str2 = " Boy";
console.log(str1 + str2);

//comparision operator

console.log(5 == 5);

console.log('5'==5);

//strict equal
console.log('5'===5);

//not equal

console.log(5 != 6);

//greater than

console.log(5 > 4);

//smaller than

console.log(4 < 6);

console.log(5 <= "7");

console.log(5 <= "helo"); //error

//greater than or equal to

console.log(5 >= 5);

//less than or equal to

console.log(7 <= 10);

//logical operators

//logical AND(&&)

console.log(5>3 && 5<7);
console.log(5>3 && 5<4);

//logical OR(||)

console.log(5>4 || 5<4);

//logical NOT

let logc = false;
console.log(!logc);

//question


let age = 17;
let hadDrivingLiscene = true;

if(age >= 18 && hadDrivingLiscene == 1){

    console.log("Job in Company.")
}

else{
    console.log("Sorry, You are not selected");

}


//ternary operators(conditional operator)

// (condition)?trueblock:falseblock;

let number1 = 51;
let number2 = 86;
let number3 = 72;

(number1 > number2) ? ((number1 > number3) ? console.log(number1 + " is greatest.") :console.log(number3 + " is greatest.")): ((number2 > number3)?console.log(number2 + " is greatest."):console.log(number3 + " is greatest.")) 


