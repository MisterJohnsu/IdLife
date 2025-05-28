import type { HttpContext } from '@adonisjs/core/http'
import Convenio from '#models/convenio'

export default class ConveniosController {
  async index({}: HttpContext) {
    return await Convenio.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nm_convenio'])
    return await Convenio.create(data)
  }

  async show({ params }: HttpContext) {
    return await Convenio.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const convenio = await Convenio.findOrFail(params.id)
    const data = request.only(['nm_convenio'])
    convenio.merge(data)
    await convenio.save()
    return convenio
  }

  async destroy({ params, response }: HttpContext) {
    const convenio = await Convenio.findOrFail(params.id)
    await convenio.delete()
    return response.noContent()
  }
}
