// app/Models/DoencaPaciente.ts
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Paciente from './paciente.ts'
import DoencaCronica from './doenca_cronica.ts'
import { DateTime } from 'luxon'

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

  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'created_at' })
  declare created_at: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    columnName: 'updated_at',
    serializeAs: 'updated_at',
  })
  declare updated_at: DateTime
}
