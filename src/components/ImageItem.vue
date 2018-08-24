<template>
  <div class="image-item">
    <img :src="image.url" :alt="image.id" />
  </div>
</template>

<script>

export default {
  props: {
    image: Object
  }
};

</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
img {
  height: 200px;
}
</style>