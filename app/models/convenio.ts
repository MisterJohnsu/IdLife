import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Convenio extends BaseModel {
  @column({ isPrimary: true })
  public cd_convenio: number = 0;

  @column()
  public nm_convenio: string = '';
}
