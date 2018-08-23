<template>

    <router-link :to="`/albums/${album.key}`">{{ album.title }}</router-link>

</template>

<script>
export default {
  props: {
    album: Object
  },
  


};
</script>

<style>

</style>
