# Client-Server Model Example (test repository)

This repository provides a simple example of a client-server model using HTML, CSS, and JavaScript. The client (frontend) sends a request to the server, and the server responds with a basic message.

## Files

### `index.html`

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client-Server Model</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Client-Server Model Example</h1>
        <button onclick="sendRequest()">Send Request to Server</button>
        <div id="response"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```
### Explanation
- This is the main HTML file containing the structure of the web page.
- It includes a button that, when clicked, triggers the `sendRequest` function.
- The response from the server is displayed in the `<div id="response"></div>`.

### `styles.css`
```` 
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#app {
    text-align: center;
}

button {
    padding: 10px;
    font-size: 16px;
    margin-top: 20px;
}

#response {
    margin-top: 20px;
}
````
### Explanation
- This file contains the CSS styles for the HTML elements.
- It centers the content on the page and defines the styling for the button and response div.

### `script.js`
````
function sendRequest() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var responseDiv = document.getElementById("response");
            responseDiv.innerHTML = "Server Response: " + xhr.responseText;
        }
    };

    xhr.open("GET", "http://localhost:3000/", true);
    xhr.send();
}
````
### Explanation
- The JavaScript file contains the `sendRequest` function, triggered by the button click.
- It uses an XMLHttpRequest to send a GET request to the server.
- Upon a successful response, it updates the content of the response div with the server's message.

### `server.js`
````
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
````
### Explanation
- The server-side script is written in Node.js and uses the built-in `http` module.
- It creates an HTTP server that listens for incoming requests.
- When receiving a GET request, it sets CORS headers, specifies the content type, and sends a simple "Hello from the server!" message.

## Usage

1. Clone this repository.
2. Open `index.html` in a web browser.
3. Click the "Send Request to Server" button to see the server's response.

**Note:** Make sure Node.js is installed to run the server script.

Feel free to explore and modify the code for learning purposes!

