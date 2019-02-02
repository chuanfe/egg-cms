const Controller = require('egg').Controller;
const path = require('path');
const fs = require('mz/fs');

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world'+this.config.static.dir;
        // const url = "http://cdn.server.host/mysite/index.html";
        // const result = await this.ctx.curl(url);
        // return result.data;
        // const tpl = path.join(this.config.static.dir, "index.html");
        // this.ctx.body = await fs.readFile(tpl, 'utf-8');
    }
} 

module.exports = HomeController;