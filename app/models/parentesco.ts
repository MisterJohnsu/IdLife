import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Parentesco extends BaseModel {
  @column({ isPrimary: true })
  public cd_parentesco: number = 0;

  @column()
  public nm_parentesco: string = ''
}
