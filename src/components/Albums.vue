
<template>
  <ul class="albums-list">
    <li 
      @click="handleNew"
      id="add-album"
    >
      <img src="../assets/plus-sign.png">
    </li>
    <Album v-for="album in albums"
      :key="album.title"
      :album="album"  
      :selected="selected"
      :onSelect="onSelect"
    />
  </ul>
</template>

<script>
import Album from './Album';


export default {
  props: {
    albums: Array,
    selected: Object,
    onSelect: Function,
  },
  components: {
    Album
  },
  data() {
    return {
    };
  },
  methods: {
    handleNew() {
      this.onSelect(null);
    }
  },
};
</script>

<style scoped>

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

li {
  cursor: pointer;
  width: 250px;
  height: 250px;
  padding: 5px 0px;
  list-style: none;
  text-align: center;
  justify-self: center;
  border: 1px solid rgb(177, 255, 242);
  border-radius: 12px;
  color: white;
  box-shadow: 1px 1px 3px #223ee0;
  text-shadow: 3px 3px #223ee0;
  background-color: #000d55;
}

li:hover {
  box-shadow: 2px 2px 5px #223ee0;
  background-color: rgb(92, 105, 250);
  text-shadow: 3px 3px #000d55;
}



img {
  height: 250px;

}

.add-album {
  background-color: #586ff0;
}


</style>
