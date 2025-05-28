import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class DocumentoProva extends BaseModel {
  @column({ isPrimary: true })
  public cd_documento: number = 0;

  @column()
  public nm_arquivo: string = ''

  @column()
  public nm_caminho: string = ''
}
