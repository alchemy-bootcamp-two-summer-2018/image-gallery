<template>
    <main>
        <h1>List!</h1>
        <ul>
            <li v-for="image in album.images"
                :key="image.id"
                :title="image.title"
                :description="image.description">
                <h3>{{ image.title }}</h3>
                <p>{{ image.description }}</p>
            </li>
        </ul>
    </main>   
</template>

<script>

import Album from './Album.vue';

export default {
  props: {
    album: Object
  },
  components: {
    Album
  }
};
</script>

<style>
ul {
    list-style-type: none;
}

</style>
