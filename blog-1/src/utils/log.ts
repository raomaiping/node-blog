import fs from "fs";
import path from "path";

// 写日志
const writeLog = (writeStream: fs.WriteStream, log: string): void => {
  writeStream.write(log + "\n"); //关键代码
};

//生成 write Stream
const createWriteStream = (fileName: string): fs.WriteStream => {
  const fullFileName = path.join(__dirname, "../", "../", "logs", fileName);
  const writeStrem = fs.createWriteStream(fullFileName, {
    flags: "a",
  });
  return writeStrem;
};

//写访问日志
const accessWriteStrem = createWriteStream("access.log");

export const access = (log: string): void => {
  writeLog(accessWriteStrem, log);
};
