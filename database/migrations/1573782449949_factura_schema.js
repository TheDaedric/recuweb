'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FacturaSchema extends Schema {
  up () {
    this.create('facturas', (table) => {
      table.increments()
      table.date('fecha')
      table.integer('imp_pesos')
      table.integer('imp_dol')
      table.integer('rfc')
      table.integer('facturas_idhoja').unsigned().references('id').inTable('hojadepartes').notNullable().onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('facturas')
  }
}

module.exports = FacturaSchema
