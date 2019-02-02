module.exports = app => {
    const { router, controller } = app;
    router.get('/api', controller.home.index);
    router.get('/api/news/rebderlist', controller.news.rebderlist);
    router.post('/api/news/add', controller.news.add);
    router.get('/api/news/list', controller.news.list);
    router.get('/api/news/get', controller.news.find);
    router.get('/api/user/find', controller.user.find);
    router.get('/api/user/add', controller.user.add);
};