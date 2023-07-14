import {Image, VStack, Text, Box, FormControl, Link} from 'native-base';
import Logo from '../../assets/Logo.png';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Title from '../../components/Title';
import Button from '../../components/Button';
import InputText from '../../components/InputText';

const Login: React.FC = () => {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <FormControl>
          <InputText label="Login" placeholder="Insira seu e-mail" />
          <InputText
            label="Senha"
            placeholder="Insira sua senha"
            secureTextEntry={true}
          />
        </FormControl>
      </Box>
      <Button>Entrar</Button>
      <Link href="#" mt={2}>
        Esqueceu sua senha?
      </Link>
      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};

export default Login;
