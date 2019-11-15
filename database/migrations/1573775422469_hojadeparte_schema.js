'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HojadeparteSchema extends Schema {
  up () {
    this.create('hojadepartes', (table) => {
      table.increments()
      table.string('concepto',45)
      table.integer('cantidad')
      table.string('reparacion',45)
      table.integer('mecanico_responsable_idMEC').unsigned().references('id').inTable('mecanicoresponsables').notNullable().onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('hojadepartes')
  }
}

module.exports = HojadeparteSchema
