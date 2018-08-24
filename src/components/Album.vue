<template>
        <router-link :to="`/albums/${album.title}`">{{ album.title }}
        </router-link>
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
