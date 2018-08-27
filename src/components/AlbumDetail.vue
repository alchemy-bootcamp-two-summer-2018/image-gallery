<template>
  <main>
    <div class="album-view">
      <h2> {{ album.title }}</h2>
      <p> {{ album.description }}</p>

      <p>
        <router-link to="thumbnail">Thumbnail View</router-link>
        <router-link to="list">List View</router-link>
        <router-link to="gallery">Gallery View</router-link>
      </p>

      <router-view :album="album"></router-view>
    </div>
    <div class="add-image">
      <NewImage :album="album"/>
    </div>

  </main>
</template>

<script>
import albumApi from '../services/albumApi';
import NewImage from './NewImage.vue';

export default {
  name: 'app',
  components: {
    NewImage
  },
  data() {
    return {
      album: albumApi.getAlbum(this.$route.params.key),
    };
  },
  props: {
    selectedAlbum: String,
  }
};
</script>

<style scoped>


main {
  display:grid;
  grid-template-columns: 40% 40% 20%;
  grid-template-areas: "image image form"
                       "image image form"
                       "image image form";
            
}

.album-view {
  grid-area: image;
}

.add-image {
  grid-area: form;
}


a {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 10px;
  padding: 6px;
  border-radius: 15px;
  color: white;
  text-decoration: none;
  box-shadow: 2px 2px 5px #223ee0;
  text-shadow: 1px 1px #223ee0;
  background-color: #000d55;
}
a:hover {
  background-color: rgb(92, 105, 250);
}

h2 {
  font-size: 32px;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 16;
}


</style>
