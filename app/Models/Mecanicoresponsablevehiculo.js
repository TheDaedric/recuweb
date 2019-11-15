'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mecanicoresponsablevehiculo extends Model {
    mecanico() {
        return this.belongsTo('App/Models/Mecanicoresponsable', 'id')
    }
    vehiculo() {
        return this.belongsTo('App/Models/Vehiculo', 'id')
    }
}

module.exports = Mecanicoresponsablevehiculo
