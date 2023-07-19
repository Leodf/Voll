import {Divider, ScrollView, VStack} from 'native-base';
import React from 'react';
import CardConsulta from '../../../components/CardConsulta';
import Title from '../../../components/Title';
import Button from '../../../components/Button';

const Consultas: React.FC = () => {
  return (
    <ScrollView p={5}>
      <VStack flex={1} mb={5}>
        <Title color="blue.500">Minhas consultas</Title>
        <Button mt={5} mb={5}>
          Agendar nova consulta
        </Button>
        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Próximas consultas
        </Title>
        <CardConsulta
          name="Dr. Leonardo de Faveri"
          imageUrl="https://github.com/Leodf.png"
          speciality="Cardiologista"
          date="17/07/2023"
          isMarked
        />
        <Divider mt={5} />
        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Consultas passadas
        </Title>

        <CardConsulta
          name="Dr. Leonardo de Faveri"
          imageUrl="https://github.com/Leodf.png"
          speciality="Cardiologista"
          date="17/07/2023"
          isDone
        />
        <CardConsulta
          name="Dr. Leonardo de Faveri"
          imageUrl="https://github.com/Leodf.png"
          speciality="Cardiologista"
          date="17/07/2023"
          isDone
        />
        <CardConsulta
          name="Dr. Leonardo de Faveri"
          imageUrl="https://github.com/Leodf.png"
          speciality="Cardiologista"
          date="17/07/2023"
          isDone
        />
      </VStack>
    </ScrollView>
  );
};

export default Consultas;
