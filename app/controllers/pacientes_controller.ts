import type { HttpContext } from '@adonisjs/core/http'
import Paciente from '#models/paciente'

export default class PacientesController {
  async index({}: HttpContext) {
    return await Paciente.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only([
      'nm_paciente',
      'dt_nascimento',
      'cd_num_telefone_emergencia',
      'nm_num_emergencia',
      'tx_info_adicional',
      'cd_parentesco',
      'cd_tipo_sanguineo',
      'cd_documento',
      'cd_convenio',
      'cd_medico',
    ])
    return await Paciente.create(data)
  }

  async show({ params }: HttpContext) {
    return await Paciente.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const paciente = await Paciente.findOrFail(params.id)
    const data = request.only([
      'nm_paciente',
      'dt_nascimento',
      'cd_num_telefone_emergencia',
      'nm_num_emergencia',
      'tx_info_adicional',
      'cd_parentesco',
      'cd_tipo_sanguineo',
      'cd_documento',
      'cd_convenio',
      'cd_medico',
    ])
    paciente.merge(data)
    await paciente.save()
    return paciente
  }

  async destroy({ params, response }: HttpContext) {
    const paciente = await Paciente.findOrFail(params.id)
    await paciente.delete()
    return response.noContent()
  }
}
