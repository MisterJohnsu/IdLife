import type { HttpContext } from '@adonisjs/core/http'
import Medico from '#models/medicos'

export default class MedicosController {
  async create({ request, response }: HttpContext) {
    try {
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }

      const medico = await Medico.create(data)

      return response.created(medico)
    } catch (error) {
      throw error
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const medico = await Medico.findOrFail(params.id)

      return response.ok(medico)
    } catch (error) {
      throw error
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const medico = await Medico.findOrFail(params.id)
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for update' })
      }

      medico.merge(data)
      await medico.save()

      return response.ok(medico)
    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const medico = await Medico.findOrFail(params.id)
      await medico.delete()
      return response.noContent()
    } catch (error) {
      throw error
    }
  }
}
