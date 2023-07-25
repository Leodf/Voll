import AsyncStorage from '@react-native-async-storage/async-storage';
import {VStack, useToast} from 'native-base';
import React, {useState} from 'react';
import {NavigationProps} from '../../@types/navigation';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import {agendarConsulta} from '../../services/consulta-service';
import {converterStringParaData} from '../../utils/converterStringToDate';

export default function Agendamento({
  route,
  navigation,
}: NavigationProps<'Agendamento'>) {
  const [data, setData] = useState('');
  const toast = useToast();

  async function agendar() {
    const pacienteId = await AsyncStorage.getItem('pacientId');
    const {especialistaId} = route.params;
    if (!pacienteId || !especialistaId || !data) {
      return;
    }
    const dataFormatada = converterStringParaData(data);
    const resultado = await agendarConsulta(
      dataFormatada,
      especialistaId,
      pacienteId,
    );
    if (resultado) {
      toast.show({
        title: 'Consulta agendada com sucesso',
        backgroundColor: 'green.500',
      });
      return navigation.navigate('Consultas');
    }
    toast.show({
      title: 'Erro ao agendar consulta',
      description: 'Horário indisponível',
      backgroundColor: 'red.500',
    });
  }
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
      <InputText placeholder="Digite a data" onChangeText={setData} />
      <Button onPress={agendar}>Agendar</Button>
    </VStack>
  );
}
