import {ITextProps, Text} from 'native-base';
import React, {ReactNode} from 'react';

interface TitleProps extends ITextProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({children, ...rest}: TitleProps) => {
  return (
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      mt={5}
      {...rest}>
      {children}
    </Text>
  );
};

export default Title;
