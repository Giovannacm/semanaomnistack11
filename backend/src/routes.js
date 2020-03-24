//Importando o express
const express = require('express');

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

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); //Listando as ongs cadastradas
routes.post('/ongs', OngController.create); //Retorno do id de uma ong cadastrada

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Exportando as rotas para o index.js usar
module.exports = routes;