<template>
  <div class="albums-body">
      <ul class="tile-view">
        <Album v-for="album in albums"
        :key="album.title"
        :album="album"
        /> 
        <li>
            <router-link to="/albums/new">
            <img class="plus-image" :src="('/plus.png')" />
              <div class="title">
                <h3>Add album</h3>
                <p> click here to add a new album of your own </p>
              </div>
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

h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
}

.plus-image {
  margin-top: 40px;
}

.title {
  position: absolute;
  color:white;  
  padding: 0px 20px 10px 20px;  
  bottom: 0px;   
  bottom: 0px; 
   
  }

  p {
  margin-top: 15px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
}



ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  padding-left:0px;
  color:#282828;
  
}

li {
  min-height: 350px;
  background: #fa504d;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
  transition: all .2s ease-in-out;
  list-style: none;
  text-align: center;
  position: relative;

}

li:hover {
  transform: scale(1.03); 
}

</style>