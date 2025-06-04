import { DateTime } from 'luxon'
import type { ManyToMany } from '@adonisjs/lucid/types/relations';
import Paciente from './paciente.ts';
import { BaseModel, column, manyToMany} from '@adonisjs/lucid/orm'

export default class MedicamentoPaciente extends BaseModel {
  @column({ isPrimary: true })
  declare cd_medicamento: number

 @column()
 declare nm_medicamento: string

 @manyToMany(() => Paciente, {
     pivotTable: 'medicamentos_pacientes',
     localKey: 'cd_medicamento',
     pivotForeignKey: 'cd_medicamento',
     relatedKey: 'cd_paciente',
     pivotRelatedForeignKey: 'cd_paciente',
     pivotTimestamps: true,
   })
   declare pacientes: ManyToMany<typeof Paciente>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}