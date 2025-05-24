import { BaseSchema } from '@adonisjs/lucid/schema'

export default class DoencasCronicas extends BaseSchema {
  protected tableName = 'doencas_cronicas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_doenca').primary()
      table.string('nm_doenca').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}