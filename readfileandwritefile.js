
//readfile by using readFile() and readFileSync()method
 const fs=require('fs');
// fs.readFile('./file.txt','Utf8',(err,data)=>{
//     if(err){
//         console.error(err);
//         return
//     }
//     console.log(data);
// })


const content="Write some content"
fs.writeFile('./file.txt',content,(err,data)=>{
    if(err){
        console.error(err);
        return
    }
    console.log(data);
})

