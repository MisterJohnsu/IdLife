import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Alergias extends BaseSchema {
  protected tableName = 'alergias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_alergia').primary()
      table.string('nm_alergia').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}