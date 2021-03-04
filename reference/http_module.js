const http = require("http");

// Create server
http
  .createServer((req, res) => {
    // Write response
    res.write("Hello World!");
    res.end();
  })
  .listen(5000, () => {
    console.log("Server is running...");
  });
