import {FormControl, Input} from 'native-base';
import React from 'react';

interface InputTextProps {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
}: InputTextProps) => {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
      />
    </FormControl>
  );
};

export default InputText;
