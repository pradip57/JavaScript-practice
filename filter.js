// // const fruits = ["appre", "banpreana", "precherry", "mango", "orange"];

// // // const res = fruits.map((currentValue) => {
// // //   return (currentValue = currentValue + "1");
// // // });

// // // console.log(res);

// // const final = fruits.filter((currentValue)=>{

// //     return currentValue.includes('pre')
// // })

// // console.log(final)

const num = [2, 1, 3, 4, 6, 6, 4, 6, 4, 3, 8, 4, 2];
// const dupFilter = []

// for(let i =0;i<num.length;i++){
//     if(!(dupFilter.includes(num[i]))){

//         dupFilter.push(num[i])
//     }
// }

// console.log(dupFilter)

// const final = dupFilter.filter((currentValue)=>{

//     return currentValue > 3
// })

// console.log(final)

let unique = num.filter((currentVal, index, array) => {
  return array.indexOf(currentVal) === index;
});

console.log(unique);
const b = unique.sort((a, b) => b - a);
console.log(b);
