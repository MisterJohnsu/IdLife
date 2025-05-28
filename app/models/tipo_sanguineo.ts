import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TipoSanguineo extends BaseModel {
  @column({ isPrimary: true })
  public cd_tipo_sanguineo: number = 0;

  @column()
  public nm_tipo_sanguineo: string = ''
}
