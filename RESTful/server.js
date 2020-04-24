var express = require("express");
var app = express();
var fs = require("fs");

// 创建RESTful API listUsers，用于读取用户的信息列表
/*app.get("/listUsers", function(req, res) {
  fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});*/

//添加的新用户数据
var user = {
  user4: {
    name: "mohit",
    password: "password4",
    profession: "teacher",
    id: 4
  }
};

// 创建RESTful API addUser，用于添加新的用户数据
app.get("/addUser", (req, res) => {
  fs.readFile(__dirname + "/" + "user.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8081, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
