<template>
<div class="thumbnail-view">
    <p v-for="image in images"
    :key="image.key"
    :image="image"></p>
<div>
</template>

<script>
export default {
  props: {
    images: Array
  },
};
</script>

<style>

</style>
