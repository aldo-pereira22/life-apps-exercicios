exports.projects = [
    {
        "id": 2,
        "name": "Batalha Naval",
        "identifier": "batalha-naval",
        "description": "Projeto para criar um jogo de batalha naval.\r\n-VueJs\r\n-Comunicação em tempo real (Websocket)\r\n-Front-end Livre",
        "status": 1,
        "is_public": true,
        "created_on": "2022-02-16T15:02:05Z",
        "updated_on": "2022-02-16T15:02:05Z"
    },
    {
        "id": 4,
        "name": "Integração do Redmine com o Trello",
        "identifier": "integracao-do-redmine-com-o-trello",
        "description": "Fazer a integração do Redmine com trello.",
        "status": 1,
        "is_public": true,
        "created_on": "2022-02-22T13:44:29Z",
        "updated_on": "2022-02-22T13:44:29Z"
    },
    {
        "id": 1,
        "name": "Projeto Teste",
        "identifier": "projeto-teste",
        "description": "Projeto feito para utilizar a API do Redmine.",
        "status": 1,
        "is_public": true,
        "created_on": "2022-02-15T14:20:01Z",
        "updated_on": "2022-02-15T14:20:01Z"
    },
    {
        "id": 3,
        "name": "teste",
        "identifier": "teste",
        "description": "Projeto para testar uma pesquisa pelo nome.",
        "status": 1,
        "is_public": true,
        "created_on": "2022-02-18T12:07:28Z",
        "updated_on": "2022-02-18T12:07:28Z"
    }
]

exports.issues = [
    {
        "id": 5,
        "project": {
            "id": 4,
            "name": "Integração do Redmine com o Trello"
        },
        "tracker": {
            "id": 3,
            "name": "Suporte"
        },
        "status": {
            "id": 1,
            "name": "Nova"
        },
        "priority": {
            "id": 5,
            "name": "Imediata"
        },
        "author": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "assigned_to": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "subject": "Estudar API do trello",
        "description": "Pesquisar as funcionalidades disponiveis.\r\n-Pesquisar funcionalidades.\r\n-Pesquisar limitações.",
        "start_date": "2022-02-22",
        "due_date": null,
        "done_ratio": 0,
        "is_private": false,
        "estimated_hours": null,
        "created_on": "2022-02-22T13:48:11Z",
        "updated_on": "2022-02-22T13:48:11Z",
        "closed_on": null
    },
    {
        "id": 4,
        "project": {
            "id": 4,
            "name": "Integração do Redmine com o Trello"
        },
        "tracker": {
            "id": 3,
            "name": "Suporte"
        },
        "status": {
            "id": 1,
            "name": "Nova"
        },
        "priority": {
            "id": 5,
            "name": "Imediata"
        },
        "author": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "assigned_to": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "subject": "Estudar a API do redmine.",
        "description": "Estudar a utilização da API do redmine.\r\n-Pesquisar as funcionalidades.\r\n-Pesquisar as limitações.",
        "start_date": "2022-02-22",
        "due_date": null,
        "done_ratio": 0,
        "is_private": false,
        "estimated_hours": null,
        "created_on": "2022-02-22T13:47:09Z",
        "updated_on": "2022-02-22T13:47:09Z",
        "closed_on": null
    },
    {
        "id": 3,
        "project": {
            "id": 2,
            "name": "Batalha Naval"
        },
        "tracker": {
            "id": 1,
            "name": "Defeito"
        },
        "status": {
            "id": 1,
            "name": "Nova"
        },
        "priority": {
            "id": 5,
            "name": "Imediata"
        },
        "author": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "assigned_to": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "subject": "Issues do Projeto batalha Naval",
        "description": "Adicionando uma nova Issue.\r\n-Adicionar Barcos.\r\n-Setar posições.",
        "start_date": "2022-02-22",
        "due_date": null,
        "done_ratio": 0,
        "is_private": false,
        "estimated_hours": null,
        "created_on": "2022-02-22T13:07:42Z",
        "updated_on": "2022-02-22T13:07:42Z",
        "closed_on": null
    },
    {
        "id": 2,
        "project": {
            "id": 1,
            "name": "Projeto Teste"
        },
        "tracker": {
            "id": 1,
            "name": "Defeito"
        },
        "status": {
            "id": 1,
            "name": "Nova"
        },
        "priority": {
            "id": 4,
            "name": "Urgente"
        },
        "author": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "assigned_to": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "subject": "Teste de Issues",
        "description": "Issue para testar a busca de Issues.\r\n-Retornar Issues.",
        "start_date": "2022-02-22",
        "due_date": null,
        "done_ratio": 0,
        "is_private": false,
        "estimated_hours": null,
        "created_on": "2022-02-22T13:02:14Z",
        "updated_on": "2022-02-22T13:02:14Z",
        "closed_on": null
    },
    {
        "id": 1,
        "project": {
            "id": 1,
            "name": "Projeto Teste"
        },
        "tracker": {
            "id": 2,
            "name": "Funcionalidade"
        },
        "status": {
            "id": 1,
            "name": "Nova"
        },
        "priority": {
            "id": 3,
            "name": "Alta"
        },
        "author": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "assigned_to": {
            "id": 1,
            "name": "Aldo Pereira"
        },
        "subject": "Utilizar API do redmine.",
        "description": "-Utilizar a API do redmine para buscar através de filtros personalizados.\r\n-Data.\r\n-Nome.",
        "start_date": "2022-02-15",
        "due_date": "2022-03-17",
        "done_ratio": 30,
        "is_private": false,
        "estimated_hours": 48.0,
        "created_on": "2022-02-15T14:27:01Z",
        "updated_on": "2022-02-22T12:47:28Z",
        "closed_on": null
    }
]