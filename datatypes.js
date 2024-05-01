var a = 5;
console.log(typeof a);

console.log(typeof(a));

let b = 'Pradip';
console.log(typeof(b));

let c;
console.log(typeof(c));

let d = null;
console.log(typeof d);

//conversion of string to number
console.log(typeof +a);


//conversion of number to string
var myN = 5;
console.log(typeof myN);

console.log(typeof (myN + ''));


//truthy and falsy values in js

var myName = "Hero";
if(myName){
    console.log("Truthy values");
}
else{
    console.log("Falsy values");
}

var myName = "";
if(myName){
    console.log("Truthy values");
}
else{
    console.log("Falsy values");
}


var myName = undefined;
if(myName){
    console.log("Truthy values");
}
else{
    console.log("Falsy values");
}

var myName = null;
if(myName){
    console.log("Truthy values");
}
else{
    console.log("Falsy values");
}

var myName = -9;
if(myName){
    console.log("Truthy values");
}
else{
    console.log("Falsy values");
}

//parseInt and parseFloat

const str1 = "45.7";
var num2 = parseInt(str1);
console.log(typeof num2);

const str2 = "45";
var num1 = parseInt(str1);
console.log(typeof num1);
console.log(num2);

//concatenation in js

var firstName = "Pradip";
var lastName = " Sapkota";

console.log(firstName + lastName);


var str4 = "5";
var num4 = 6;
console.log(num4 - str4);