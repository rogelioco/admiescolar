'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlumnosSchema extends Schema {
  up () {
    this.create('alumnos', (table) => {
      table.increments()
      table.timestamps()
      table.integer('matricula',50).notNullable().unique()
      table.string('nombre',50).notNullable()
      table.string('apellido',50).notNullable()
      table.date('fecha_nacimiento',50).notNullable()
      table.string('domicilio',50)
      table.string('email',50).notNullable().unique()
    })
  }

  down () {
    this.drop('alumnos')
  }
}

module.exports = AlumnosSchema
