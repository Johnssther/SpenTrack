import React from 'react';
import { Text } from 'react-native';
import { MainAuth } from '../../../layout';
import { Title, SubTitle, ButtonPrimary, ButtonSecundary, InputText } from '../../../components';

const ForgotPasswordScreen = ({navigation}: any) => {
  return (
    <MainAuth>
      <Title title='Forgot Password ?'/>

      <SubTitle subtitle='Enter your email address below'/>

      <InputText placeholder={'Email'} />

      <ButtonPrimary
        title="Send code"
        onPress={ () => { navigation.navigate('EnterCodeScreen') } }
      />
      <ButtonSecundary
        title="Cancel"
        onPress={ () => { navigation.navigate('LoginScreen') } }
      />

    </MainAuth>
  );
};

export default ForgotPasswordScreen;
