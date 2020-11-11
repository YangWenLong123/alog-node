const { querySql, queryUser } = require("../db/mysql");

function login(username, password) {
  return querySql(
    `select * FROM al WHERE username='${username}' and password='${password}';`
  );
}

function findUser(username) {
  return queryUser(`select * FROM al WHERE username='${username}';`);
}

function getUserList() {
  return querySql(`SELECT * FROM al;`);
}

module.exports = {
  login,
  findUser,
  getUserList
};
