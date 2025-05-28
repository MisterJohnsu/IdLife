import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Alergia extends BaseModel {
  @column({ isPrimary: true })
  public cd_alergia: number = 0;

  @column()
  public nm_alergia: string = '';
}
