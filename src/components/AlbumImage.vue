<template>
    <div>
        <p>{{ image.title }}</p>
        <img :src="image.url"/>
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
