'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehiculo extends Model {
    cliente() {
        return this.belongsTo('App/Models/Cliente', 'id')
    }
    mecanico_vehiculo() {
        return this.hasMany('App/Models/Mecanicoresponsablevehiculo')
    }
}

module.exports = Vehiculo
