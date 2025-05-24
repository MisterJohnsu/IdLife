import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Parentesco extends BaseSchema {
  protected tableName = 'parentesco'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_parentesco').primary()
      table.string('nm_parentesco').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}