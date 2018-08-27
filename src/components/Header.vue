<template>
  <header>
    <h1>Shots In The Dark</h1>
    <p>(But you're not too late)</p>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/albums">Albums</router-link>
    </nav>
  </header>  
</template>

<script>
export default {

};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Monoton');
@import url('https://fonts.googleapis.com/css?family=Rajdhani');
@import url('https://fonts.googleapis.com/css?family=Roboto');

header {
  box-shadow: 2px 2px 5px #223ee0;
  background-color: #000d55;
}

h1, p, a {
  color: white;
}

h1 {
  font-size: 96px;
  font-family: 'Monoton', cursive;
  font-weight: normal;
  margin: 0px auto;
  text-shadow: 3px 3px #223ee0;
}

p {
  font-family: 'Rajdhani', sans-serif;
  font-size: 24px;
  text-shadow: 3px 3px #223ee0;

}

nav {
  padding: 15px;
}

a {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  margin: 10px;
  padding: 6px;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #223ee0;
  text-decoration: none;
  text-shadow: 2px 2px #223ee0;
}

a:hover {
  background-color: rgb(92, 105, 250);
}



img {
  width: 150px;
}



</style>
