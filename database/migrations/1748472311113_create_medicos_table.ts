import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Medicos extends BaseSchema {
  protected tableName = 'medicos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_medico') // Primary key
      table.string('crm').notNullable().unique()
      table.string('nm_medico').notNullable()
      table.string('especializacao').notNullable()

      table.timestamps(true) // created_at e updated_at
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
