const axios = require("axios")
const url = "http://192.168.0.4/redmine/"



exports.listarProjetos = async (req, res) => {
    const resultado = await axios.get(url + "projects.json")
    res.status(200).json(resultado.data.projects)
    // res.status(200).json("Listar Projetos!")
}

exports.buscarProjeto = async (req, res) => {
    const nomeDoProjeto = req.params.nomeDoProjeto
    const resultado = await axios.get(url + "projects.json")
    // console.log(resultado.data.projects)
    // console.log(resultado.data.projects.filter(x => x.name == nomeDoProjeto))

    let result = resultado.data.projects.filter(x => x.name == nomeDoProjeto)
    console.log(result)
    // console.log("URL: " + url + "projects.json?name=" + nomeDoProjeto)
    // res.status(200).json(await dadosArrumados(resultado.data))
    res.status(200).json(result)
    // console.log(resultado.data.projects[0])
}

exports.membrosProjeto = async (req, res) => {
    const id = req.params.id
    // try {
    //     const resultado = await axios.get(url + "projects/" + id + "/memberships.json")
    //     res.status(200).json(resultado.data)
    // } catch (error) {
    //     if (error.response.status == 404) {
    //         console.log("Não existe nenhum projeto com esse ID")
    //     }
    // }
    res.status(200).json(id)

}