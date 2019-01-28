var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    handleSubmit () {
      var params = {
        id: '4',
        title: 'mw',
        abstract: '真好看1'
      }
      $.ajax({
        url: 'http://10.1.200.10:7001/news/add',
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