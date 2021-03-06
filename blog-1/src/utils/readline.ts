import fs from "fs";
import path from "path";
import readline from "readline";

// 文件名
const fileName = path.join(__dirname, "../", "../", "logs", "access.log");

// 创建 read stream
const readStream = fs.createReadStream(fileName);

//创建 readline 对象
const rl = readline.createInterface({
  input: readStream,
});

let chromeNum = 0;

let sum = 0;

// 逐行读取
rl.on("line", (lineData) => {
  if (!lineData) {
    return;
  }
  //记录行数
  sum++;

  const arr = lineData.split(" -- ");
  if (arr[2] && arr[2].indexOf("Chrome") > 0) {
    //累加chrome
    chromeNum++;
  }
});

rl.on("close", () => {
  console.log("Chrome 占比", chromeNum / sum);
});
