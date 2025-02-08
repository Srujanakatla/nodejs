const http = require("http");
const port = 3100;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.method === "GET") {
    if (req.url === "/movies") {
      res.end(JSON.stringify({ page: "movies", message: "Welcome to Movies" }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Page not found" }));
    }
  } else if (req.method === "POST") {
    res.end(JSON.stringify({ message: "POST request received" }));
  } else {
    res.writeHead(405);
    res.end(JSON.stringify({ message: "Method Not Allowed" }));
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
