// app/Models/DoencaCronica.ts
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import DoencaPaciente from './doenca_paciente.ts'
import { DateTime } from 'luxon'

export default class DoencaCronica extends BaseModel {
  @column({ isPrimary: true })
  declare cd_doenca: number 

  @column()
  declare nm_doenca: string

  @hasMany(() => DoencaPaciente, {
    foreignKey: 'cd_doenca',
  })
  declare pacientesRelacionados: HasMany<typeof DoencaPaciente>

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
