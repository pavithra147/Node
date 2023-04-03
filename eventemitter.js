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
const listeners=eventEmitter.listeners('vehicle')
listeners.forEach(listenername=>console.log(listenername))








