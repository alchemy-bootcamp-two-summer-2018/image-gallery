<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>
        Title: <input v-model="title">
      </label>
    </p>
    <p>
      <label>
        Description: <input v-model="description">
      </label>
    </p>

        <p>
      <label>
        Url: <input v-model="url">
      </label>
    </p>
    <p>
      <button type="submit">{{ isNew ? 'Add' : 'Update' }}</button>
      <button v-if="onCancel" type="button" @click="onCancel">Cancel</button>
    </p>
  </form>
</template>

<script>
export default {
  props: {
    album: Object,
    onComplete: Function,
    onCancel: Function
  },
};

</script>

<style>

</style>