import { BaseSchema } from '@adonisjs/lucid/schema'

export default class AddMedicoToPacientes extends BaseSchema {
  protected tableName = 'pacientes'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer('cd_medico')
        .unsigned()
        .references('cd_medico')
        .inTable('medicos')
        .onDelete('SET NULL')
      // ou .notNullable() se for obrigatório
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('cd_medico')
    })
  }
}
