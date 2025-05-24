import { BaseSchema } from '@adonisjs/lucid/schema'

export default class IdiomasDoPaciente extends BaseSchema {
  protected tableName = 'idiomas_do_paciente'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('cd_paciente').unsigned().notNullable()
      table.integer('cd_idioma').unsigned().notNullable()
      table.integer('cd_conhecimento_idioma').unsigned().notNullable()

      table.primary(['cd_paciente', 'cd_idioma', 'cd_conhecimento_idioma'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}