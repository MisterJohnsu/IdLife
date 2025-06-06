import type { HttpContext } from '@adonisjs/core/http'
import Convenio from '#models/convenio'

export default class ConveniosController {
  async create({ request, response }: HttpContext) {
    try {
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }

      const convenio = await Convenio.create(data)

      return response.created(convenio)
    } catch (error) {
      throw error
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const convenio = await Convenio.findOrFail(params.id)

      return response.ok(convenio)
    } catch (error) {
      throw error
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const convenio = await Convenio.findOrFail(params.id)
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for update' })
      }

      convenio.merge(data)
      await convenio.save()

      return response.ok(convenio)
    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const convenio = await Convenio.findOrFail(params.id)
      await convenio.delete()
      return response.noContent()
    } catch (error) {
      throw error
    }
  }
}
