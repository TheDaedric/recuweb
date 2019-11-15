'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepuestoSchema extends Schema {
  up () {
    this.create('repuestos', (table) => {
      table.increments()
      table.string('descripcion',45)
      table.integer('costounit')
      table.integer('preciounit')
      table.integer('imp_parcial')
      table.integer('hojadeparte_idHOJA').unsigned().references('id').inTable('hojadepartes').notNullable().onDelete('cascade')
      table.integer('hojadeparte_mecanicoresponsable_idMEC').unsigned().references('mecanico_responsable_idMEC').inTable('hojadepartes').notNullable().onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('repuestos')
  }
}

module.exports = RepuestoSchema
