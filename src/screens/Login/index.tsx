import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
import {
  Box,
  FormControl,
  Image,
  Link,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Logo from '../../assets/Logo.png';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import Title from '../../components/Title';
import {makeLogin} from '../../services/auth-service';

type NavigationProps = {
  navigation: any;
};

const Login: React.FC<NavigationProps> = ({navigation}: NavigationProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    // AsyncStorage.removeItem('token'); //gamb
    async function verifyLogin() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace('Home');
      }
      setLoading(false);
    }
    verifyLogin();
  }, [navigation]);

  async function login() {
    const result = await makeLogin(email, password);
    if (result) {
      const {token} = result;
      AsyncStorage.setItem('token', token);
      const decodeToken = jwtDecode<any>(token);
      const pacientId = decodeToken.id;
      AsyncStorage.setItem('pacientId', pacientId);
      navigation.replace('Home');
    } else {
      toast.show({
        title: 'Erro no login',
        description: 'O Email ou senha não conferem',
        backgroundColor: 'red.500',
      });
    }
  }

  if (loading) {
    return null;
  }

  return (
    <VStack flex={1} justifyContent="center" alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <FormControl>
          <InputText
            label="Login"
            placeholder="Insira seu e-mail"
            value={email}
            onChangeText={setEmail}
          />
          <InputText
            label="Senha"
            placeholder="Insira sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </FormControl>
      </Box>
      <Button onPress={login}>Entrar</Button>
      <Link href="#" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default Login;
