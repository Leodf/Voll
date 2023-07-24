import {Box, ScrollView, VStack} from 'native-base';
import React, {useState} from 'react';
import Button from '../../../components/Button';
import CardConsulta from '../../../components/CardConsulta';
import InputText from '../../../components/InputText';
import Title from '../../../components/Title';
import {getEspecialistaPorEstado} from '../../../services/especialista-service';

type IEspecialista = {
  nome: string;
  imagem: string;
  especialidade: string;
};

const Explorar: React.FC = () => {
  const [estado, setEstado] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  async function search() {
    if (!estado || !especialidade) {
      return null;
    }
    const result = await getEspecialistaPorEstado(estado, especialidade);
    if (result) {
      // console.log(result);
      setResultadoBusca(result);
    }
  }

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
          <InputText
            placeholder="Digite a especialidade"
            value={especialidade}
            onChangeText={setEspecialidade}
          />
          <InputText
            placeholder="Digite sua localização"
            value={estado}
            onChangeText={setEstado}
          />
          <Button mt={3} mb={3} onPress={search}>
            Buscar
          </Button>
        </Box>

        <Title color="blue.500" alignSelf="center" mb={2}>
          Resultado da Busca
        </Title>
        {resultadoBusca?.map((especialista: IEspecialista, index) => (
          <VStack
            flex={1}
            w="100%"
            alignItems="flex-start"
            bgColor="white"
            key={index}>
            <CardConsulta
              speciality={especialista.especialidade}
              imageUrl={especialista.imagem}
              name={especialista.nome}
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default Explorar;
