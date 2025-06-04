import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'medicamentos_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .integer('cd_paciente')
      .unsigned()
      .notNullable()
      table
      .integer('cd_medicamento')
      .unsigned()
      .notNullable()

      table.primary(['cd_paciente', 'cd_medicamento'])

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}