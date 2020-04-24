///////////get请求///////////////
/*var express = require("express");
var app = express();

// 使用express.static中间件来设置静态文件路径
app.use(express.static("public"));

app.get("/index.html", (req, res) => {
  // __dirname指向被执行文件index.html的绝对路径: F:\node-practice\express
  res.sendFile(__dirname + "/" + "index.html");
});

app.get("/process_get", (req, res) => {
  // 输出json格式
  var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});*/

///////////post请求///////////////
var express = require("express");
var app = express();
var bodyParser = require("body-parser"); // HTTP请求体解析中间件

// 解析文本格式
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 使用express.static中间件来设置静态文件路径
app.use(express.static("public"));

app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/process_post", urlencodedParser, (req, res) => {
  // 输出json格式
  var response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.send(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
