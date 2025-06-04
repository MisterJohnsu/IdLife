import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'medicamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_medicamento').primary()
      table.string('nm_medicamento').notNullable()

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}