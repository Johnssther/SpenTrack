import React from 'react';
import { MainAuth } from '../../../layout';
import { ButtonPrimary, ButtonSecundary, Title, SubTitle, InputText } from '../../../components';

const RegisterScreen = ({navigation}: any) => {
  return (
    <MainAuth>
      <Title title='Change Password'/>
      <SubTitle subtitle='Change password in your account'/>

      <InputText placeholder={'Password'} />
      <InputText placeholder={'Confirmed Password'} />

      <ButtonPrimary
        title="Change Password"
        onPress={ () => { navigation.navigate('LoginScreen') } }
      />
      <ButtonSecundary
        title="Cancel"
        onPress={ () => { navigation.navigate('LoginScreen') } }
      />

    </MainAuth>
  );
};

export default RegisterScreen;
