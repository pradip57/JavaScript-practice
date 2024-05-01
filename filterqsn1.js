const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];

const filter1 = products.filter((currentValue) => {
return currentValue.price <= 500
});

console.log(filter1);
