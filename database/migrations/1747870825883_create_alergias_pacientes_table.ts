import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'alergias_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().references('cd_paciente').inTable('pacientes').notNullable()
      table.integer('cd_alergia').unsigned().references('cd_alergias').inTable('alergias').notNullable()
      table.primary(['cd_paciente', 'cd_alergia'])

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}