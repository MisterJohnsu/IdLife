import { BaseSchema } from '@adonisjs/lucid/schema'

export default class DocumentoProva extends BaseSchema {
  protected tableName = 'documento_prova'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_documento').primary()
      table.string('nm_arquivo').notNullable()
      table.string('nm_caminho').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}