import React, { useState } from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import { MainAuth } from '../../../../presentation/layout';
import { ButtonPrimary, Title, Input, ButtonSigInGoogle } from '../../../../presentation/components';
import { COLORS } from '../../../../application/constants/colors.constanst';
import InputPassword from './components/input-password/input-password.component';
import useLoginForm from '../../../hooks/use-login-form';
import styles from './login.styles';
import { useUserAuthActions } from '../../../hooks/use-auth-actions';
import { useOnLoginMutation } from '../../../../infrastructure/redux/apis/auth/auth.api';
import { showToast } from '../../../utils/toas.utils';
import Toast from 'react-native-toast-message';

const LoginScreen = ({navigation}: any) => {
  const { email, setEmail, password, setPassword, isValidForm, errors } = useLoginForm();
  const { loginHandle, isLoading } = useUserAuthActions();

  const onLoginPress = async () => {

    if(await isValidForm()) {
      await loginHandle(email, password);
    } else {
      showToast({
         type: "error",
         text1: "Ha ocurrido un error inesperado",
         text2: "The operation is not correct"
       });
    }
  

  }

  return (
    <MainAuth>
        <Toast />

        {isLoading ? <Text>Cargando Datos...</Text> : null }

        <Title title='Login'/>

        <Input placeholder={'Email'} errorMessage={errors.email && errors.email} value={email} onChangeText={(email) => setEmail(email)} />
        
        <Input placeholder={'Password'} errorMessage={errors.password && errors.password} value={password} onChangeText={(password) => setPassword(password)} />

        {/* <InputPassword /> */}

        <TouchableOpacity style={{width: '100%'}} onPress={ () => { navigation.navigate('ForgotPasswordScreen') } }>
          <Text style={{ textAlign: 'justify', width: '100%', fontWeight: 'bold', fontSize: 18, paddingLeft:8, marginBottom:10, color: COLORS.slate[500] }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <ButtonPrimary
          title="Sign in"
          onPress={ () => onLoginPress() }
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
