<template>

  <div class="list-item">
    <li>
      <h2>{{ image.title }}</h2>
      <h3>{{ image.description }}</h3>
      <p>{{ image.url}}</p>
    </li>
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

* {
    box-sizing: border-box;
}
.list-item {
  max-width: 900px;
}

li  {
  padding:30px;
  list-style: none;
  border-bottom: solid 1px #f8f8f8;

}

h3 {
    text-align: left;
}

p {
    text-align: left;
    text-transform: none;
    letter-spacing: 0px;
    font-size: 12px;
}

</style>