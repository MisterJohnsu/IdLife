import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'aparelhos_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().references('cd_paciente').inTable('pacientes').notNullable()
      table.integer('cd_aparelho').unsigned().references('cd_aparelho').inTable('aparelhos').notNullable()

      table.primary(['cd_paciente', 'cd_aparelho'])

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}