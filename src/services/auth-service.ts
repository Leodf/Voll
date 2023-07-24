import api from './api';

export async function makeLogin(email: string, password: string) {
  if (!email || !password) {
    return null;
  }
  try {
    const result = await api.post('/auth/login', {
      email,
      senha: password,
    });
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
