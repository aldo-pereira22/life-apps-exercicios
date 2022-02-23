const axios = require("axios")
const url = "http://192.168.0.4/redmine/"

const projects = require('../data.js')


// PROJETOS
exports.listarProjetos = async (req, res) => {
    const projetos = await axios.get(url + "projects.json")


    // ORDERNAR POR NOME
    // projetos.data.projects.sort((a, b) => {
    //     if (a.name < b.name) {
    //         return -1
    //     } else {
    //         return true
    //     }
    // })

    res.status(200).json(projetos.data.projects)

    //UTILIZAR DADOS MOCADOS 
    // res.status(200).json(projects.projects)
    // console.log(projects)
}

exports.buscarProjeto = async (req, res) => {
    const nomeDoProjeto = req.params.nomeDoProjeto
    const resultado = await axios.get(url + "projects.json")


    let result = resultado.data.projects.filter(x => x.name == nomeDoProjeto)

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
exports.filtrarProjeto = async (req, res) => {
    console.log(filtro)
}
// ISSUES
exports.listarIssues = async (req, res) => {

    // const issues = await axios.get(url + "issues.json")
    // console.log("ISSUES:::")
    // console.log(issues.data.issues)
    // res.status(200).json(issues.data.issues)

    // Dados mocados
    res.status(200).json(projects.issues)

}