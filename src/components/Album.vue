<template>
  <li @click="handleClick">
      <h3>{{ album.title }}</h3>
      <p>{{ album.description }}</p>
  </li>
</template>
<script>
export default {
  props: {
    album: Object,
    selectedAlbum: Object,
    onSelect: Function,
  },
  methods: {
    handleClick() {
      this.onSelect(this.album);
    }
  },
};
</script>

<style scoped>



.selected {
  background:rgb(126, 124, 124);
}

h3 {
  font-weight: bold;
  font-size: 130%;
}

h3, p {
  color: white;
}

p {
  margin: 5%;
}

a {
  text-decoration: none;
}

</style>
