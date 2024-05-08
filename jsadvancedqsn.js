//question 1
//print from a to z

for (i = 97; i < 123; i++) {
  console.log(String.fromCharCode(i));
}

//qsn 2
//write a to count the number of vowels in strings

let str = "AERoplane";
let vowels = ["a", "e", "i", "o", "u"];
let strL = str.toLowerCase();
let strLA = strL.split("");
let counter = 0;

for (let i = 0; i < strLA.length; i++) {
  if (vowels.includes(strLA[i])) {
    counter += 1;
  }
}

console.log(`Total no of vowels in "${str}" : ${counter}`);
//qsn 3
//check either string contains vowels or not 

let str1 = "jljfgldkjl is gd by"
let vowels1 = ["a", "e", "i", "o", "u"];
let strL1 = str1.toLowerCase();
let strLA1 = strL1.split("");
let counter1 = 0

for (let i = 0; i < strLA1.length; i++) {
    if (vowels1.includes(strLA1[i])) {
      counter1 += 1;
    }
  }

if(counter1){
    console.log("true")
}

else{
    console.log("false")
}