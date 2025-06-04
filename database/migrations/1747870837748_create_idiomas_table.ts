import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'idiomas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
      .increments('cd_idioma')
      table
      .string('nm_idioma')
      .notNullable()
      
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
