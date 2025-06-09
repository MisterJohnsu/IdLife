import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  declare cd_paciente: number

  @column()
  declare nm_sexo: string

  @column()
  declare cpf: number

  @column()
  declare nm_paciente: string

  @column()
  declare dt_nascimento: string

  @column()
  declare cd_telefone_ctt_emergencia: string

  @column()
  declare nm_ctt_emergencia: string

  @column()
  declare tx_info_adicional: string

  @column()
  declare cd_parentesco: number

  @column()
  declare cd_tipo_sanguineo: number

  @column()
  declare cd_documento: number

  @column()
  declare cd_convenio: number

  @column()
  declare cd_medico: number

  @column.dateTime({ autoCreate: true })
  declare created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updated_at: DateTime
}
