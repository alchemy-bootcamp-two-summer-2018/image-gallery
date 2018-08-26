<template>
    <li>
        <h2>{{ album.title }}</h2>
        <img :src="image.url"/>
        <p>{{ image.description }}</p>
    </li>
</template>

<script>
export default {
  props: {
    image: Object
  },

};
</script>

<style>

</style>
