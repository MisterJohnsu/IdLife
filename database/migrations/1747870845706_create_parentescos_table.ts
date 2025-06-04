import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'parentesco'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_parentesco').primary()
      table.string('nm_parentesco').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}