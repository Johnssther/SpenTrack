import React from 'react';
import { Button } from '@rneui/themed';
import { COLORS } from '../../../../application/constants/colors.constanst';

interface ButtonPrimaryProps {
  title: string;
  onPress: () => void;
}

const ButtonSigInGoogle: React.FC<ButtonPrimaryProps> = ({ title, onPress }) => {
  return (
   <>
     <Button
      title={title}
      buttonStyle={{ 
        backgroundColor: COLORS.white,
        height: 45,
        borderRadius: 16
      }}
      containerStyle={{
        width: '100%',
        marginHorizontal: 50,
        marginVertical: 10,
        borderRadius: 16
      }}
      titleStyle={{ color: COLORS.primary, marginHorizontal: 20 }}
      type='outline'
      onPress={onPress}
    />

   </>
  );
};

export default ButtonSigInGoogle;
