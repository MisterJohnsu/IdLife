import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'convenios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_convenio').primary()
      table.string('nm_convenio').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}