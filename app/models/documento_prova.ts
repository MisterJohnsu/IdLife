import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class DocumentoProva extends BaseModel {
  @column({ isPrimary: true })
  declare cd_documento: number

  @column({ columnName: 'nm_documento' })
  declare nm_arquivo: string;

  @column({ columnName: 'nm_caminho' })
  declare nm_caminho: string;

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
