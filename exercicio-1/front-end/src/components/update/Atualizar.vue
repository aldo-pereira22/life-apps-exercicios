<template>
    <div class="main">
        <h2>Atualizar Artigo</h2>
        <h3>ID: {{id}}</h3>
        {{artigos}}
    </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    computed:{
        ...mapState(['artigos'])
    },
    methods: {
        ...mapActions(['buscarArtigo'])
    },
    created(){
        this.buscarArtigo(this.$route.params.id)
    }

}
</script>

<style>

</style>