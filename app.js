const http = require('http');
const os = require('os');
let server = function (request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Count for hits -> " + os.hostname() + "\n");
};
let kubernetesCluster = http.createServer(handler);
kubernetesCluster.listen(8080);
