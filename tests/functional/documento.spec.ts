import { test } from "@japa/runner";

test.group("Documentos", () => {
    test('deve registrar um documento', async ({ client }) => {
        try {
            const response = await client.post('/documentos/register').json({
                cd_documento: 1,
                nm_documento: 'John Doe',
                nm_caminho_arquivo: 'John Doe'
            })
            response.assertStatus(201)
        } catch (error) {
            console.error("Erro ao registrar documento:", error);
            throw error;
        }
    })
})