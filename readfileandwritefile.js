
//readfile by using readFile() and readFileSync()method
 const fs=require('fs');
// fs.readFile('./file.txt','Utf8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log(data);
// })


// const content="Write some content"
// fs.writeFile('./file.txt',content,(err,data)=>{
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log(data);
// })

//promises from fs module
// console.log("first");
 const file=require("fs/promises");

// file.readFile("file.txt","utf-8").then((data)=>console.log(data)).catch((error)=>console.log(error));
// console.log("second");


//async and await
async function readfile(){
    try{
        const files=await file.readFile("file.txt","utf-8")
        console.log(files);
    }
    catch(err){
       console.log(err);
    }
}
