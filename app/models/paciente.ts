import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Convenio  from './convenio.ts'
import DocumentoProva from './documento_prova.ts'
import Parentesco from './parentesco.ts'
import TipoSanguineo from './tipo_sanguineo.ts'


export default class Paciente extends BaseModel {
  @column({ isPrimary: true, })
  public cd_paciente: number = 0;

  @column()
  public nm_paciente: string = '';

  @column()
  public dt_nascimento: string = '';

  @column()
  public cd_num_telefone_emergencia: string = '';

  @column()
  public nm_num_emergencia: string = '';

  @column()
  public tx_info_adicional: string = '';

  @column()
  public cd_parentesco: number = 0;

  @column()
  public cd_tipo_sanguineo: number = 0;

  @column()
  public cd_documento: number = 0;

  @column()
  public cd_convenio: number = 0;

  // RELACIONAMENTOS

  @belongsTo(() => Convenio, { foreignKey: 'cd_convenio' })
  public convenio: typeof Convenio

  @belongsTo(() => Parentesco, { foreignKey: 'cd_parentesco' })
  public parentesco: typeof Parentesco

  @belongsTo(() => TipoSanguineo, { foreignKey: 'cd_tipo_sanguineo' })
  public tipoSanguineo: typeof TipoSanguineo

  @belongsTo(() => DocumentoProva, { foreignKey: 'cd_documento' })
  public documento: typeof DocumentoProva
}
