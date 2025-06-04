import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'alergias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_alergias').primary()
      table.string('nm_alergias').notNullable()

      table.timestamps(true)
    })
  }

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Reverts the migration by dropping the 'alergias' table.
   */

/*******  da72f30a-0c6f-48ec-8d29-62593f1655c0  *******/
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}