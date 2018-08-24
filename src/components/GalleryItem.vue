<template>
    <div class="thumbnail">
        <img :src="image.url" :alt="image.id" />
    </div>
</template>

<script>

export default {
  props: {
    image: Object
  },
};
</script>

<style scoped>


</style>