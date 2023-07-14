import {ScrollView, Image, Box, Text, Divider, VStack} from 'native-base';
import React from 'react';
import Logo from '../../../assets/Logo.png';
import Title from '../../../components/Title';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';

const Inicio: React.FC = () => {
  return (
    <ScrollView flex={1} p={5}>
      <VStack flex={1} mb={10}>
        <Image source={Logo} alt="Logo Voll" />
        <Title ml={1} alignSelf="flex-start" color="blue.500">
          Boas-vindas!
        </Title>
        <Box
          m={1}
          p={1}
          shadow={2}
          borderColor="gray.200"
          borderWidth="1"
          rounded="lg">
          <Box maxW="90%" alignSelf="center">
            <InputText placeholder="Digite a especialidade" />
            <InputText placeholder="Digite sua localização" />
            <Button mt={3} mb={3} autoSize={true}>
              Buscar
            </Button>
          </Box>
        </Box>
        <Title color="blue.800" mb={3}>
          Depoimentos
        </Title>
        <Box m={1}>
          <Text fontSize="md" color="#6B6E71">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            officia esse reprehenderit dolor ex delectus nostrum non, cum
            asperiores, culpa ad fuga nobis rerum beatae quaerat minima expedita
            consequuntur assumenda.
          </Text>
          <Title fontSize="lg">Leonardo, 31 anos, São Paulo/SP</Title>
          <Divider mt={5} mb={5} />
        </Box>
        <Box m={1}>
          <Text fontSize="md" color="#6B6E71">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            officia esse reprehenderit dolor ex delectus nostrum non, cum
            asperiores, culpa ad fuga nobis rerum beatae quaerat minima expedita
            consequuntur assumenda.
          </Text>
          <Title fontSize="lg">Leonardo, 31 anos, São Paulo/SP</Title>
          <Divider mt={5} />
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default Inicio;
