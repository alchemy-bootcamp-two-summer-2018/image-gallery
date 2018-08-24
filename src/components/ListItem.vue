<template>
  <div class="list-item">
   <h3>{{ album.title }}</h3>
      <p>Description: {{ album.description }}</p>
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