<template>
  <div class="albums-body">
      <ul class="tile-view">
        <Album v-for="album in albums"
        :key="album.title"
        :album="album"
        /> 
     
        <li class="add-new">
            <router-link to="/albums/new">
             <h2>
              Add album
             </h2>
            </router-link>
        </li>
     
       </ul>

    <router-view :albums="albums"></router-view>

  </div>
</template>

<script>
import albumsApi from '../services/albumsApi';
import Album from './Album';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      activeColor: 'green'
    };
  },
  components: {
    Album
  }
};

</script>

<style scoped>

.albums-body {
  padding: 50px 100px 50px 100px ;
  background: #e9e9e9;
  text-align:center;
  min-height: 600px;
}

.add-new{
  background: #fa504d;
  padding: 20px;

}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  padding-left:0px;
  color:#282828;
  
}

li{
  list-style: none;
  text-align: center;
  min-height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
  transition: all .2s ease-in-out;

}

li:hover {
  transform: scale(1.03); 
}

a {
  color:#282828;
}


</style>