import { BaseSchema } from '@adonisjs/lucid/schema'

export default class TiposSanguineos extends BaseSchema {
  protected tableName = 'tipos_sanguineos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_tipo_sanguineo').primary()
      table.string('nm_tipo_sanguineo').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}