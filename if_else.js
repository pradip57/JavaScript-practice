let a = 70;

if(a < 60){
    console.log("yes");
}

else{
    console.log("no");
}

//question


let userAge = 23;
let isCitizen = true;
let isRegistered = false;

// if(userAge >= 18 && isCitizen == true && isRegistered == true){

//     console.log("You are elligible for voting.")
// }

// else if(userAge >= 18 && isCitizen == false && isRegistered == true){
//     console.log("You are not elligible for voting due to citizenship status.")
// }

// else if(userAge >= 18 && isCitizen == true && isRegistered == false){
//     console.log("You are not elligible for voting due to registration status.")
// }

// else{
//     console.log("You are not elligible for voting.")
// }


//second style

if(userAge >= 18){

    if(isCitizen == true){
        if(isRegistered == true){
            console.log("You are elligible for voting.");
        }
        else{
            console.log("You are not elligible due to registration status.");
        }
    }

    else{
        if(isRegistered == true){
            console.log("You are not elligible for voting due to citizenship status.");
        }
        else{
            console.log("You are not elligible due to citizenship and registration status.");
        }
    }
}

else{
    console.log("You are not elligible for voting");
}


//even or odd

var num = 8;

if(num % 2 ==0){
    console.log("even");
}

else{
    console.log("odd");
}

//prime or not

var num2 = 52;
var count = 0;

for(i= 1;i<=num2;i++){
    if(num2 % i == 0){
    
        count++;
    
    }


}



if(count > 2){
    console.log("Composite")
}

else{
    console.log("Prime")
}


