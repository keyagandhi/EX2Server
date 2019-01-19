const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


//http is an object and is rational pattern to create  design server and refer reference to new server object 
const server = http.createServer(function(req,res){
     //200 = ALL OK ON SERVER


     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/plain');
     res.end('Keya- 300964054\n');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  