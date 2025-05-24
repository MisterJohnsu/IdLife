import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AparelhosPaciente extends BaseSchema {
  protected tableName = 'aparelhos_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().notNullable()
      table.integer('cd_aparelho').unsigned().notNullable()

      table.primary(['cd_paciente', 'cd_aparelho'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}