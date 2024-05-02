//string created with single or double quote
//length in string

let a = "Pradip Saapkota";
console.log(a.length);

//created string using backtick

let b = `Hello "my" name is pradip
sapkota. i am a student`;

b = b.toUpperCase();

console.log(b);

//indexOf: return first occurence of char if found //case sensative

//return -1 if char doesnot found

let c = b.indexOf("AM");

console.log(c);

//conversion of string into array

let d = Array.from(b);
console.log(d)


let afterMap = d.map((curV,index)=>{

    return `${curV} - ${index}`

})

console.log(afterMap)
