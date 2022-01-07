module.exports = {

    verificaFormulario(artigo) {
        let erros = []

        if (artigo.titulo && artigo.conteudo && artigo.iamgem) {
            return true;
        }

        this.erros = []
        if (!artigo.titulo) {
            this.erros.push("O título é obrigatório!")
        }

        if (!artigo.conteudo) {
            this.erros.push("Conteúdo é obrigatório!")
        }

        if (!artigo.imagem) {
            this.erros.push("Imagem é obrigatória")
        }

        return erros;
    }
}