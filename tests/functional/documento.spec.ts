import { test } from "@japa/runner";

export interface DocumentoCreateData {
    cd_documento: number;
    nm_documento: string;
    nm_caminho_arquivo: string;
}

test.group("Documentos", () => {
    test('deve registrar um documento', async ({ client: api }) => {
        try {

            const response = await api.post('/documentos/register').json({
                documento: {
                    cd_documento: 16012006,
                    nm_documento: 'John Doe',
                    nm_caminho_arquivo: 'John Doe'
                }
            })

            response.assertStatus(201)

        } catch (error) {
            console.error("Erro ao registrar documento:", error);
            throw error;
        }
    })
})