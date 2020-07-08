'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegistrosSchema extends Schema {
  up () {
    this.create('registros', (table) => {
      table.increments()
      table.timestamps()
      table.integer('idMateria',50).notNullable()
      table.integer('idAlumno',50).notNullable()

    })
  }

  down () {
    this.drop('registros')
  }
}

module.exports = RegistrosSchema
