const fs = require("fs");
const child_process = require("child_process");
// Node提供child_process模块来创建子进程，方法有：exec\spawn\fork

// child_process.exec使用子进程执行命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回
/*for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.exec(
    "node support.js " + i,
    (err, stdout, stderr) => {
      if (err) {
        console.log(err.stack);
        console.log("Error code: " + err.code);
        console.log("Signal received: " + err.signal);
      }
      console.log("stdout: " + stdout);
      console.log("stderr: " + stderr);
    }
  );
  workerProcess.on("exit", code => {
    console.log("子进程已退出，退出码 " + code);
  });
}*/

// child_process.spawn使用指定的命令行参数创建新进程
/*for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.spawn("node", ["support.js", i]);
  workerProcess.stdout.on("data", data => {
    console.log("stdout: " + data);
  });
  workerProcess.stderr.on("data", data => {
    console.log("stderr: " + data);
  });
  workerProcess.on("close", code => {
    console.log("子进程已退出，退出码 " + code);
  });
}*/

// child_process.fork是spawn()方法的特殊形式，用于创建进程
for (var i = 0; i < 3; i++) {
  var workerProcess = child_process.fork("support.js", [i]);
  workerProcess.on("close", code => {
    console.log("子进程已退出，退出码 " + code);
  });
}
