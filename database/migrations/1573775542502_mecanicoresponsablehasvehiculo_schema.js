'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MecanicoresponsablehasvehiculoSchema extends Schema {
  up () {
    this.create('mecanicoresponsablevehiculos', (table) => {
      table.increments()
      table.integer('mecanico_idMEC').unsigned().references('id').inTable('mecanicoresponsables').notNullable().onDelete('cascade')
      table.integer('vehiculo_idMATRICULA').unsigned().references('id').inTable('vehiculos').notNullable().onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('mecanicovehiculos')
  }
}

module.exports = MecanicoresponsablehasvehiculoSchema
