const Controller = require('egg').Controller;

class NewsController extends Controller {
  /**
   * 新增新闻
   */
  async add() {
    const ctx = this.ctx;
    // 组装参数
    const payload = ctx.request.body || {};
    const news = await ctx.service.news.add(payload);
    //前台渲染
    ctx.body = { news: news }; 
    ctx.status = 201;
  }

  async rebderlist() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.rebderlist(page);
    //前台渲染
    // ctx.body = { dataList: newsList };
    // ctx.status = 201;
    //后台渲染
    await ctx.render('news/list.tpl', {list: newsList.data});
  }

  /**
   * 获取新闻详情
   */
  async list() {
    const ctx = this.ctx;
    const id = ctx.query.id || 1;
    const newsList = await ctx.service.news.list(id);
    ctx.body = { data: newsList };
    ctx.status = 201;
  }

  /**
   * 获取新闻详情
   */
  async find() {
    const ctx = this.ctx;
    const id = ctx.query.id || 1;
    const newsItem = await ctx.service.news.find(id);
    ctx.body = { newsItem: newsItem };
    ctx.status = 201;
  }
}

module.exports = NewsController;