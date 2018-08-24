<template>
  <li>
    <router-link :to="`/albums/${album.id}`">
      <h3>{{ album.title }}</h3>
      <p>Description: {{ album.description }}</p>
    </router-link>
  </li>
    
</template>

<script>
export default {
  props: {
    album: Object
  }
};
</script>

<style>

</style>
