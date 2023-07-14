import {Button as NativeButton, IButtonProps} from 'native-base';
import React, {ReactNode} from 'react';

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  autoSize = false,
  color,
  ...rest
}: ButtonProps) => {
  return (
    <NativeButton
      w={autoSize ? 'auto' : '100%'}
      bg={color || 'blue.800'}
      mt={10}
      borderRadius="lg"
      _text={{color: 'white'}}
      {...rest}>
      {children}
    </NativeButton>
  );
};

export default Button;
