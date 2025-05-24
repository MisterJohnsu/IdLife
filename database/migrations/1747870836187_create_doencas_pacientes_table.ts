import { BaseSchema } from '@adonisjs/lucid/schema'

export default class DoencasPaciente extends BaseSchema {
  protected tableName = 'doencas_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().notNullable()
      table.integer('cd_doenca').unsigned().notNullable()

      table.primary(['cd_paciente', 'cd_doenca'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
