const prompt = require("prompt-sync")({sigint:true});
let a = prompt("What is your age ??");
a = Number.parseInt(a);
console.log(typeof(a));
if(a > 0){
    // console.log("You can drive.")
}

console.log("You can", (a<18 ? "not drive.": "drive."))