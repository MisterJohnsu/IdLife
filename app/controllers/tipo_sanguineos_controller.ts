import type { HttpContext } from '@adonisjs/core/http'
import TipoSanguineo from '#models/tipo_sanguineo'

export default class TipoSanguineosController {
  async index({}: HttpContext) {
    return await TipoSanguineo.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nm_tipo_sanguineo'])
    return await TipoSanguineo.create(data)
  }

  async show({ params }: HttpContext) {
    return await TipoSanguineo.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const tipo = await TipoSanguineo.findOrFail(params.id)
    const data = request.only(['nm_tipo_sanguineo'])
    tipo.merge(data)
    await tipo.save()
    return tipo
  }

  async destroy({ params, response }: HttpContext) {
    const tipo = await TipoSanguineo.findOrFail(params.id)
    await tipo.delete()
    return response.noContent()
  }
}
