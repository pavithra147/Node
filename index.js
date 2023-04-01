//path module
const path=require("node:path") //here node represents the built-in module
console.log(__filename);
console.log(__dirname);               // once the module is loaded we can use properties  and methods of the module


//methods in path module
console.log(path.basename(__filename)); //this basename() gives the last term
console.log(path.basename(__dirname));


console.log(path.extname(__filename)); //this extname() gives the extension
console.log(path.extname(__dirname));

console.log(path.parse(__filename));  //it will give some object of that path
console.log(path.format(path.parse(__filename))); 

console.log(path.isAbsolute(__filename)); 
console.log(path.isAbsolute('./data.json'))  //it is relative 


// const add=(a,b)=>{
//     return  a+b;
// }

// const sum=add(2,5)
// console.log(sum);


//scope
// (function(){
//     const car="Benz";
//     console.log(car);
// })();

// (function(){
//     const car="Aadi";
//     console.log(car);
// })();

// const data =require('./data.json')
        //or
const data =require('./data')
console.log(data);
// require('/eventLoop')
// const fs=require('fs');                           //this is the way to handle the errors in callback function
// fs.readFile('/eventLoop',(err,data)=>{
//     if(err){
//         console.log("error",err);
//         return
//     }
//     else{
//         console.log("data",data);
//     }
// })

