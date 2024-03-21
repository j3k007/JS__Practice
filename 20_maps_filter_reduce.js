let arr = [1,2,3,4,5,11]

// let a = arr.map((value, index, array) =>{
//     console.log(value, index, array)
//     return value + 1;
// })

// console.log(a)

// let a = arr.filter((value) => {
//     return value > 10;
// })

// console.log(a);

let a = arr.reduce((v1, v2) => {
    return v1 + v2;
})

console.log(a)