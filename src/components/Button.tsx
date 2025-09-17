// src/components/Button.tsx
import React from 'react';
import { Button as RadixButton } from '@radix-ui/themes';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <RadixButton onClick={onClick}>
      {children}
    </RadixButton>
  );
};

export default Button;
