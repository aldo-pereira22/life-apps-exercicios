<template>
    <div class="main">
        <h2>Cadastrar Artigo</h2>

    <form class="mt-5">
            <div class="form-group">
                <label for="img">Escolha a imagem</label> <br>
                <input type="file"  name="img" class="form-control-file" id="img">
            </div>

        <div class="form-group mt-3">
            <label for="titulo">Título do artigo</label>
            <input type="email" v-model="artigo.titulo" class="form-control" id="titulo" name="titulo" placeholder="Digite o título do artigo">
        </div>

        <div class="form-group mt-3">
            <label for="conteudo">Escreva seu artigo</label>
            <textarea name="conteudo" v-model="artigo.conteudo" class="form-control mt-1" id="conteudo" cols="114" rows="15"></textarea>
        </div>
        
        <button type="submit" class="btn btn-primary mt-2">Enviar</button>

        
    </form>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                artigo:{
                    titulo:'',
                    conteudo:'',
                    nomeAutor:'' 
                }
            }
        },
        methods:{
            ...mapActions(['adicionarArtigo']),
            adicionarArtigo(artigo){
                artigo = {
                    titulo:this.artigo.titulo,
                    conteudo:this.artigo.conteudo,
                    nomeAutor:this.artigo.nomeAutor
                }
                this.adicionarArtigo(artigo)
                this.artigo.titulo = ''
                this.artigo.conteudo = ''
                this.artigo.nomeAutor = ''
            }
        }
    }
</script>