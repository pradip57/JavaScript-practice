//reduce((acc,curValue,Index),tempValue)

const price = [200,400,250,550]

const totalPrice = price.reduce((accu,current)=>{

    return accu + current

})

console.log(totalPrice)