const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
  const myURL = url.parse(req.url);
  console.log(myURL);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        res.end("About Page");
        break;
      default:
        res.end("404");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
