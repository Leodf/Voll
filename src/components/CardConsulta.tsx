import {Avatar, Text, VStack} from 'native-base';
import React from 'react';
import Button from './Button';

type CardProps = {
  name: string;
  imageUrl: string;
  speciality: string;
  date?: string;
  isDone?: boolean;
  isMarked?: boolean;
  onPress?: () => void;
};

const CardConsulta: React.FC<CardProps> = ({
  name,
  imageUrl,
  speciality,
  date,
  isDone,
  isMarked,
  onPress,
}: CardProps) => {
  return (
    <VStack
      w="100%"
      bg={isDone ? 'blue.100' : 'white'}
      p="5"
      borderRadius="lg"
      shadow={2}
      mb={5}>
      <VStack flexDir="row">
        <Avatar size="lg" source={{uri: imageUrl}} />
        <VStack pl={4}>
          <Text fontSize="md" bold>
            {name}
          </Text>
          <Text>{speciality}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>
      <Button mt={4} onPress={onPress}>
        {isMarked ? 'Cancelar' : 'Agendar consulta'}
      </Button>
    </VStack>
  );
};

export default CardConsulta;
