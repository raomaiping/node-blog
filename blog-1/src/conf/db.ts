const env = process.env.NODE_ENV; //环境参数

interface MysqlConf {
  host: string,
  user: string,
  password: string,
  port: number,
  database: string,
}

interface RedisConf {
  port: number,
  host: string,
}
//配置
export let MYSQL_CONF:MysqlConf;
export let REDIS_CONF:RedisConf;

if (env === "dev") {
  //mysql
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "19980408abcd",
    port: 3306,
    database: "myblog",
  };

  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}

if (env === "production") {
  MYSQL_CONF = {
    host: "localhost",
    user: "root",
    password: "19980408abcd",
    port: 3306,
    database: "myblog",
  };

  //redis
  REDIS_CONF = {
    port: 6379,
    host: "127.0.0.1",
  };
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
};
