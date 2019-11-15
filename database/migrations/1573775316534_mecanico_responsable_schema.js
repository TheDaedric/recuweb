'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicoResponsableSchema extends Schema {
  up () {
    this.create('mecanicoresponsables', (table) => {
      table.increments()
      table.string('nombre',45)
      table.string('direccion',45)
      table.string('tel',45)
      table.float('costoxhora',4)
      table.string('categoria',45)
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanico_responsables')
  }
}

module.exports = MecanicoResponsableSchema
