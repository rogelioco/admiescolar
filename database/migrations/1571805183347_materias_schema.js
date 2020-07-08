'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MateriasSchema extends Schema {
  up () {
    this.create('materias', (table) => {
      table.increments()
      table.timestamps()
      table.string('materia').notNullable()
      table.string('descripcion').notNullable()
      table.string('plan').notNullable()
    })
  }

  down () {
    this.drop('materias')
  }
}

module.exports = MateriasSchema