import React from 'react';
import { Button } from '@rneui/themed';
import { COLORS } from '../../../../application/constants/colors.constanst';

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ title, onPress }) => {
  return (
   <>
     <Button
      title={title}
      buttonStyle={{ 
        backgroundColor: COLORS.primary,
        height: 45,
      }}
      containerStyle={{
        width: '100%',
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 16
      }}
      titleStyle={{ color: 'white', marginHorizontal: 20 }}
      onPress={onPress}
    />

   </>
  );
};

export default ButtonPrimary;
