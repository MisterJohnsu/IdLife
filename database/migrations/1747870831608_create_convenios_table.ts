import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Convenios extends BaseSchema {
  protected tableName = 'convenios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_convenio').primary()
      table.string('nm_convenio').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}