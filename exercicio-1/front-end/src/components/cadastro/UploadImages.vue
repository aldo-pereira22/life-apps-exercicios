<template>
  <div class="main">
    <input type="file" name="imagem" @change="selectImage" id="" />
  </div>
</template>

<script>
export default {
  methods: {
    selectImage(e) {
      console.log(e.target.files[0]);
    },
  },
};
</script>
<style scoped>
</style>