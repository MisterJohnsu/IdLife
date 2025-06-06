import type { HttpContext } from '@adonisjs/core/http'
import Parentesco from '#models/parentesco'
import { request } from 'http'

export default class ParentescosController {
  async create({ request, response }: HttpContext) {
    try {
      const data = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }

      const parentesco = await Parentesco.create(data)

      return response.created(parentesco)
    } catch (error) {
      throw error
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const parentesco = await Parentesco.findOrFail(params.id)

      return response.ok(parentesco)
    } catch (error) {
      throw error
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const { data } = request.all()
      const parentesco = await Parentesco.findOrFail(params.id)

      if (!data) {
        return response.badRequest({ message: 'No data provided for update' })
      }

      parentesco.merge(data)
      await parentesco.save()

      return response.ok(parentesco)
    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const parentesco = await Parentesco.findOrFail(params.id)
      await parentesco.delete()
      return response.noContent()
    } catch (error) {
      throw error
    }
  }
}
