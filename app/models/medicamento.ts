import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Medicamento extends BaseModel {
  @column({ isPrimary: true })
  public cd_medicamento: number = 0

  @column()
  public nm_medicamento: string = ''
}
