import React from 'react';
import { MainAuth } from '../../../layout';
import { ButtonPrimary, ButtonSecundary, Title, SubTitle, Input } from '../../../components';
import useRegisterForm from '../../../hooks/use-register-form';

const RegisterScreen = ({navigation}: any) => {
  const {
    name,
    setName,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmedPassword,
    setConfirmedPassword,
    handleSubmit,
    errors, } = useRegisterForm();

  return (
    <MainAuth>
      <Title title='Create Account'/>
      <SubTitle subtitle='Create a new Account to make your booking list'/>

      <Input 
        placeholder={'Name'} 
        errorMessage={errors.name && errors.name} 
        value={name} 
        onChangeText={(name) => setName(name)} 
      />
      <Input 
        placeholder={'Username'} 
        errorMessage={errors.username && errors.username} 
        value={username} 
        onChangeText={(username) => setUsername(username)} 
      />
      <Input 
        placeholder={'Email'} 
        errorMessage={errors.email && errors.email} 
        value={email} 
        onChangeText={(email) => setEmail(email)} 
      />
     <Input 
        placeholder={'Password'} 
        errorMessage={errors.password && errors.password} 
        value={password} 
        onChangeText={(password) => setPassword(password)} 
      />
     <Input 
        placeholder={'Confirmed Password'} 
        errorMessage={errors.confirmedPassword && errors.confirmedPassword} 
        value={confirmedPassword} 
        onChangeText={(confirmedPassword) => setConfirmedPassword(confirmedPassword)} 
      />
      <ButtonPrimary
        title="Create Account"
        onPress={ () => handleSubmit() }
        // onPress={ () => { navigation.navigate('LoginScreen') } }
      />
      <ButtonSecundary
        title="Cancel"
        onPress={ () => { navigation.navigate('LoginScreen') } }
      />

    </MainAuth>
  );
};

export default RegisterScreen;
