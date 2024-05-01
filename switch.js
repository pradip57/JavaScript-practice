var day = "Monday"

switch(day){
    case "Sunday":
        console.log("I am sunday.");
        break;

    case "Monday":
        console.log("I am monday.");
        break;

    default:
        console.log("Hi i am default")
}


//qsn

var shape = "Square"
var a = 5;
var b = 6;

const PI = 3.14

switch(shape){
    case "Rectangle":
        
        console.log("Area :",(a*b));
        break;

    case "Circle":
        var r = 5;
        console.log("Area :",(PI * r*r));
        break;

    case "Square":
    
        console.log("Area :",(a*a));
        break;

    default:
        console.log("Sorry");
}
