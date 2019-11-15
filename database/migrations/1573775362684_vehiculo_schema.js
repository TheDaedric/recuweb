'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VehiculoSchema extends Schema {
  up () {
    this.create('vehiculos', (table) => {
      table.increments()
      table.string('modelo',45)
      table.string('color',45)
      table.date('fecha_ent')
      table.time('hora_ent')
      table.integer('cliente_idrfc').unsigned().references('id').inTable('clientes').notNullable().onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('vehiculos')
  }
}

module.exports = VehiculoSchema
