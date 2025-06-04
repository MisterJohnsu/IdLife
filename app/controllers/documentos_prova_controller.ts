import type { HttpContext } from '@adonisjs/core/http'
import DocumentoProva from '#models/documento'

export default class DocumentosProvaController {
  async index({}: HttpContext) {
    return await DocumentoProva.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nm_arquivo', 'nm_caminho'])
    return await DocumentoProva.create(data)
  }

  async show({ params }: HttpContext) {
    return await DocumentoProva.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const documento = await DocumentoProva.findOrFail(params.id)
    const data = request.only(['nm_arquivo', 'nm_caminho'])
    documento.merge(data)
    await documento.save()
    return documento
  }

  async destroy({ params, response }: HttpContext) {
    const documento = await DocumentoProva.findOrFail(params.id)
    await documento.delete()
    return response.noContent()
  }
}
