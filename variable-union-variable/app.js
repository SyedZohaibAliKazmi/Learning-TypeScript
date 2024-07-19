var arr = [6, "4", 3, 6];
// arr = [45 ,""]
// arr.push("sss");
// console.log(arr);
if (true) {
    var z = 4;
    //use z
    //   console.log(z.toFixed(4));
}
// else({
//   let y = "zohaib";
//   //use z
//   console.log(y.toUpperCase());
// }
// console.log("let: " + z); // Error: z is not defined in this scope
// ===============\===================\==========================\
// agar upper union may boolean add kardo to error nahi aayega 
// let test: number | string ;
// test = 45545;
// test = "shehzad";
// test = false
// let final = test
// console.log(test);
// =================\==========================\============================\
// Object littrel
var myObj = {
    name: "zohaib",
    age: 19,
    hobbies: [4, 5, 4, 5],
    test: true,
};
//   console.log(myObj.hobbies[1].toFixed(3)); //number
//   console.log(myObj.name.toLocaleUpperCase()); //string
//   console.log(myObj.age.toFixed(2)); //number
// =======\================\=================\===================\
// narrowing
// let myAge: string | number;
// myAge = "zohaib ali";
// console.log(myAge.toUpperCase());
// myAge = 60;
// console.log(myAge.toFixed(2));
// myAge = false;
var newAge = Math.random() > 0.6 ? "syed" : 60;
// newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "syed") {
    newAge.toUpperCase();
}
if (typeof newAge === "string") {
    newAge.toUpperCase();
}
else {
    newAge.toFixed(2);
}
console.log(newAge);
var position;
var progress;
progress = "pass";
progress;
