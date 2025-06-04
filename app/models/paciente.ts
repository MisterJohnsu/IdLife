import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations';
import { LucidModel } from '@adonisjs/lucid/types/model';
import Convenio  from './convenio.ts'
import Documento from './documento.ts'
import Parentesco from './parentesco.ts'
import TipoSanguineo from './tipo_sanguineo.ts'
import Medicos from './medicos.ts'
import { DateTime } from 'luxon'
import DoencaCronica from './doenca_cronica.ts';
import Idioma from './idioma.ts';
import MedicamentoPaciente from './medicamento_paciente.ts';
import Medico from './medicos.ts'


export default class Paciente extends BaseModel {
  @column({ isPrimary: true, })
  declare cd_paciente: number

  @column({})
  declare nm_paciente: string

  @column({})
  declare dt_nascimento: string

  @column({})
  declare cd_num_telefone_emergencia: string

  @column({})
  declare nm_num_emergencia: string 

  @column({})
  declare tx_info_adicional: string

  @column({})
  declare cd_parentesco: number

  @column({})
  declare cd_tipo_sanguineo: number

  @column({})
  declare cd_documento: number;

  @column({})
  declare cd_convenio: number

  @manyToMany(() => DoencaCronica, {
  pivotTable: 'doenca_paciente',
  localKey: 'cd_paciente',
  pivotForeignKey: 'cd_paciente',
  relatedKey: 'cd_doenca',
  pivotRelatedForeignKey: 'cd_doenca',
  pivotColumns: ['created_at', 'updated_at'],
  pivotTimestamps: true
})
declare doencasCronicas: ManyToMany<typeof DoencaCronica>

@manyToMany(() => Idioma, {
    pivotTable: 'idioma_paciente',
    localKey: 'cd_paciente',
    pivotForeignKey: 'cd_paciente',
    relatedKey: 'cd_idioma',
    pivotRelatedForeignKey: 'cd_idioma',
    pivotTimestamps: true,
  })
  declare idiomas: ManyToMany<typeof Idioma>

  @manyToMany(() => MedicamentoPaciente, {
    pivotTable: 'medicamento_paciente',
    localKey: 'cd_paciente',
    pivotForeignKey: 'cd_paciente',
    relatedKey: 'cd_medicamento',
    pivotRelatedForeignKey: 'cd_medicamento',
    pivotTimestamps: true,
  })
  declare medicamentos: ManyToMany<typeof MedicamentoPaciente>

  @manyToMany(() => Medico, {
  pivotTable: 'medicos_pacientes',
  localKey: 'cd_paciente',
  pivotForeignKey: 'cd_paciente',
  relatedKey: 'cd_medico',
  pivotRelatedForeignKey: 'cd_medico',
  pivotColumns: ['created_at', 'updated_at'],
  pivotTimestamps: true
})
declare Medicos: ManyToMany<typeof Medico>
  
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

@belongsTo(() => Documento, { foreignKey: 'cd_documento' })
declare documento: BelongsTo<typeof Documento, LucidModel> | null;

@belongsTo(() => Medicos, { foreignKey: 'cd_medico' })
declare medico: BelongsTo<typeof Medicos, LucidModel> | null;

}
