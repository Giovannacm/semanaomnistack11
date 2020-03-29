//Importando o express
const express = require('express');

//Importando o celebrate para fazer validacoes
const {celebrate, Segments, Joi} = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Desaclopando o módulo de rotas do express em uma nova variável
const routes = express.Router();

/**
 * Métodos HTTP:
 * 
 * GET: buscar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */
/**
 * Tipos de parâmetros:
 * 
 * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação) (Ex: /users?nome=Diego)
 * Route params: parâmetros utilizados para identificar recursos (Ex: /users/:id)
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8),     //Nome da ong deverá ser uma string e é obrigatório
    })
}), SessionController.create);

routes.get('/ongs', OngController.index); //Listando as ongs cadastradas

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),     //Nome da ong deverá ser uma string e é obrigatório
        email: Joi.string().required().email(),     //Tem que ter o @...
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create); //Retorno do id de uma ong cadastrada

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),     //Nome da ong deverá ser uma string e é obrigatório
        description: Joi.string().required(),     //Tem que ter o @...
        value: Joi.number().required(),
    })
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

//Exportando as rotas para o index.js usar
module.exports = routes;