<template>
  <div class="post-item">
    <span class="title">{{ post.title }}</span>
    <span class="body">{{ post.body }}</span>
    <div class="more-info">
      <button @click="switchShowMore" class="show-details">
        Show more
      </button>
    </div>

    <CustomModal v-if="showMore" @closeModal="switchShowMore">
      <template v-slot:header>
        <span class="title">More details</span>
        <button class="close-modal" @click="switchShowMore"><v-icon>mdi-close</v-icon></button>
      </template>
      <template v-slot:body>
        <span class="title">{{ post.title }}</span>
        <p class="body mt-4">{{ post.body }}</p>
      </template>
    </CustomModal>
  </div>
</template>

<script>
import CustomModal from "@/components/modal";

export default {
  data: () => ({
    showMore: false,
  }),
  name: "post-item",
  props: [
    'post',
  ],
  components: {
    CustomModal,
  },
  computed: {
    switchShowMore() {
      return () => {
        this.showMore = !this.showMore;
      }
    },
  },
}
</script>

<style scoped lang="scss">
.post-item {
  margin: 10px;
  width: 250px;
  height: 250px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  cursor: default;
  position: relative;

  &>span {
    width: 100%;
    display: block;
    word-break: break-all;

    &.title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 5px;
      text-align: start;
    }

    &.body {
      font-size: 14px;
      text-align: justify;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      line-clamp: 4;
      box-orient: vertical;
    }
  }

  .more-info {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    border-radius: 10px;
    opacity: 0;

    button {
      background-color: #1E1E1E;
      padding: 15px;
      border-radius: 10px;
      cursor: pointer;
      text-transform: uppercase;
    }
  }

  &:hover {
    .more-info {
      opacity: 1;
    }
  }
}
</style>
