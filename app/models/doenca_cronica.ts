// app/Models/DoencaCronica.ts
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type {  ManyToMany } from '@adonisjs/lucid/types/relations'
import Paciente from './paciente.ts'
import { DateTime } from 'luxon'

export default class DoencaCronica extends BaseModel {
  @column({ isPrimary: true })
  declare cd_doenca: number 

  @column()
  declare nm_doenca: string

  @manyToMany(() => Paciente, {
  pivotTable: 'doencas_paciente',
  localKey: 'cd_doenca',
  pivotForeignKey: 'cd_doenca',
  relatedKey: 'cd_paciente',
  pivotRelatedForeignKey: 'cd_paciente',
  pivotTimestamps: true,
})
declare pacientes: ManyToMany<typeof Paciente>


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
