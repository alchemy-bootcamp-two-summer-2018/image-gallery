<template>
  <section>
    <h3>{{ album.title }}</h3>
    <p>{{ album.description }}</p>
    <router-link :to="`/detail/${album.key}`">See Full Album</router-link>
  </section>
</template>

<script>

export default {
  props: {
    album: Object
  }
};

</script>

<style>

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

</style>
