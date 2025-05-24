import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Medicamentos extends BaseSchema {
  protected tableName = 'medicamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_medicamento').primary()
      table.string('nm_medicamento').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}