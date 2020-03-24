//Método responsável pela criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable("incidents", function(table){
      table.increments(); //O identificador será uma chave primária com auto-incremento
      
      table.string("title").notNullable();   //Definindo os outros campos da tabela (ou seja, as colunas)
      table.string("description").notNullable();
      table.decimal("value").notNullable();

      //criando um relacionamento
      table.string("ong_id").notNullable();

      //criando a chave estrangeira
      table.foreign("ong_id").references("id").inTable("ongs");
    });
  };
  
  //Caso de errado alguma coisa
  exports.down = function(knex) {
    return knex.schema.dropTable("incidents");
  };
  