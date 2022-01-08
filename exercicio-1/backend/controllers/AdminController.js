const Artigo = require('../model/Artigo')


module.exports = class AdminController {

    static async cadastrar(req, res) {
        const artigoNovo = req.body
        try {
            artigoNovo.imagem = req.file.firebaseUrl

        } catch (error) {
            console.log("Não foi possível salvar a imagem" + error)
        }
        const artigo = await Artigo.create(artigoNovo)
        res.status(201).send(artigo)
    }

    static async buscar(req, res) {

        try {
            const id = req.params.id
            const artigo = await Artigo.findOne({ raw: true, where: { id: id } })
            let data = new Date();

            artigo.updatedAt = (new Intl.DateTimeFormat('pt-br',
                { hour: 'numeric', minute: 'numeric', timeZoneName: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(artigo.updatedAt))

            artigo.createdAt = (new Intl.DateTimeFormat('pt-br',
                { hour: 'numeric', minute: 'numeric', timeZoneName: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(artigo.createdAt))


            console.log("\n\n\nDATA: " + artigo.updatedAt + "\n\n\n")

            res.status(200).send(artigo)
        } catch (error) {
            console.log("\n\n\n\n\n\nERRRROOOO!")
            console.log(error)
        }
        // console.log(artigo)
    }

    static async excluir(req, res) {
        const id = req.params.id
        const artigo = await Artigo.findOne({ raw: true, where: { id: id } })

        if (artigo) {
            await Artigo.destroy({ where: { id: id } })
            res.status(202).send("Artigo excluido!")
        } else {
            res.status(404).send("Não foi possível excluir!\nO artigo não foi encontrado ncontrado!")
        }
    }
    static async editar(req, res) {
        const artigoEditado = req.body
        console.log("\n\n\n\n\nARTIGO.ID" + artigoEditado.id)
        try {
            artigoEditado.imagem = req.file.firebaseUrl
        } catch (error) {
            console.log("Não foi possível salvar a imagem" + error)
        }

        let artigo = await Artigo.findOne({ raw: true, where: { id: artigoEditado.id } })
        artigo.titulo = artigoEditado.titulo
        artigo.conteudo = artigoEditado.conteudo
        artigo.nomeAutor = artigoEditado.nomeAutor
        console.log("\n\n\n\n\nARTIGO.ID" + artigo.id)


        artigoEditado.imagem ? artigo.imagem = artigoEditado.imagem : null
        const id = artigo.id
        await Artigo.update(artigo, { where: { id: id } })



        res.status(200).send()
    }

    static async listar(req, res) {
        const artigos = await Artigo.findAll({ raw: true })
        res.status(200).send(artigos)
    }
}