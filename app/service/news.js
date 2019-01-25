const Service = require('egg').Service;

class NewsService extends Service {
  
  /**
   * 新增新闻
   * @param {Object} payload 
   */
  async add(payload) {
    const result = await this.app.mysql.insert('news', {
      id: payload.id,
      title: payload.title,
      summary: payload.summary
    });
    return result;
  }

  /**
   * 获取新闻列表
   * @param {Number} page 
   */
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;

    // use build-in http client to GET hacker-news api
    const { data: idList } = await this.ctx.curl(`${serverUrl}`, {
      data: {
        orderBy: '"$key"',
        startAt: `"${pageSize * (page - 1)}"`,
        endAt: `"${pageSize * page - 1}"`,
      },
      dataType: 'json',
    });

    return idList;

    // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );

    // return newsList.map(res => res.data);
  }

  /**
   * 获取新闻详情
   */
  async find(id) {
    const newsItem = this.app.mysql.get('news', { id: id });
    return newsItem;
  }
}

module.exports = NewsService;