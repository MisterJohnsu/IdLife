import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'doencas_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .integer('cd_paciente')
      .unsigned()
      .references('cd_paciente')
      .inTable('pacientes')
      .onDelete('CASCADE')
      .notNullable()
      table
      .integer('cd_doenca')
      .unsigned()
      .references('cd_doenca')
      .inTable('doencas_cronicas')
      .onDelete('CASCADE')
      .notNullable()

      table.primary(['cd_paciente', 'cd_doenca'])

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
