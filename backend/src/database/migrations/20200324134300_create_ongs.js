//Método responsável pela criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table){
    table.string("id").primary();   //Definindo o primeiro campo da tabela, é chamado de id e será a chave primária do banco
    table.string("name").notNullable();   //Definindo os outros campos da tabela (ou seja, as colunas)
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

//Caso de errado alguma coisa
exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
