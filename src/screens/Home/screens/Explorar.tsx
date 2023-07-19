import {ScrollView, VStack, Box} from 'native-base';
import React from 'react';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import Title from '../../../components/Title';
import CardConsulta from '../../../components/CardConsulta';

const Explorar: React.FC = () => {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}>
        <Title color="blue.500" alignSelf="center" mb={2}>
          Buscar médicos
        </Title>
        <Box w="100%" borderRadius="lg" p={3} shadow="1" borderRightRadius="md">
          <InputText placeholder="Digite a especialidade" />
          <InputText placeholder="Digite sua localização" />
          <Button mt={3} mb={3}>
            Buscar
          </Button>
        </Box>

        <Title color="blue.500" alignSelf="center" mb={2}>
          Resultado da Busca
        </Title>
        {[1, 2, 3].map((_, index) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}>
            <CardConsulta
              speciality="Cardiologia"
              imageUrl="https://github.com/andreocunha.png"
              name="Dr. Cunha"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default Explorar;
