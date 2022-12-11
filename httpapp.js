const http = require("http");
const server1 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }

  if (req.url === "/api") {
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
});
server1.listen(3000);
console.log("Server has started in port 3000");
