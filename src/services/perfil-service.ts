import api from './api';

export async function getPerfilData(id: string) {
  try {
    const resultado = await api.get(`/paciente/${id}`);
    return resultado.data;
  } catch (error) {
    return null;
  }
}
