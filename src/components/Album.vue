<template>
        <router-link :to="`/albums/${album.id}`">{{ album.title }}
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
