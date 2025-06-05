import Paciente from '#models/paciente'
import type { HttpContext } from '@adonisjs/core/http'

export default class PacientesController {

  /**
   * Create a new Paciente
   *
   * @body {Object} data
   * @body {number} data.cd_paciente
   * @body {string} data.nm_paciente
   * @body {string} data.dt_nascimento
   * @body {string} data.cd_telefone_ctt_emergencia
   * @body {string} data.nm_ctt_emergencia
   * @body {string} data.tx_info_adicional
   * @body {number} data.cd_parentesco
   * @body {number} data.cd_tipo_sanguineo
   * @body {number} data.cd_documento
   * @body {number} data.cd_convenio
   * @body {number} data.cd_medico
   *
   * @response {Object} paciente
   * @response {number} paciente.cd_paciente
   * @response {string} paciente.nm_paciente
   * @response {string} paciente.dt_nascimento
   * @response {string} paciente.cd_telefone_ctt_emergencia
   * @response {string} paciente.nm_ctt_emergencia
   * @response {string} paciente.tx_info_adicional
   * @response {number} paciente.cd_parentesco
   * @response {number} paciente.cd_tipo_sanguineo
   * @response {number} paciente.cd_documento
   * @response {number} paciente.cd_convenio
   * @response {number} paciente.cd_medico
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

      const paciente = await Paciente.create(data)

      return response.created(paciente)
    } catch (error) {
      throw error
    }
  }

  /**
   * Fetches a paciente by its ID
   *
   * @queryParam {number} id required
   *
   * @response {Object} paciente
   * @response {number} paciente.cd_paciente
   * @response {string} paciente.nm_paciente
   * @response {string} paciente.dt_nascimento
   * @response {string} paciente.cd_telefone_ctt_emergencia
   * @response {string} paciente.nm_ctt_emergencia
   * @response {string} paciente.tx_info_adicional
   * @response {number} paciente.cd_parentesco
   * @response {number} paciente.cd_tipo_sanguineo
   * @response {number} paciente.cd_documento
   * @response {number} paciente.cd_convenio
   * @response {number} paciente.cd_medico
   *
   * @status 200
   * @throws {HttpException}
   * @throws {ValidationError}
   */
  async show({ params, response }: HttpContext) {
    try {
      const cd_paciente = params.id

      if (!cd_paciente) {
        return response.badRequest({ message: 'Paciente ID is required' })
      }

      const paciente = await Paciente.findBy('cd_paciente', cd_paciente)

      if (!paciente) {
        return response.notFound({ message: 'Paciente not found' })
      }

      return response.ok(paciente)

    } catch (error) {
      throw error
    }
  }

  /**
   * Updates a paciente by its ID
   *
   * @queryParam {number} id required
   *
   * @requestBody {Object} paciente
   * @requestBody {string} paciente.nm_paciente
   * @requestBody {string} paciente.dt_nascimento
   * @requestBody {string} paciente.cd_telefone_ctt_emergencia
   * @requestBody {string} paciente.nm_ctt_emergencia
   * @requestBody {string} paciente.tx_info_adicional
   * @requestBody {number} paciente.cd_parentesco
   * @requestBody {number} paciente.cd_tipo_sanguineo
   * @requestBody {number} paciente.cd_documento
   * @requestBody {number} paciente.cd_convenio
   * @requestBody {number} paciente.cd_medico
   *
   * @response {Object} paciente
   * @response {number} paciente.cd_paciente
   * @response {string} paciente.nm_paciente
   * @response {string} paciente.dt_nascimento
   * @response {string} paciente.cd_telefone_ctt_emergencia
   * @response {string} paciente.nm_ctt_emergencia
   * @response {string} paciente.tx_info_adicional
   * @response {number} paciente.cd_parentesco
   * @response {number} paciente.cd_tipo_sanguineo
   * @response {number} paciente.cd_documento
   * @response {number} paciente.cd_convenio
   * @response {number} paciente.cd_medico
   *
   * @status 200
   * @throws {HttpException}
   * @throws {ValidationError}
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const { data } = request.all()
      const cd_paciente = params.id

      if (!cd_paciente || !data) {
        console.warn('Invalid request data for update')
        return response.badRequest({ message: 'Invalid data' })
      }

      const paciente = await Paciente.findBy('cd_paciente', cd_paciente)

      if (!paciente) {
        return response.notFound({ message: 'Paciente not found' })
      }

      paciente.merge(data)
      await paciente.save()

      return response.ok(paciente)

    } catch (error) {
      throw error
    }
  }

  /**
   * Deletes a paciente by its ID
   *
   * @queryParam {number} id required
   *
   * @status 204
   * @throws {HttpException}
   * @throws {ValidationError}
   */
  async destroy({ params, response }: HttpContext) {
    try {
      const cd_paciente = params.id

      if (!cd_paciente) {
        return response.badRequest({ message: 'Paciente ID is required' })
      }

      const paciente = await Paciente.findBy('cd_paciente', cd_paciente)

      if (!paciente) {
        return response.notFound({ message: 'Paciente not found' })
      }

      await paciente.delete()
      return response.noContent()

    } catch (error) {
      throw error
    }
  }
}
