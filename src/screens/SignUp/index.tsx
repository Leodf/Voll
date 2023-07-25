import {Box, Checkbox, Image, ScrollView, Text, useToast} from 'native-base';
import React, {useState} from 'react';
import Logo from '../../assets/Logo.png';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import Title from '../../components/Title';
import {makeSignUp} from '../../services/signup-service';
import section from '../../utils/SignupText';

type NavigationProps = {
  navigation: any;
};

const SignUp: React.FC<NavigationProps> = ({navigation}: NavigationProps) => {
  const [numSection, setNumSection] = useState(0);
  const [data, setData] = useState({} as any);
  const [plans, setPlans] = useState([] as Array<number>);
  const toast = useToast();

  function nextSection() {
    if (numSection < section.length - 1) {
      setNumSection(numSection + 1);
    } else {
      signup();
    }
  }
  function previousSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
    }
  }

  function updateData(id: string, value: string) {
    setData({...data, [id]: value});
  }

  async function signup() {
    const result = await makeSignUp({
      cpf: data.cpf,
      nome: data.nome,
      email: data.email,
      endereco: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        estado: data.estado,
        complemento: data.complemento,
      },
      senha: data.senha,
      telefone: data.telefone,
      possuiPlanoSaude: plans.length > 0,
      planosSaude: plans,
      imagem: data.imagem,
    });
    if (result) {
      toast.show({
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer login',
        backgroundColor: 'green.500',
      });
      navigation.replace('Login');
    } else {
      toast.show({
        title: 'Erro ao cadastrar',
        description: 'Verifique os dados e tente novamente',
        backgroundColor: 'red.500',
      });
    }
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />
      <Title>{section[numSection].title}</Title>
      <Box>
        {section[numSection]?.inputText?.map(item => {
          return (
            <InputText
              label={item.label}
              placeholder={item.placeholder}
              key={item.id}
              secureTextEntry={item.secureTextEntry}
              value={data[item.name]}
              onChangeText={text => updateData(item.name, text)}
            />
          );
        })}
      </Box>
      {numSection === section.length - 1 && (
        <Box>
          <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={2}>
            Selecione o plano:
          </Text>
          {section[numSection].checkbox.map(checkbox => {
            return (
              <Checkbox
                value={checkbox.value}
                key={checkbox.id}
                onChange={() => {
                  setPlans(previousPlans => {
                    if (previousPlans.includes(checkbox.id)) {
                      return previousPlans.filter(id => id !== checkbox.id);
                    }
                    return [...previousPlans, checkbox.id];
                  });
                }}
                isChecked={plans.includes(checkbox.id)}>
                {checkbox.value}
              </Checkbox>
            );
          })}
        </Box>
      )}

      {numSection > 0 && (
        <Button onPress={previousSection} bgColor="gray.400">
          Voltar
        </Button>
      )}
      <Button onPress={nextSection} mt={4} mb={20}>
        Avançar
      </Button>
    </ScrollView>
  );
};

export default SignUp;
