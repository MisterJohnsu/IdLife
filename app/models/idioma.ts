import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Idioma extends BaseModel {
  @column({ isPrimary: true })
  public cd_idioma: number = 0

  @column()
  public nm_idioma: string = ''
}
