<template>
    <div class="news-post">
      <h3>{{ post.title }}</h3>
      <div v-html="post.content"></div>
    </div>
</template>

<script>
export default {
    name: 'news-list',
    props: ['post']
}
</script>

