import { BaseModel, column, hasMany, manyToMany} from '@adonisjs/lucid/orm'
import Paciente from './paciente.ts'
import { DateTime } from 'luxon'
import type { ManyToMany} from '@adonisjs/lucid/types/relations'

export default class Medico extends BaseModel {
  @column({ isPrimary: true })
  declare cd_medico: number

  @column()
  declare crm: string

  @column()
  declare nm_medico: string

  @column()
  declare nm_especializacao: string

  @manyToMany(() => Paciente, {
    pivotTable: 'medicos_pacientes',
    localKey: 'cd_medico',
    pivotForeignKey: 'cd_medico',
    relatedKey: 'cd_paciente',
    pivotRelatedForeignKey: 'cd_paciente',
    pivotColumns: ['created_at', 'updated_at'],
    pivotTimestamps: true
  })
  declare Pacientes: ManyToMany<typeof Paciente>

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