import { test } from "@japa/runner";

test.group("Pacientes", () => {
    test('deve registrar um paciente', async ({ client }) => {
        try {
            const response = await client.post('/pacientes/register').json({
            nm_paciente: 'John Doe',
            dt_nascimento: '1990-01-01',
            cd_medico: 1,
            cd_convenio: 1,
            cd_parentesco: 1,
            cd_tipo_sanguineo: 1,
            cd_documento: 1,
            cd_num_telefone_emergencia: '1234567890',
            nm_num_emergencia: 'John Doe',
            tx_info_adicional: 'John Doe',
        })
        response.assertStatus(201)
        } catch (error) {
            console.error("Erro ao registrar paciente:", error);
            throw error;
        }
    })
});