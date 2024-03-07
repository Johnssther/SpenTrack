import React, { useState } from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import { MainAuth } from '../../../../presentation/layout';
import { ButtonPrimary, Title, Input, ButtonSigInGoogle } from '../../../../presentation/components';
import { COLORS } from '../../../../application/constants/colors.constanst';
import InputPassword from './components/input-password/input-password.component';
import useLoginForm from '../../../hooks/use-login-form';
import styles from './login.styles';

const LoginScreen = ({navigation}: any) => {
  const { email, setEmail, password, setPassword, handleSubmit, errors } = useLoginForm();

  return (
    <MainAuth>
        <Title title='Login'/>

        <Input placeholder={'Email'} errorMessage={errors.email && errors.email} value={email} onChangeText={(email) => setEmail(email)} />
        
        <Input placeholder={'Password'} errorMessage={errors.password && errors.password} value={password} onChangeText={(password) => setPassword(password)} />

        {/* <InputPassword /> */}

        <TouchableOpacity style={{width: '100%'}} onPress={ () => { navigation.navigate('ForgotPasswordScreen') } }>
          <Text style={{ textAlign: 'justify', width: '100%', fontWeight: 'bold', fontSize: 18, paddingLeft:8, marginBottom:10, color: COLORS.slate[500] }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <ButtonPrimary
          title="Sign in"
          onPress={ () => handleSubmit() }
        />

        <Text style={{ textAlign: 'center', width: '100%', fontWeight: 'bold', fontSize: 18, paddingLeft:8, marginBottom:10, color: COLORS.slate[500] }}>Or</Text>

        <ButtonSigInGoogle
          title="Sign in with Google"
          onPress={ () => {  } }
        />

        <Text style={{ marginVertical:18, textAlign: 'center', fontWeight: '600', fontSize: 18, color: COLORS.slate[500] }}>Don`t have an account? </Text>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={ () => { navigation.navigate('RegisterScreen') } }>
          <Text style={{color:'blue', fontSize:18}}>Create Account</Text>
        </TouchableOpacity>
    </MainAuth>
  );
};

export default LoginScreen;
