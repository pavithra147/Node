// const bar = () => console.log('bar')
//                                             // event loop uses call stack(last in first out)
//                                             //event continuously checks the call stack is any function needs to run
// const baz = () => console.log('baz')
//                                               //In this ,first foo() got enter into the call stack then console.log('foo').It got first executed and then bar() got enter then console.log('bar).it got executed then the bar() got empty 
// const foo = () => {
//   console.log('foo')
//   //setTimeout(bar, 0)
//   bar()
//   baz()
// }

// foo()


// const bar = () => console.log('bar')

// const baz = () => console.log('baz')

// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 0)
//   new Promise((resolve, reject) =>
//     resolve('should be right after baz, before bar')
//   ).then(resolve => console.log(resolve))
//   baz()
// }

// foo()



// console.log("one");
// process.nextTick(()=>console.log("this is process.next 1"));        //it is the callback which will handle at microtask queue's (next tick queue) this will callback will execute first
// console.log("two");


Promise.resolve().then(()=>{console.log("this is Promise.resolve");
process.nextTick(()=>console.log("nextTick 1"));

}); //then only the promise tick of microtask queue will execute.If this promise tick queue  will execute
//process.nextTick(()=>console.log("nextTick 1"));


setTimeout(()=>console.log("setTimeOut 1"));
setTimeout(()=>{console.log("setTimeOut 2");
process.nextTick(()=>console.log("inner nextTick inside timer"))});
setTimeout(()=>console.log("setTimeOut 3"));
// process.nextTick(()=>console.log("this is process.next 1"));  
// process.nextTick(()=>{console.log("this is process.next 2");
// process.nextTick(()=>{console.log("inner process.nextTick")});})
// Promise.resolve().then(()=>console.log("this is Promise 1"));
// Promise.resolve().then(()=>{console.log("this is Promise 2");
// Promise.resolve().then(()=>console.log("inner Promise")); });  
// setImmediate(()=>console.log("setImmediate"))                   //to queue a callback function into the check queue. we can use a function called setImmediate()
// //setTimeout(()=>console.log("setTimeOut "),0);
const fs=require("fs");
// fs.readFile(__filename,()=>{
//     console.log("readfile");
// })

// fs.readFile(__filename,()=>{
//     console.log("readfile 1");
//     setImmediate(()=>console.log("inner setImmediate"))   ;
// })

// fs.readFile(__filename,()=>{
//     console.log("readfile 2");
//     setImmediate(()=>console.log("inner setImmediate 2"))   ;
//     process.nextTick(()=>console.log("inner nextTick inside timer"));
//     Promise.resolve().then(()=>console.log("this is Promise "));
//     setTimeout(()=>console.log("setTimeOut "),0);
// })

// fs.readFile(__filename,()=>{
//     console.log("readfile 2");
    
//     setImmediate(()=>console.log("inner setImmediate 2"))   ;
//     process.nextTick(()=>console.log("inner nextTick inside timer"));
//     Promise.resolve().then(()=>console.log("this is Promise "));
    
// })

//close queue
// 