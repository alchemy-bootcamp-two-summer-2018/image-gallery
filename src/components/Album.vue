<template>
  <li :style="{ backgroundImage:  'url(' + album.images[0].url + ')'  }">
    <router-link :to="`/albums/${album.id}`">
    <div class="title-bg">
      <h3>{{ album.title }}</h3>
      <p>{{ album.description }}</p>
      </div>
    </router-link>
  </li>
</template>

<script>

export default {
  props: {
    album: Object,
    selected: Object,
    onSelect: Function
  },
  methods: {
    handleClick() {
      this.onSelect(this.album);
    }
  }
};
</script>

<style scoped>

li {
  list-style: none;
  text-align: center;
  position: relative;

}

h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
}

p {
  margin-top: 15px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center !important;
}

.title-bg {
  background: #282828f2;
  color:white;
  position: absolute;     
  text-align: center;  
  padding: 0px 20px 10px 20px;  
  bottom: 0px; 
  width: 100%;
}
</style>