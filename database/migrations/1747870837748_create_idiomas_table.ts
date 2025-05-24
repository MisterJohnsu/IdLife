import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Idiomas extends BaseSchema {
  protected tableName = 'idiomas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_idioma').primary()
      table.string('nm_idioma').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
