//Importando as funcionalidades do módulo express que importamos em uma variável
const express = require('express');

const cors = require('cors');

//Importando as rotas do arquivo routes.js
const routes = require('./routes');

//Instanciando a nossa aplicação
const app = express();

app.use(cors());

//Indicando que será usado arquivos no formato Json para as requisições
app.use(express.json());

app.use(routes);

//Quando acessar localhost:3333, pelo navegador, a aplicação será executada
app.listen(3333);