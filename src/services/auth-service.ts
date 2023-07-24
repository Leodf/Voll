import api from './api';

export async function makeLogin(email: string, password: string) {
  console.log(email, password);
  if (!email || !password) {
    return null;
  }
  try {
    const result = await api.post('/auth/login', {
      email,
      senha: password,
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
