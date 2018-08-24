<template>
  <div class="list-item">
   <h3>{{ image.title }}</h3>
      <p>{{ image.description }}</p>
      <p>{{ image.url}}</p>
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
}

.list-item {
    display: flex;
    flex-direction:column;
    padding:20px;
}

h3 {
    text-align: left;
}
p {
    text-align: left;
}

</style>