import React from 'react';
import { Text } from 'react-native';
import { MainAuth } from '../../../layout';
import { Title, SubTitle, ButtonPrimary, ButtonSecundary, Input } from '../../../components';

const EnterCodeScreen = ({navigation}: any) => {
  return (
    <MainAuth>
      <Title title='Enter Code'/>

      <SubTitle subtitle='Enter your forgot key below'/>

      <Input placeholder={'code'} keyboardType='numeric' />

      <ButtonPrimary
        title="Verify"
        onPress={ () => { navigation.navigate('ChangePasswordScreen') } }
      />
      <ButtonSecundary
        title="Cancel"
        onPress={ () => { navigation.navigate('LoginScreen') } }
      />

    </MainAuth>
  );
};

export default EnterCodeScreen;
