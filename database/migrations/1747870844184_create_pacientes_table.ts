import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Pacientes extends BaseSchema {
  protected tableName = 'pacientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cd_paciente').primary()
      table.string('nm_paciente').notNullable()
      table.date('dt_nascimento').nullable()
      table.string('cd_num_telefone_emergencia').nullable()
      table.string('nm_num_emergencia').nullable()
      table.text('tx_info_adicional').nullable()
      table.integer('cd_parentesco').unsigned().nullable()
      table.integer('cd_tipo_sanguineo').unsigned().nullable()
      table.integer('cd_documento').unsigned().nullable()
      table.integer('cd_convenio').unsigned().nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}