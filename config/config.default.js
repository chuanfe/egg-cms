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

// config/config.default.js
exports.mysql = {
  client: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'mw112106',
    database: 'egg_cms',
  },
};