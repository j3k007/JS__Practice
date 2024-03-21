const fruit = ["Apple", "Orange", "Mango", "Lemon"];
// console.log(typeof(fruit));
// console.log(fruit.length);
// fruit.forEach(element => {
//     console.log(element)
// });
// console.log(Array.isArray(fruit));
// console.log(fruit.toString());

// console.log(fruit.shift())
// fruit.unshift("Lemon");
// delete fruit[0];
// fruit.copyWithin(2,0,2);
// const newArr = fruit.flat();
fruit.splice(0,1,"Watermelon");
console.log(fruit)