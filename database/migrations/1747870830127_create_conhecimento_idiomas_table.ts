import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ConhecimentoIdiomas extends BaseSchema {
  protected tableName = 'conhecimento_idiomas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_conhecimento_idioma').primary()
      table.string('nm_conhecimento_idioma').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}