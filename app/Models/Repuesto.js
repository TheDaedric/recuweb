'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Repuesto extends Model {
    hoja() {
        return this.belongsTo('App/Models/Hojadeparte', 'id')
    }
    mecanico() {
        return this.belongsTo('App/Models/Mecanicoresponsable', 'id')
    }
}

module.exports = Repuesto
