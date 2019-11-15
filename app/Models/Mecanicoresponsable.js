'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Mecanicoresponsable extends Model {
    hoja() {
        return this.hasMany('App/Models/Hojadeparte')
    }
    mecanico_vehiculo() {
        return this.hasMany('App/Models/Mecanicoresponsablevehiculo')
    }
}

module.exports = Mecanicoresponsable
