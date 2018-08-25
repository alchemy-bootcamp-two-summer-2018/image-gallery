<template>
  <li :style="{ backgroundImage:  'url(' + album.images[0].url + ')'  }">
    <router-link :to="`/albums/${album.id}`">
      <h3><span class="title-bg">{{ album.title }}</span></h3>
      <!-- <p>Description: {{ album.description }}</p> -->
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
  border: 1px solid #aaa;
}

a {
  text-decoration: none;
  color: initial;
}

.selected {
  background: lightsteelblue;
}

.title-bg {
  background: white;
    padding: 5px;
    max-width: 80px;
    text-align: center;
}
</style>