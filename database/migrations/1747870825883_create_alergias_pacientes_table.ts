import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AlergiasPaciente extends BaseSchema {
  protected tableName = 'alergias_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().notNullable()
      table.integer('cd_alergias').unsigned().notNullable()

      table.primary(['cd_paciente', 'cd_alergias'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}