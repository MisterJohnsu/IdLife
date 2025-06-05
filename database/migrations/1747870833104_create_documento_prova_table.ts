import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'documento'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .increments('cd_documento')
      .primary()
      table
      .string('nm_arquivo')
      .notNullable()
      table
      .string('nm_caminho_arquivo')
      .notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}