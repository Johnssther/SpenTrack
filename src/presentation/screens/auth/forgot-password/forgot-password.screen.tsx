import React from 'react';
import { Text } from 'react-native';
import { MainAuth } from '../../../layout';
import { Title, SubTitle, ButtonPrimary, ButtonSecundary, Input } from '../../../components';
import useForgotPasswordForm from '../../../hooks/use-forgot-password-form';

const ForgotPasswordScreen = ({navigation}: any) => {
  const { email, setEmail, errors, handleSubmit } = useForgotPasswordForm({navigation});
  const submit = () => {
    handleSubmit()


  }
  return (
    <MainAuth>
      <Title title='Forgot Password ?'/>

      <SubTitle subtitle='Enter your email address below'/>

      <Input 
        placeholder={'Email'} 
        errorMessage={errors.email && errors.email} 
        value={email} 
        onChangeText={(email) => setEmail(email)} 
      />

      <ButtonPrimary
        title="Send code"
        onPress={ () => { handleSubmit() } }
        // onPress={ () => { navigation.navigate('EnterCodeScreen') } }
      />
      <ButtonSecundary
        title="Cancel"
        onPress={ () => { navigation.navigate('LoginScreen') } }
      />

    </MainAuth>
  );
};

export default ForgotPasswordScreen;
