//create buffer
//Buffer can create using Buffer.from(),Buffer.alloc(),Buffer.allocUnsafe()methods
const buf=Buffer.from('Hello')
//we can initialize the buffer by passing size.
const buffer=Buffer.alloc(1024)
const buffer2=Buffer.allocUnsafe(1024)

/*Access content of buffer*/
//a buffer being an array of bytes, it can be accessed like an array
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf[3]);
console.log(buf[4]);
/*Buffer.from() uses UTF-8  by default
// output will be in UTF-8 bytes this identifies the characters in buffer(H-72,e-101,l-108,l-108,o-111)*/


//To print the full content of the buffer use  toString() ,toString() also uses UTF-8 by default
console.log("content in buf",buf.toString());


//LENGTH OF A BUFFER
console.log("buf length",buf.length);

//ITERATE OVER THE CONTENTS OF BUFFER
for(const item of buf){
    console.log("items",item);
}

//CHANGING THE CONTENT OF THE BUFFER
//using write() method we can write for whole string of data in buffer
const buf1=Buffer.alloc(5);
buf1.write("Everything");

console.log(buf1);
console.log(buf1.toString());

buf1[2]=111;
console.log("after changed the content",buf1.toString());


//SLICE TO A BUFFER
//Using subarray()
console.log(buf1.subarray(0).toString());
console.log((buf1.subarray(0,4)).toString());


//COPY A BUFFER
/*copying a buffer using set() method */
const buf2=Buffer.alloc(8)
console.log(buf2.set(buf1).toString())
//If you copy a part of array use .subarray() and offset
const buf3=Buffer.from('Good')
buf3.set(buf1.subarray(0,3),0);
buf3.toString();
