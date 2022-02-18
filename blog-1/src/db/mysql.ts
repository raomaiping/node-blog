import mysql from "mysql";

import { MYSQL_CONF } from "../conf/db";

//创建链接对象
const con = mysql.createConnection(MYSQL_CONF);

//开始链接
con.connect();

//统一执行 sql的函数
export function exec<T>(sql: string): Promise<T> {
  const promise: Promise<T> = new Promise((resolve, reject) => {
    con.query(sql, (err, result: T) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  return promise;
}
