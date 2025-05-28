import type { HttpContext } from '@adonisjs/core/http'
import Medico from 'App/models/medicos.ts'

export default class MedicosController {
  async index({}: HttpContext) {
    return await Medico.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['crm', 'nm_medico', 'especializacao'])
    return await Medico.create(data)
  }

  async show({ params }: HttpContext) {
    return await Medico.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const medico = await Medico.findOrFail(params.id)
    const data = request.only(['crm', 'nm_medico', 'especializacao'])
    medico.merge(data)
    await medico.save()
    return medico
  }

  async destroy({ params, response }: HttpContext) {
    const medico = await Medico.findOrFail(params.id)
    await medico.delete()
    return response.noContent()
  }
}
