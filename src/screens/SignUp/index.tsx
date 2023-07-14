import {Image, Box, Checkbox, ScrollView, Text} from 'native-base';
import Logo from '../../assets/Logo.png';
import React, {useState} from 'react';
import Title from '../../components/Title';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import section from '../../mocks/SignupText';

const SignUp: React.FC = () => {
  const [numSection, setNumSection] = useState(0);

  function nextSection() {
    if (numSection < section.length - 1) {
      setNumSection(numSection + 1);
    }
  }
  function previousSection() {
    if (numSection > 0) {
      setNumSection(numSection - 1);
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
              <Checkbox value={checkbox.value} key={checkbox.id}>
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
