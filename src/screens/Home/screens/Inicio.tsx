import {ScrollView, Image, Text, Divider, VStack, Box} from 'native-base';
import React from 'react';
import Logo from '../../../assets/Logo.png';
import Title from '../../../components/Title';
import InputText from '../../../components/InputText';
import Button from '../../../components/Button';
import testimonials from '../../../mocks/Testimonials';

const Inicio: React.FC = () => {
  return (
    <ScrollView flex={1} bgColor="white">
      <VStack
        flex={1}
        alignItems="flex-start"
        justifyContent="flex-start"
        p={5}>
        <Image source={Logo} alt="Logo" mt={10} />
        <Title color="blue.500">Boas-vindas!</Title>

        <Box
          w="100%"
          borderRadius="lg"
          p={3}
          mt={10}
          shadow="1"
          borderRightRadius="md">
          <InputText placeholder="Digite a especialidade" />
          <InputText placeholder="Digite sua localização" />
          <Button mt={3} mb={3}>
            Buscar
          </Button>
        </Box>

        <Title color="blue.800" alignSelf="center">
          Depoimentos
        </Title>
        <VStack space={3} divider={<Divider />} w="100%">
          {testimonials.map(testimonial => (
            <Box key={testimonial.id} w="100%" borderRadius="lg" p={3}>
              <Text color="gray.300" fontSize="md" textAlign="justify">
                {testimonial.text}
              </Text>
              <Text
                color="gray.500"
                fontSize="lg"
                fontWeight="bold"
                alignSelf="center"
                mt="2">
                {testimonial.titulo}
              </Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Inicio;
