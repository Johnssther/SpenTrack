import React from 'react';
import { Input } from '@rneui/themed';
import { InputProps } from '@rneui/base';

interface InputTextProps extends InputProps {
  placeholder: string;
  keyboardType?: 'numeric'
  onChange?: () => void;
}

const InputText: React.FC<InputTextProps> = ({ placeholder, keyboardType }) => {
  return (
    <Input
      placeholder={placeholder}
      keyboardType= {keyboardType}
    />
  );
};

export default InputText;
