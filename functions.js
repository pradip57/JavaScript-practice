//a block of reusable code used to perform specific task

function add(a,b){
    var a ,b;
  
    var sum = a + b;
    console.log(sum);
}


add(5,6);
add(5,8);


//task 2

function greet(name){
    console.log(`Hi ,${name} Please visit PIDARP TECH.`)
}

greet("Hari");
greet("Prakash");
greet("Anish");

//function expressions

var function1 = function add(x,y){
    console.log(x+y);
}
function1(5,7);

//anonymous function

var function2 = function(a,b){
    return a+b;

}

function1(6,7);

function sum(t,y){
    return (t+y);
}

console.log(sum(6,7));
