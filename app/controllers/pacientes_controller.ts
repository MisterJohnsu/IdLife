import type { HttpContext } from '@adonisjs/core/http'
import Paciente from '#models/paciente'

export default class PacientesController {
  async index({}: HttpContext) {
    return await Paciente.all()
  }

  async create({ request, response }: HttpContext) {
    try {
      console.log('request 1=========>')
      const { data } = request.all()
      console.log('data 1=========>', data)
      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }
      console.log('data =========>', data)
      const paciente = await Paciente.create(data)
      return response.created(paciente)
    } catch (error) {
      throw error
    }
  }

  async show({ params }: HttpContext) {
    return await Paciente.findOrFail(params.id)
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const paciente = await Paciente.findOrFail(params.id)
      if (!paciente) {
        return response.notFound({ message: 'Paciente not found' })
      }
    const { data } = request.all()
    if (!data) {
      return response.badRequest({ message: 'No data provided for update' })
    }
  
    paciente.merge(data)
    await paciente.save()
    return response.ok(paciente)
    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    const paciente = await Paciente.findOrFail(params.id)
    await paciente.delete()
    return response.noContent()
  }
}
