import type { HttpContext } from '@adonisjs/core/http'
import TipoSanguineo from '#models/tipo_sanguineo'

export default class TipoSanguineosController {
  async create({ request, response }: HttpContext) {
    try {
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }

      const tipo = await TipoSanguineo.create(data)

      return response.created(tipo)
    } catch (error) {
      throw error
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const tipo = await TipoSanguineo.findOrFail(params.id)

      return response.ok(tipo)
    } catch (error) {
      throw error
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const { data } = request.all()
      const tipo = await TipoSanguineo.findOrFail(params.id)

      if (!data) {
        return response.badRequest({ message: 'No data provided for update' })
      }

      tipo.merge(data)
      await tipo.save()

      return response.ok(tipo)
    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const tipo = await TipoSanguineo.findOrFail(params.id)
      await tipo.delete()
      return response.noContent()
    } catch (error) {
      throw error
    }
  }
}
