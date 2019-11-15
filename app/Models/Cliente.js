'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    vehiculo() {
        return this.hasMany('App/Models/Vehiculo')
    }
}

module.exports = Cliente
