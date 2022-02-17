const axios = require("axios")
const url = "http://127.0.0.1/redmine/"



exports.todosProjetos = async (req, res) => {
    const resultado = await axios.get(url + "projects.json")
    res.status(200).json(resultado.data)
}

exports.projetoEspecifico = async (nomeDoProjeto, req, res) => {
    const resultado = await axios.get(url + "projects.json?name=" + nomeDoProjeto)
    res.status(200).json(await dadosArrumados(resultado.data))
}

exports.membrosProjeto = async (ID, req, res) => {
    try {
        const resultado = await axios.get(url + "projects/" + ID + "/memberships.json")
        res.status(200).json(resultado.data)
    } catch (error) {
        if (error.response.status == 404) {
            console.log("Não existe nenhum projeto com esse ID")
        }
    }
}