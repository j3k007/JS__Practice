function onePlusAvg(x, y){
    console.log("Done")
    return Math.round(1 + (x + y)/2)
}

const sum = (a,b) => {
    return a + b
}

let a = 1
let b = 2
let c = 3

console.log("One plus avg of a and b ", onePlusAvg(a,b))
console.log("One plus avg of a and b ", onePlusAvg(b,c))
console.log("One plus avg of a and b ", onePlusAvg(c,a))
console.log(sum(2,9))
