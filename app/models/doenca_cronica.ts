// app/Models/DoencaCronica.ts
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import DoencaPaciente from './doenca_paciente.ts'

export default class DoencaCronica extends BaseModel {
  @column({ isPrimary: true })
  declare cd_doenca: number 

  @column()
  declare nm_doenca: string

  @hasMany(() => DoencaPaciente, {
    foreignKey: 'cd_doenca',
  })
  declare pacientesRelacionados: HasMany<typeof DoencaPaciente>
}
