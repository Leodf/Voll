import api from './api';

export async function agendarConsulta(
  data: Date,
  especialistaId: string,
  pacienteId: string,
) {
  try {
    const resultado = await api.post('/consulta', {
      especialista: especialistaId,
      paciente: pacienteId,
      data,
    });
    return resultado.data;
  } catch (error) {
    return null;
  }
}

export async function cancelarConsulta(consultaId: string) {
  try {
    const resultado = await api.delete(`/consulta/${consultaId}`);
    return resultado.data;
  } catch (error) {
    return null;
  }
}
