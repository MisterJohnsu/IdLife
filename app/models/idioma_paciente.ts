import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class IdiomaPaciente extends BaseModel {
  @column({ isPrimary: true })
  public id: number = 0;

  @column()
  public cd_paciente: number = 0;

  @column()
  public cd_idioma: number = 0;

  @column()
  public cd_conhecimento_idioma: number = 0;
}
