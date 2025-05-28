// app/Models/DoencaPaciente.ts
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Paciente from './paciente.ts'
import DoencaCronica from './doenca_cronica.ts'

export default class DoencaPaciente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number 

  @column()
  declare cd_paciente: number

  @column()
  declare cd_doenca: number

  @belongsTo(() => Paciente, {
    foreignKey: 'cd_paciente',
  })
  declare paciente: BelongsTo<typeof Paciente>

  @belongsTo(() => DoencaCronica, {
    foreignKey: 'cd_doenca',
  })
  declare doenca: BelongsTo<typeof DoencaCronica>
}
