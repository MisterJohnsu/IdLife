import type { HttpContext } from '@adonisjs/core/http'
import DocumentoProva from '#models/documento'

export default class DocumentosProvaController {
  async index({}: HttpContext) {
    return await DocumentoProva.all()
  }

async create({ request, response }: HttpContext) {
  try {
    const { data } = request.all()
    if (!data) {
      return response.badRequest({ message: 'No data provided for creation' })
    }
    const documento = await DocumentoProva.create(data)
    return response.created(documento)
  } catch (error) {
    throw error
  }
}

  async show({ params }: HttpContext) {
    return await DocumentoProva.findOrFail(params.id)
  }

  async update({ params, request, response }: HttpContext) {
    try {
      const documento = await DocumentoProva.findOrFail(params.id)
   if (!documento) {
      return response.notFound({ message: 'Documento not found' })
    }
    const { data } = request.all()
    if (!data) {
      return response.badRequest({ message: 'No data provided for update' })
    }
    documento.merge(data)
    await documento.save()
    return documento
    } catch (error) {
      throw error
    }
  }

  async destroy({ params, response }: HttpContext) {
    const documento = await DocumentoProva.findOrFail(params.id)
    await documento.delete()
    return response.noContent()
  }
}
