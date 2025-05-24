import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Aparelhos extends BaseSchema {
  protected tableName = 'aparelhos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_aparelho').primary()
      table.string('nm_aparelho').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}