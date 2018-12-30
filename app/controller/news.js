const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    // ctx.body = { dataList: newsList };
    // ctx.status = 201;
    await ctx.render('news/list.tpl', {list: newsList.data});
  }
}

module.exports = NewsController;