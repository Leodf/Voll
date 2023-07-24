import api from './api';

export type Paciente = {
  cpf: string;
  nome: string;
  email: string;
  endereco: Endereco;
  senha: string;
  telefone: string;
  possuiPlanoSaude: boolean;
  planosSaude?: number[];
  imagem?: string;
};

export interface Endereco {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  estado: string;
}

export async function makeSignUp(paciente: Paciente) {
  if (!paciente) {
    return null;
  }

  try {
    const resultado = await api.post('/paciente', paciente);
    return resultado.data;
  } catch (error) {
    return null;
  }
}
