import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AlergiaPaciente extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0;

  @column()
  public cd_paciente: number = 0;

  @column()
  public cd_alergias: number = 0;
}
