<template>
    <div class="animal-image">
        <h3>{{ image.title }}</h3>
        <img :src="image.url"/>
        <p>Image Description: {{ image.description }}</p>
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
