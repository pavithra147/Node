//GET request
// const https = require('https')
// const options = {
//   hostname: 'example.com',   //which contains the information about the request we want to make
//   port: 443,
//   path: '/index',
//   method: 'GET'
// }



// //sending the request and handle the response
// const req = https.request(options, res => {           //this request() method takes two arguments  one is options object and callback function to handle the response
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {                   //eventlistener  to the data event . this event is emitted whenever the server sends data
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()


//POST request
// const https=require('https'); 
// const postData= new TextEncoder().encode(JSON.stringify({      //textEncoder() is used to convert string to unit8Array  of arrays
//        Quotes:"All is Well"
// }))

// const option={
//     hostname: 'httpbin.org',
//     port: 443,
//     path: '/post',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': postData.length
//     }

    

// }
// const req=https.request(option,res=>{
//     console.log(`statuscode:${res.statuscode}`);

//     res.on('data',d=>{
//         process.stdout.write(d);
//     })

// })
// req.on('error', error => {
//     console.error(error)
//   })
// req.write(postData)
//   req.end()


  //PUT request
//   const https = require('https');

// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   path: '/posts/1',
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// const putData = JSON.stringify({
//   title: 'Updated Title',
//   body: 'Updated body text'
// });

// const request= https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);
  
//   res.on('data', (data) => {
//     console.log(data.toString());
//   });
// });

// request.on('error', (error) => {
//   console.error(error);
// });

// request.write(putData);
// request.end();


// DELETE Request
// const https = require('https');

// const options = {
//   hostname: 'jsonplaceholder.typicode.com',
//   path: '/posts/1',
//   method: 'DELETE',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// const putData = JSON.stringify({
//   title: 'Updated Title',
//   body: 'Updated body text'
// });

// const request= https.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);
  
//   res.on('data', (data) => {
//     console.log(data.toString());
//   });
// });

// request.on('error', (error) => {
//   console.error(error);
// });

// request.write(putData);
// request.end();



//Get HTTP request body data using Node.js . this can be get by using express also
const axios = require('axios')

axios.post('http://localhost:3000/todos', {
  todo: 'Buy the milk'
})
const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  
  // Handle incoming data chunks
  req.on('data', (chunk) => {
    body += chunk.toString()
  });

  // When the entire body is received
  req.on('end', () => {
    console.log(JSON.parse(body).todo);
 
    res.end('OK');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
