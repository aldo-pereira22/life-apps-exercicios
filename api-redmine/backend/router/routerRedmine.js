const express = require('express')
const router = express.Router()


const apiRedmine = require('../redmine/apiRedmine.js')

router.get("/projects", apiRedmine.listarProjetos);
router.get("/buscarProjeto/:nomeDoProjeto", apiRedmine.buscarProjeto);
router.get("/membros/:id", apiRedmine.membrosProjeto);



module.exports = router;
