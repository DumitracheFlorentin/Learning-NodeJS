const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;

  //         res.writeHead(200, { "Contant-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;

  //         res.writeHead(200, { "Contant-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   } else if (req.url === "/api/users") {
  //     const users = [
  //       { name: "bob", age: 40 },
  //       { name: "alex", age: 30 },
  //     ];

  //     res.writeHead(200, { "Contant-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  // Build file path dynamic
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of a file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/js";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // ENOENT = page isn't found (404)
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Contant-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Server Error (500)
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Contant-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
