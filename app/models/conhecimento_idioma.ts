import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ConhecimentoIdioma extends BaseModel {
  @column({ isPrimary: true })
  public cd_conhecimento_idioma: number = 0

  @column()
  public nm_conhecimento_idioma: string = ''
}
