import React from 'react';
import {Text, ScrollView, Avatar, Divider, VStack} from 'native-base';
import Title from '../../../components/Title';

const Perfil: React.FC = () => {
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
            Leonardo de Faveri
          </Title>
          <Text fontSize="md" color="#6B6E71" mb={1}>
            17/05/1992
          </Text>
          <Text fontSize="md" color="#6B6E71">
            São Paulo
          </Text>
        </VStack>

        <Divider mt={5} />
        <Title color="blue.500" mb={2}>
          Histórico médico
        </Title>
        <Text fontSize="md" fontWeight="bold" color="#6B6E71">
          Sinusite
        </Text>
        <Text fontSize="md" fontWeight="bold" color="#6B6E71">
          Gripe
        </Text>
        <Text fontSize="md" fontWeight="bold" color="#6B6E71">
          Virose
        </Text>
      </VStack>
    </ScrollView>
  );
};

export default Perfil;
