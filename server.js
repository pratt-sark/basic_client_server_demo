const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Set CORS headers to allow requests from any origin
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        // Endpoint for handling data request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from the server!');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
