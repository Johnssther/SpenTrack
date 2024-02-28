import React from 'react';
import { Button } from '@rneui/themed';

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
}

const ButtonSecundary: React.FC<ButtonPrimaryProps> = ({ title, onPress }) => {
  return (
    <Button
        title={title}
        buttonStyle={{ 
          backgroundColor: 'white',
          height: 45,
          borderRadius: 16,
        }}
        containerStyle={{
          width: '100%',
          marginHorizontal: 50,
          marginVertical: 10,
          borderRadius: 16,
        }}
        titleStyle={{ color: '#326DF6', marginHorizontal: 20 }}
        type='outline'
        onPress={onPress}
    />
  );
};

export default ButtonSecundary;
