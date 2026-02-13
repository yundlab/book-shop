// mysql 모듈 소환
const mariadb = require('mysql2');

// DB와 연결 통로 생성
const connection = mariadb.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'BookShop',
    dateStrings : true
}); // 모듈화 하기위해 변수로 지정

module.exports = connection ;