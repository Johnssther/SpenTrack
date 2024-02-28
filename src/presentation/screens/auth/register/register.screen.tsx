import React from 'react';
import { MainAuth } from '../../../layout';
import { ButtonPrimary, ButtonSecundary, Title, SubTitle, InputText } from '../../../components';

const RegisterScreen = ({navigation}: any) => {
  return (
    <MainAuth>
      <Title title='Create Account'/>
      <SubTitle subtitle='Create a new Account to make your booking list'/>

      <InputText placeholder={'Name'} />
      <InputText placeholder={'Suername'} />
      <InputText placeholder={'Email'} />
      <InputText placeholder={'Password'} />
      <InputText placeholder={'Confirmed Password'} />

      <ButtonPrimary
        title="Create Account"
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
