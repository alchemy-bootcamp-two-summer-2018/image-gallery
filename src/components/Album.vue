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
</style>