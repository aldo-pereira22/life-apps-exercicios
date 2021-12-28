<template>
    <div class="main">
        <h2>Atualizar Artigo</h2>
        <div>
            <form class="mt-5">

                <div class="form-group">
                    <label for="img">Escolha a imagem</label> <br>
                    <input type="file" name="img" class="form-control-file" id="img">
                </div>

                    <div class="form-group mt-3">
                            <label for="titulo">Nome do autor </label>
                            <input type="text" v-model="artigo.nomeAutor" class="form-control" id="titulo" name="autor" placeholder="Digite o título do artigo">
                    </div>

                    <div class="form-group mt-3">
                        <label for="titulo">Título do artigo</label>
                        <input type="text" v-model="artigo.titulo" class="form-control" id="titulo" name="titulo" placeholder="Digite o título do artigo">
                    </div>

                    <div class="form-group mt-3">
                        <label for="conteudo">Editar artigo</label>
                        <textarea name="conteudo" v-model="artigo.conteudo" class="form-control mt-1" id="conteudo" cols="114" rows="8"></textarea>
                    </div>
                    <div>

                    <button type="button" v-on:click="update(artigo)" class="btn btn-warning mt-2">Atualizar</button>
                    </div>
                    <!-- <button type="submit" class="btn btn-warning mt-2">Atualizar</button> -->

            </form>
        </div>



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
    methods: {
        ...mapActions(['buscarArtigo', 'atualizarArtigo']),

        update(artigo){
             const atualizado = {
                id: artigo.id,
                titulo: artigo.titulo,
                nomeAutor: artigo.nomeAutor,
                conteudo: artigo.conteudo 
            }
            this.atualizarArtigo(atualizado)
            alert("Artigo alterado com sucesso!")

        },
        teste(){
            console.log("teste")
        }
    },

    computed:{
        ...mapState(['artigo', 'artigos'])
    },
    created(){
        this.buscarArtigo(this.$route.params.id)
    }

}
</script>

<style>

</style>