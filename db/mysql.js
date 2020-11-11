const mysql = require("mysql");
// mysql连接配置
const config = require("./config");
const { debug } = require("../utils/constant");

function connect() {
  const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    port: config.port,
    database: config.database
  });
  db.connect();

  return db;
}

function querySql(sql) {
  const con = connect();

  debug && console.log(sql);
  return new Promise((resolve, reject) => {
    try {
      con.query(sql, (err, results) => {
        if (err) {
          debug && console.log("查询失败，原因：" + JSON.stringify(err));
          reject(err);
        } else {
          debug && console.log("查询成功，" + JSON.stringify(results));
          resolve(results);
        }
      });
    } catch (e) {
      reject(e);
    } finally {
      con.end();
    }
  });
}

function queryUser(sql) {
  return new Promise((resolve, reject) => {
    querySql(sql)
      .then(results => {
        if (results && results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  querySql,
  queryUser
};
