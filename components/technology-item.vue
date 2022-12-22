<template>
  <div>
    <img :src="itemImage">
    <span>{{ item.name }}</span>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: "technology-item",
  props: [
    'tech',
  ],
  setup(props) {
    const item = ref(props.tech);
    const itemImage = computed(() => {
      return item.value.image ? require(`@/assets/images/${item.value.image}`) : '';
    });

    return {
      item,
      itemImage,
    };
  }
}
</script>

<style scoped lang="scss">
div {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-areas: 'image title' 'description description';
  gap: 10px;
  max-width: 250px;
  height: 120px;
  margin: 0 auto;
  align-items: center;
  align-self: center;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    background-color: white;
    grid-area: image;
  }

  span {
    font-size: 22px;
    grid-area: title;
    vertical-align: bottom;
  }

  p {
    font-size: 16px;
    grid-area: description;
    width: 100%;
  }
}
</style>
