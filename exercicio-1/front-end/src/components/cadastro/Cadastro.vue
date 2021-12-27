<template>
    <div class="main">
        <h2>Cadastrar Artigo</h2>

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
            <label for="conteudo">Escreva seu artigo</label>
            <textarea name="conteudo" v-model="artigo.conteudo" class="form-control mt-1" id="conteudo" cols="114" rows="8"></textarea>
        </div>
        
        <button type="submit" v-on:click="adicionar" class="btn btn-primary mt-2">Enviar</button>

        
    </form>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                // imgArtigo:null,
                artigo:{
                    titulo:'',
                    conteudo:'',
                    nomeAutor:'',
                    imagem:'' 
                }
            }
        },
        methods:{
            ...mapActions(['adicionarArtigo']),

                adicionar(artigo){
                artigo = {
                    titulo:this.artigo.titulo,
                    conteudo:this.artigo.conteudo,
                    nomeAutor:this.artigo.nomeAutor,
                    // imagem:this.imgArtigo
                }
                this.adicionarArtigo(artigo)
                alert("Artigo adicionado com sucesso!")
                this.artigo.titulo = ''
                this.artigo.conteudo = ''
                this.artigo.nomeAutor = ''
            }, 

            // imagemSelecionada(event){
            //     this.imgArtigo = event.target.files   
            // }

        }
    }
</script>