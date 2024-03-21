const prompt = require("prompt-sync")({sigint:true});
// let age = prompt("What is your age ?")
// age = Number.parseInt(age)

// switch(age){
//     case 12:
//         console.log("Your age is", age)
//         break
//     case 13:
//         console.log("Your age is", age)
//         break
//     case 14:
//         console.log("Your age is", age)
//         break
//     case 15:
//         console.log("Your age is", age)
//         break
//     default:
//         console.log("Didn't get your age.")
// }


// let num = prompt("Enter the  number");
// num = Number.parseInt(num);

// if(num%2==0 && num%3==0){
//     console.log("Your number is devisible by 2 and 3.")
// }else{
//     console.log("Your number is not divisible by 2 and 3.")
// }

let age = 18
let a = age > 18 ? "You can drive." : "You can not drive";
console.log(a)