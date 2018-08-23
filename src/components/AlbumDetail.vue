<template>
<main>
    <h1>This is one of the many many albums</h1>

    <p>
        <router-link to="/albumdetail/thumbnailviewer"> View a thumb </router-link>
    </p>

    <p>
        <router-link to="/albumdetail/galleryviewer"> View a Gallery </router-link>
        <router-link to="/albumdetail/listviewer"> View a List of Albums </router-link>
    </p>

    <p>
        <router-link to="/albumdetail/newimage"> Add a New Image </router-link>
    </p>

    <router-view></router-view>
  </main>
    
</template>

<script>
export default {

};
</script>

<style>

</style>
