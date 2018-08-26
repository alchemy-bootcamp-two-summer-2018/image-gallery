<template>
    <div class="thumbnail">
        <img :src="image.url" :alt="image.id"/>
          
    </div>
</template>

<script>

export default {
  props: {
    image: Object,
  
  },

};

</script>


<style scoped>

.thumbnail > img {
  object-fit: cover;
  max-width: 100%;
  height: 400px;

}

</style>