const EventEmiter = require("events");
const http = require("http");

class Sales extends EventEmiter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a New Sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer Name: Esteban");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

///////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Recived!");
  console.log(req.url);
  res.end("Request Recived!");
});

server.on("request", (req, res) => {
  console.log("Another Request!");
});

server.on("close", (req, res) => {
  res.end("Server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request ...");
});
