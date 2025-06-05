import type { HttpContext } from '@adonisjs/core/http'
import Documento from '#models/documento'

export default class DocumentosController {

  async create({ request, response }: HttpContext) {
    try {
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }

      const documento = await Documento.create(data)
      
      console.warn('Documento:',documento)
      return response.created(documento)
    } catch (error) {
      throw error
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const cd_documento = params.id

      if (!cd_documento) {
        return response.badRequest({ message: 'Documento ID is required' })
      }

      const documento = await Documento.findBy('cd_documento', cd_documento)

      if (!documento) {
        return response.notFound({ message: 'Documento not found' })
      }
    } catch (error) {
      throw error
    }
  }

  async update({ params, request, response }: HttpContext) {
    try {

      const { documento } = request.all()
      const cd_documento = params.id

      if (!cd_documento || !documento) {
        return response.badRequest({ message: 'Documento ID and data are required' })
      }

      const updatedDocumento = await Documento.findBy('cd_documento', cd_documento)

      if (!updatedDocumento) {
        return response.notFound({ message: 'Documento not found' })
      }

      updatedDocumento.merge(documento)
      await updatedDocumento.save()

      return response.ok(updatedDocumento)

    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const cd_documento = params.id

      if (!cd_documento) {
        return response.badRequest({ message: 'Documento ID is required' })
      }

      const documento = await Documento.findBy('cd_documento', cd_documento)

      if (!documento) {
        return response.notFound({ message: 'Documento not found' })
      }

      await documento.delete()
      return response.noContent()

    } catch (error) {
      throw error
    }
  }
}