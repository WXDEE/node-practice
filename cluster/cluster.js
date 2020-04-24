var cluster = require("cluster");
var http = require("http");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(numCPUs);

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log("worker " + worker.process.pid + " died");
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world\n");
    })
    .listen(8321);
}
