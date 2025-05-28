import type { HttpContext } from '@adonisjs/core/http'
import Parentesco from '#models/parentesco'

export default class ParentescosController {
  async index({}: HttpContext) {
    return await Parentesco.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nm_parentesco'])
    return await Parentesco.create(data)
  }

  async show({ params }: HttpContext) {
    return await Parentesco.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const parentesco = await Parentesco.findOrFail(params.id)
    const data = request.only(['nm_parentesco'])
    parentesco.merge(data)
    await parentesco.save()
    return parentesco
  }

  async destroy({ params, response }: HttpContext) {
    const parentesco = await Parentesco.findOrFail(params.id)
    await parentesco.delete()
    return response.noContent()
  }
}
