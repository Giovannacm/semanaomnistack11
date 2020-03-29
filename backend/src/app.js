//Importando as funcionalidades do módulo express que importamos em uma variável
const express = require('express');

const cors = require('cors');

const {errors} = require('celebrate');

//Importando as rotas do arquivo routes.js
const routes = require('./routes');

//Instanciando a nossa aplicação
const app = express();

app.use(cors());

//Indicando que será usado arquivos no formato Json para as requisições
app.use(express.json());

app.use(routes);

app.use(errors());

module.exports = app;