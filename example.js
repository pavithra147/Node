

require('./index')
var name='pavithra';
console.log(name);
//require() method is used to import in Node.js
const http=require('http')   //this includes the http module
const hostname = '127.0.0.1'
const port=3000;
const server=http.createServer((req,res)=>{         //createserver() this is the method of http creates a new HTTP server and returns it
    res.statusCode=200                               //when new request is received request event is called it provide two objects "request(http.IncomingMessage) object" and "response(http.serverResponse)object"
    res.setHeader('content-Type','text/plain')
    res.end('Hello World')                           //Two objects are essential to handle the http call
})

server.listen(port,hostname,()=>{    //server is set to listen the specific port and host name. When the server is ready, the callback function is called in this case informing us that server is running
console.log(`server running at http://${hostname}:${port}/`)
})

//passing arguments from the command line
process.argv.forEach(function (val, index) {
    console.log(`${index}` + ': ' + `${val}`);
  });

const args = process.argv.slice(2)
args['name']


//output to the command line using node.js
console.log('My %s has %d years', 'cat', 2)
console.log('%o', Number)    //%s format a variable as a string ,%d is format a variable as a number ,%i format a variable as its integer part only, %o format a variable as an object

//console.count()
const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})

const ProgressBar = require('progress')

const bar = new ProgressBar(':bar', { total: 10 })
const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)


const car={name:'Benz'}
exports.car=car

const item=require('./example').car
console.log(item)