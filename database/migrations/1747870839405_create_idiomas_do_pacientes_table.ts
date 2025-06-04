import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'idiomas_do_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .integer('cd_paciente')
      .unsigned().references('cd_paciente')
      .inTable('pacientes')
      .notNullable()
      table
      .integer('cd_idioma')
      .unsigned()
      .references('cd_idioma')
      .inTable('idiomas')
      .notNullable()

      table.primary(['cd_paciente', 'cd_idioma'])

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}