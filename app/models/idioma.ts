import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations';
import { DateTime } from 'luxon'
import Paciente from './paciente.ts';

export default class Idioma extends BaseModel {
  @column({ isPrimary: true })
  declare cd_idioma: number;

  @column({ columnName: 'nm_idioma' })
  declare nm_idioma: string;

  @manyToMany(() => Paciente, {
    pivotTable: 'idiomas',
    localKey: 'cd_idioma',
    pivotForeignKey: 'cd_idioma',
    relatedKey: 'cd_paciente',
    pivotRelatedForeignKey: 'cd_paciente',
    pivotTimestamps: true,
  })
  declare pacientes: ManyToMany<typeof Paciente>

  @column.dateTime({ autoCreate: true, columnName: 'created_at', serializeAs: 'created_at' })
  declare created_at: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    columnName: 'updated_at',
    serializeAs: 'updated_at',
  })
  declare updated_at: DateTime
}
