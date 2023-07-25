import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {Divider, ScrollView, VStack, useToast} from 'native-base';
import React, {useEffect, useState} from 'react';
import {NavigationProps} from '../../../@types/navigation';
import Button from '../../../components/Button';
import CardConsulta from '../../../components/CardConsulta';
import Title from '../../../components/Title';
import {cancelarConsulta} from '../../../services/consulta-service';
import {getConsultasPaciente} from '../../../services/paciente-service';

type Especialista = {
  id: string;
  nome: string;
  imagem: string;
  especialidade: string;
};

type Consulta = {
  id: string;
  data: string;
  especialista: Especialista;
};

const Consultas: React.FC<NavigationProps<'Consultas'>> = ({
  navigation,
}: NavigationProps<'Consultas'>) => {
  const [nextConsultas, setNextConsultas] = useState<Consulta[]>([]);
  const [previousConsultas, setPreviousConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getConsultas() {
      const pacientId = await AsyncStorage.getItem('pacientId');
      if (!pacientId) {
        return;
      }

      const allConsultas: Consulta[] = await getConsultasPaciente(pacientId);

      const now = new Date();
      const next = allConsultas.filter(
        consulta => new Date(consulta.data) > now,
      );
      const previous = allConsultas.filter(
        consulta => new Date(consulta.data) <= now,
      );

      setNextConsultas(next);
      setPreviousConsultas(previous);
    }
    getConsultas();
  }, [isFocused, loading]);

  async function cancelar(consultaId: string) {
    const resultado = await cancelarConsulta(consultaId);
    if (resultado) {
      toast.show({
        title: 'Consulta cancelada com sucesso',
        backgroundColor: 'green.500',
      });
      setLoading(!loading);
    } else {
      toast.show({
        title: 'Erro ao cancelar consulta',
        backgroundColor: 'red.500',
      });
    }
  }

  return (
    <ScrollView p={5}>
      <VStack flex={1} mb={5}>
        <Title color="blue.500">Minhas consultas</Title>
        <Button mt={5} mb={5} onPress={() => navigation.navigate('Explorar')}>
          Agendar nova consulta
        </Button>
        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Próximas consultas
        </Title>
        {nextConsultas?.map(consulta => (
          <CardConsulta
            key={consulta?.id}
            name={consulta?.especialista?.nome}
            imageUrl={consulta?.especialista?.imagem}
            speciality={consulta?.especialista?.especialidade}
            date={consulta.data}
            isMarked
            onPress={() => cancelar(consulta.id)}
          />
        ))}

        <Divider mt={5} />
        <Title color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>
          Consultas passadas
        </Title>
        {previousConsultas?.map(consulta => (
          <CardConsulta
            key={consulta?.id}
            name={consulta?.especialista?.nome}
            imageUrl={consulta?.especialista?.imagem}
            speciality={consulta?.especialista?.especialidade}
            date={consulta.data}
            isDone
            onPress={() =>
              navigation.navigate('Agendamento', {
                especialistaId: consulta.especialista.id,
              })
            }
          />
        ))}
      </VStack>
    </ScrollView>
  );
};

export default Consultas;
