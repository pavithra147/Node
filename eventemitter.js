const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

// eventEmitter.on('start',()=>{    //on add callback that going to be executed when the event is triggered
//     console.log("started");
// })

// eventEmitter.emit('start')   //emit triggers the event


//we can pass arguments to the event handler
eventEmitter.on('start', (string,number)=>{
    console.log(`${string},My Age is ${number}`);
})
eventEmitter.emit('start',"Hello",23)


eventEmitter.on("vehicle",()=>{
  console.log("Vehicle type is car");
})

eventEmitter.on("vehicle",()=>{
  console.log("vehicle type is bike");
})
const eventName=eventEmitter.eventNames();
console.log(eventName);

eventEmitter.setMaxListeners(2);
eventEmitter.on("number",()=>{
  console.log("one");
})
eventEmitter.on("number",()=>{
  console.log("two");
})
eventEmitter.on("number",()=>{
  console.log("three");
})
const maxListeners=eventEmitter.getMaxListeners();
console.log(`${maxListeners}`);


//emitter.once()
eventEmitter.once('wish',(words)=>{
  console.log(`Hello,${words}`);
})

eventEmitter.once('wish',(words)=>{
  console.log(`Hello,${words}`);
})

eventEmitter.emit('wish',"Welcome")

eventEmitter.emit('wish',"Everybody")






