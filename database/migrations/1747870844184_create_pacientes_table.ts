import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pacientes'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.increments('cd_paciente').primary().notNullable()
      table.string('nm_paciente', 100).notNullable()
      table.date('dt_nascimento').notNullable()
      table.string('cd_telefone_ctt_emergencia', 15).notNullable()
      table.string('nm_ctt_emergencia', 100).notNullable()
      table.string('tx_info_adicional').nullable()
      table.integer('cd_parentesco').unsigned().references('cd_parentesco').inTable('parentescos').notNullable()
      table.integer('cd_tipo_sanguineo').unsigned().references('cd_tipo_sanguineo').inTable('tipos_sanguineos').notNullable()
      table.integer('cd_documento').unsigned().references('cd_documento').inTable('documentos').notNullable()
      table.integer('cd_convenio').unsigned().references('cd_convenio').inTable('convenios').notNullable()
      table.integer('cd_medico').unsigned().references('cd_medico').inTable('medicos').notNullable()
      
      table.timestamps(true)
    })
  }
  async down() {
    this.schema.dropTable(this.tableName)
  }
}
