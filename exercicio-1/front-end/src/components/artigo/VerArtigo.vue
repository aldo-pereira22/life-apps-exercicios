<template>
  <div class="container">
    <!-- <img :src="artigo.imagem" alt="" /> -->
    <div>
      {{ artigo.conteudo }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState(["artigo"]),
  },
  methods: {
    ...mapActions(["buscarArtigo"]),
  },
  created() {
    this.buscarArtigo(this.$route.params.id);
  },
};
</script>
 
    
<style>
img {
  width: 250px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 150px;
}
</style>