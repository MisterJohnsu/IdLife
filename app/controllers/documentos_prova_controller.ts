import type { HttpContext } from '@adonisjs/core/http'
import Documento from '#models/documento'

export default class DocumentosProvaController {
  /**
   * Create a new Documento
   *
   * @body {Object} data
   * @body {string} data.nm_arquivo
   * @body {string} data.nm_caminho_arquivo
   *
   * @response {Object} documento
   * @response {number} documento.cd_documento
   * @response {string} documento.nm_arquivo
   * @response {string} documento.nm_caminho_arquivo
   * @response {string} documento.created_at
   * @response {string} documento.updated_at
   *
   * @status 201
   * @throws {HttpException}
   * @throws {ValidationError}
   */
  async create({ request, response }: HttpContext) {
    try {
      const { data } = request.all()

      if (!data) {
        return response.badRequest({ message: 'No data provided for creation' })
      }

      const documento = await Documento.create(data)

      return response.created(documento)
    } catch (error) {
      throw error
    }
  }

  /**
   * Fetches a documento by its ID
   *
   * @queryParam {number} id required
   *
   * @response {Object} documento
   * @response {number} documento.cd_documento
   * @response {string} documento.nm_arquivo
   * @response {string} documento.nm_caminho_arquivo
   * @response {string} documento.created_at
   * @response {string} documento.updated_at
   *
   * @status 200
   * @throws {HttpException}
   * @throws {ValidationError}
   */
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

      return response.ok(documento)
    } catch (error) {
      throw error
    }
  }

  /**
   * Updates a documento by its ID
   *
   * @queryParam {number} id required
   *
   * @body {Object} data
   * @body {string} data.nm_arquivo
   *
   * @response {Object} updated_documento
   * @response {number} updated_documento.cd_documento
   * @response {string} updated_documento.nm_arquivo
   * @response {string} updated_documento.nm_caminho_arquivo
   * @response {string} updated_documento.created_at
   * @response {string} updated_documento.updated_at
   *
   * @status 200
   * @throws {HttpException}
   * @throws {ValidationError}
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const { data } = request.all()
      const cd_documento = params.id

      if (!cd_documento || !data) {
        console.warn('Invalid request data for update')
        return response.badRequest({ message: 'Documento ID is required' })
      }

      const documento = await Documento.findBy('cd_documento', cd_documento)

      if (!documento) {
        return response.notFound({ message: 'Documento not found' })
      }

      documento.merge(data)
      await documento.save()

      return response.ok(documento)
    } catch (error) {
      throw error
    }
  }

  /**
   * Deletes a documento by its ID
   *
   * @queryParam {number} id required
   *
   * @status 204
   * @throws {HttpException}
   * @throws {ValidationError}
   */
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
