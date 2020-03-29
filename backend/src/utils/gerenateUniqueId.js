//Importanto um pacote para gerar o id (vai gerar uma string aleatoria)
const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
}