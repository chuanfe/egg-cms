
// import NewsList from './components/message/list'
// 定义一个名为 button-counter 的新组件
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

Vue.component('news-post', {
  props: ['post'],
  template: `
    <div class="news-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    newsList: [{
      title: 'title',
      content: 'content'
    }]
  },
  mounted: function() {
    this.renderNewsList();
    $.ajax({
      url: '/api/news/get',
      type: 'GET',
      // data: params,
      dataType: 'json',
      success: function(res) {
        console.log(res)
      }
    })
  },
  methods: {
    renderNewsList () {
      var self = this;
      $.ajax({
        url: '/api/news/list',
        type: 'GET',
        // data: params,
        dataType: 'json',
        success: function(res) {
          setTimeout(() => {
            self.newsList = res.data
          }, 1000);
          
          console.log(res)
        }
      })
    },
    handleSubmit () {
      var params = {
        id: '4',
        title: 'mw',
        abstract: '真好看1'
      }
      $.ajax({
        url: '/api/news/add',
        type: 'POST',
        data: params,
        dataType: 'json',
        success: function(res) {
          console.log(res)
        }
      })
    }
  }
})

