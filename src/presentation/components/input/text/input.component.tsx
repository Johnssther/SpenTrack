import React from 'react';
import { Input as InputRNEUI } from '@rneui/themed';
import { InputProps as InputPropsRNEUI } from '@rneui/base';

interface InputProps extends InputPropsRNEUI {
  placeholder: string;
  errorMessage?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  styles?: any,
  onChange?: () => void;
}

const Input: React.FC<InputProps> = ({ placeholder, errorMessage, keyboardType, styles, ...rest }) => {
  return (
    <InputRNEUI
      placeholder={placeholder}
      keyboardType= {keyboardType}
      inputStyle={styles}
      errorStyle={{ color: 'red', fontWeight: 'bold' }}
      errorMessage={errorMessage}
      { ...rest }
    />
  );
};

export default Input;
