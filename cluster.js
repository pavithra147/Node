const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
