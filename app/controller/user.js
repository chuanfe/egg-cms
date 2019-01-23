const Controller = require('egg').Controller;

class UserController extends Controller {
  /**
   * 新增用户
   */
  async add() {
    const ctx = this.ctx;
    // 组装参数
    const payload = ctx.query || {}
    const user = await ctx.service.user.add(payload);
    //前台渲染
    ctx.body = { user: user };
    ctx.status = 201;
  }
  /**
   * 查找用户
   */
  async find() {
    const ctx = this.ctx;
    const id = ctx.query.id || 1;
    const user = await ctx.service.user.find(id);
    ctx.body = { user: user };
    ctx.status = 201;
  }
}

module.exports = UserController;