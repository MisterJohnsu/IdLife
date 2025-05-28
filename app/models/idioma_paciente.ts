import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class IdiomaPaciente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column({ columnName: 'cd_paciente' })
  declare cd_paciente: number;

  @column({ columnName: 'cd_idioma' })
  declare cd_idioma: number;

  @column({ columnName: 'cd_conhecimento_idioma' })
  declare cd_conhecimento_idioma: number;

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
