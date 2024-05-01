//one way
var a = "*"
for(let x=1;x<=5;x++){
    for(let y=1;y<=x;y++){
        process.stdout.write(a);
        if(x==y){
            console.log("")
        }
        
        
        
    }
    
}


//another way

for(let x = 1; x<=5; x++){
    var star = "";
    for(let y =1; y<=x; y++)
    {
        star = star + "* "
    }
    console.log(star)
}