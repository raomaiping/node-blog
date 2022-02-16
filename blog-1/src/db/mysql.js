const mysql = require("mysql");

const { MYSQL_CONF } = require("../conf/db");

//创建链接对象
const con = mysql.createConnection(MYSQL_CONF);

//开始链接
con.connect();

//统一执行 sql的函数
function exec(sql) {
  con.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(result);
  });
}

module.exports = {
  exec,
};
