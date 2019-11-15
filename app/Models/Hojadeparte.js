'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Hojadeparte extends Model {
    factura() {
        return this.hasOne('App/Models/Factura')
    }
    mecanico() {
        return this.belongsTo('App/Models/Mecanicoresponsable', 'id')
    }

    repuesto() {
        return this.hasMany('App/Models/Repuesto')
    }
}

module.exports = Hojadeparte
