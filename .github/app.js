var http = require("http");

http.createServer(
		function handler (request, response)
		{
			response.writeHead(200, {'Content-Type': 'text/plain'});
			
			response.end('Hello Siddesh');
		}
).listen(8081,'127.0.0.1');

console.log('Server is up and running');

