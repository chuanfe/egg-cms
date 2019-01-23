const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 新增用户
   * @param {Object} payload 
   */
  async add(payload) {
    const result = await this.app.mysql.insert('users', {
      uid: payload.id,
      name: payload.name
    });
    return result;
  }
  /**
   * 查找用户
   */
  async find(uid) {
    const user = this.app.mysql.get('users', { uid: uid });
    return user;
  }
}

module.exports = UserService;