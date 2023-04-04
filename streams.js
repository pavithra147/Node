//COMPOSING WRITABLE STREAMS

/*A writable stream is created using "createWriteStream()" which requires the path of file to write as a parameter*/
//the below line createwritestream('./file.txt') creates file.txt in the directory with 100 lines of "Hello everybody, Welcome to Node.js"
const fs=require('fs');
// const fileStream=fs.createWriteStream('./file.txt');
// for(let i=0;i<=100;i++){
//     fileStream.write("Hello everybody, Welcome to Node.js\n")
// }

//COMPOSING READABLE STREAMS

/* "data" event handler will execute each time a chunk of data has been read*/
/*"end" event handler will execute once there is no more data */
const fileStream1=fs.createReadStream("./file.txt");
fileStream1.on('data',(chunk)=>{
    console.log(`Received ${chunk.length} bytes of data.`);
    //console.log("Read data: ",chunk.toString());
})
 .on("end",()=>console.log("No more data"));


 //COMPOSING TRANSFORM STREAMS
 //it have both readable and writable streams features.
 //it allows processing of input data  followed by outputting the data in the processed format

 //for this we have to import "transform" class from the Node.js stream module

 const { Transform } = require("stream");
 const fileStream= fs.createReadStream("./file.txt");
 const transformedData= fs.createWriteStream("./transformedData.txt");
 
 const uppercase = new Transform({
   transform(chunk, encoding, callback) {
     callback(null, chunk.toString().toUpperCase());
   },
 });
 
 fileStream.pipe(uppercase).pipe(transformedData);



 const writeStream = fs.createWriteStream('output.txt');

// listen for the finish event on the stream
writeStream.on('finish', () => {
  console.log('Data written to output.txt');
});

// listen for the error event on the stream
writeStream.on('error', (err) => {
  console.error(`Error writing file: ${err}`);
});

// write some data to the stream
writeStream.write('Hello, world!');
writeStream.end();