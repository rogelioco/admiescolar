'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CalificacionesSchema extends Schema {
  up () {
    this.create('calificaciones', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idAlumno').notNullable().unique()
      table.integer('calificacion').notNullable()
      table.integer('corte').notNullable()
      table.integer('cuatrimestre').notNullable()
      table.integer('idMateria').notNullable().unique()
    })
  }

  down () {
    this.drop('calificaciones')
  }
}

module.exports = CalificacionesSchema
