//match and matchAll method is oly for string

const a = [5, 4, 6, 7, 8, 9, 5, 3, 4, 3];

let b = "";

for (let i = 0; i < a.length; i++) {
  b = b + a[i];
}

console.log(b);

let d = b.match(/5/g); //checks how many times it appears
console.log(d);

//includes

let str1 = "My name is pradip sapkota";

console.log(str1.includes("prakt"));
console.log(str1.includes("pradip"));

console.log(str1.endsWith("sapkqota")); //

//replace


let rep = str1.replace("name","nam")

console.log(rep)
