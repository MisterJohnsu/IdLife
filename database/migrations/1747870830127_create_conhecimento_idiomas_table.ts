import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'conhecimento_idiomas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_conhecimento_idioma').primary()
      table.string('nm_conhecimento_idioma').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}