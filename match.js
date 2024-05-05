//match and matchAll method is oly for string

const a = [5,4,6,7,8,9,5,3,4,3]


let b = ""

for(let  i=0;i<a.length;i++){

    b = b + a[i]
}

console.log(b)

let d = b.match(/5/g) //checks how many times it appears
console.log(d)