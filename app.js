
//compression
const zlib=require('zlib');
const fs=require('fs');
// const inputFile=fs.createReadStream("input.txt")
// const outputFile=fs.createWriteStream("input.txt.xz");

//pipe the createGzip() method  with the file we want to compress while creating an output file as a result of createzip()method
//inputFile.pipe(zlib.createGzip()).pipe(outputFile)

//Decompression
const inputFile1=fs.createReadStream("input.txt.xz");
const outputFile2=fs.createWriteStream("input2.txt");
inputFile1.pipe(zlib.createUnzip()).pipe(outputFile2);