import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import Convenio  from './convenio.ts'
import DocumentoProva from './documento_prova.ts'
import Parentesco from './parentesco.ts'
import TipoSanguineo from './tipo_sanguineo.ts'
import { LucidModel } from '@adonisjs/lucid/types/model';
import { DateTime } from 'luxon'


export default class Paciente extends BaseModel {
  @column({ isPrimary: true, })
  declare cd_paciente: number

  @column({ columnName: 'nm_paciente' })
  declare nm_paciente: string

  @column({ columnName: 'nm_mae' })
  declare dt_nascimento: string

  @column({ columnName: 'dt_nascimento' })
  declare cd_num_telefone_emergencia: string

  @column({ columnName: 'cd_num_telefone_emergencia' })
  declare nm_num_emergencia: string 

  @column({ columnName: 'nm_num_emergencia' })
  declare tx_info_adicional: string

  @column({ columnName: 'tx_info_adicional' })
  declare cd_parentesco: number

  @column({ columnName: 'cd_tipo_sanguineo' })
  declare cd_tipo_sanguineo: number

  @column({ columnName: 'cd_documento' })
  declare cd_documento: number;

  @column({ columnName: 'cd_convenio' })
  declare cd_convenio: number

  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'created_at' })
  declare created_at: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    columnName: 'updated_at',
    serializeAs: 'updated_at',
  })
  declare updated_at: DateTime

  // RELACIONAMENTOS

@belongsTo(() => Convenio, { foreignKey: 'cd_convenio' })
declare convenio: BelongsTo<typeof Convenio, LucidModel> | null;

@belongsTo(() => Parentesco, { foreignKey: 'cd_parentesco' })
declare parentesco: BelongsTo<typeof Parentesco, LucidModel> | null;

@belongsTo(() => TipoSanguineo, { foreignKey: 'cd_tipo_sanguineo' })
declare tipoSanguineo: BelongsTo<typeof TipoSanguineo, LucidModel> | null;

@belongsTo(() => DocumentoProva, { foreignKey: 'cd_documento' })
declare documento: BelongsTo<typeof DocumentoProva, LucidModel> | null;
}
