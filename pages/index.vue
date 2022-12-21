<template>
  <v-row justify="center" align="center">
    <v-card class="py-4 d-flex justify-center align-center row flex-wrap">
      <div
        class="posts"
        v-for="post of posts"
        :key="post.id"
      >
        <PostItem
          :post="post"
        ></PostItem>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import PostItem from "~/components/post-item";

export default {
  async fetch({store}) {
    if (!store.getters['posts/posts'].length) {
      await store.dispatch('posts/fetch');
    }
  },
  name: 'IndexPage',
  components: {
    PostItem,
  },
  computed: {
    posts() {
      return this.$store.getters['posts/posts'];
    },
  },
}
</script>

<style scoped lang="scss">
.posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
