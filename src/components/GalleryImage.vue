<template>
    <div>
        <h3>{{ image.title }}</h3>
        <img :src="image.url">
    </div>
</template>

<script>
export default {
  props: {
    image: Object
  }
};
</script>

<style>

</style>
