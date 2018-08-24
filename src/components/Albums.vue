<template>
  <main>
    <h2>Albums</h2>
      <ul class="tile-view">
        <Album v-for="album in albums"
        :key="album.title"
        :album="album"
        /> 
         <li>
             <h3 class="add-new">
                 <router-link to="/albums/new">Add a new album</router-link>
             </h3>
         </li>
       </ul>
    <p>
      
    </p>


    <router-view :albums="albums"></router-view>

  </main>
</template>

<script>
import albumsApi from '../services/albumsApi';
import Album from './Album';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums()
    };
  },
  components: {
    Album
  }
};

</script>

<style scoped>


ul.tile-view {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5px;
  padding-left: 0;
}

li {
  list-style: none;
  text-align: center;
  border: 1px solid #aaa;
}
a {
  text-decoration: none;
  color: initial;
}
.add-new {
    margin-top: 60px;
}
</style>