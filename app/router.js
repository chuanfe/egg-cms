module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news/list', controller.news.list);
    router.get('/news/add', controller.news.add);
    router.get('/user/find', controller.user.find);
    router.get('/user/add', controller.user.add);
};