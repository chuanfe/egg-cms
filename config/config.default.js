exports.keys = '12345678';
//添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://cnodejs.org/api/v1/topics',
};

// windows数据库
exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'egg_cms',
  },
};

// mac数据库
// exports.mysql = {
//   client: {
//     host: '127.0.0.1',
//     port: '3306',
//     user: 'root',
//     password: 'mw112106',
//     database: 'egg_cms',
//   },
// };

// 腾讯云数据库
// exports.mysql = {
//   client: {
//     host: 'cdb-pqrvrcna.bj.tencentcdb.com',
//     port: '10093',
//     user: 'root',
//     password: 'mysql112106',
//     database: 'egg_cms',
//   },
// };


// 跨域配置
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['*']
};

exports.cors = {
  origin:'*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};