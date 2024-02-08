const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the reponse body
  res.end('Hello Holberton School!');
});

// Listen on port 1245
server.listen(1245);

// Export the server variable
module.exports = server;
