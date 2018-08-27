<template>
    <div>
        <h3>{{ image.title }}</h3>
        <img class="gallery-image"
           :src="image.url">
        <p>
          {{ image.description }}
        </p>
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
.gallery-image{
  width: 80%;
}

</style>
