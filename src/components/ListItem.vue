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


h3 {
    text-align: left;
}
p {
    text-align: left;
}

</style>