import { BaseSchema } from '@adonisjs/lucid/schema'

export default class MedicamentosDoPaciente extends BaseSchema {
  protected tableName = 'medicamentos_do_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().notNullable()
      table.integer('cd_medicamento').unsigned().notNullable()

      table.primary(['cd_paciente', 'cd_medicamento'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}