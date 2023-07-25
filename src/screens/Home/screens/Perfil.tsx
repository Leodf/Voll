import AsyncStorage from '@react-native-async-storage/async-storage';
import {Avatar, Divider, ScrollView, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {NavigationProps} from '../../../@types/navigation';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import {getPerfilData} from '../../../services/paciente-service';
import {Paciente} from '../../../services/signup-service';

const Perfil: React.FC<NavigationProps<'Perfil'>> = ({
  navigation,
}: NavigationProps<'Perfil'>) => {
  const [dataPaciente, setDataPaciente] = useState({} as Paciente);

  useEffect(() => {
    async function pacienteData() {
      const pacientId = await AsyncStorage.getItem('pacientId');
      if (!pacientId) {
        return null;
      }

      const result = await getPerfilData(pacientId);
      if (result) {
        setDataPaciente(result);
      }
    }
    pacienteData();
  }, []);

  function logout() {
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('pacientId');
    navigation.replace('Login');
  }

  return (
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Title color="blue.500">Meu Perfil</Title>
        <Avatar
          size="xl"
          source={{uri: 'https://github.com/Leodf.png'}}
          mt={5}
        />
        <Title color="blue.500">Informações pessoais</Title>
        <VStack flex={1} justifyContent="center" alignItems="center">
          <Title fontSize="lg" mb={2}>
            {dataPaciente?.nome}
          </Title>
          <Text fontSize="md" color="#6B6E71" mb={1}>
            {dataPaciente?.email}
          </Text>
          <Text fontSize="md" color="#6B6E71">
            {dataPaciente?.endereco?.estado}
          </Text>
        </VStack>

        <Divider mt={5} />
        <Title color="blue.500" mb={2}>
          Planos de Saúde
        </Title>
        {dataPaciente.planosSaude?.map((plano, index) => (
          <Text fontSize="md" fontWeight="bold" color="#6B6E71" key={index}>
            {plano}
          </Text>
        ))}
        <Button onPress={logout}>Deslogar</Button>
      </VStack>
    </ScrollView>
  );
};

export default Perfil;
