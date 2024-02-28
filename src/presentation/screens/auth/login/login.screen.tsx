import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MainAuth } from '../../../layout';
import { View } from 'react-native';
import { ButtonPrimary, Title, InputText, ButtonSigInGoogle } from '../../../components';
import { COLORS } from '../../../../application/constants/colors.constanst';

const LoginScreen = ({navigation}: any) => {
  return (
    <MainAuth>
        <Title title='Login'/>

        <InputText placeholder={'Username'} />
        <InputText placeholder={'Password'} secureTextEntry={true} />

        <TouchableOpacity style={{width: '100%'}} onPress={ () => { navigation.navigate('ForgotPasswordScreen') } }>
          <Text style={{ textAlign: 'justify', width: '100%', fontWeight: 'bold', fontSize: 18, paddingLeft:8, marginBottom:10, color: COLORS.slate[500] }}>Forgot Password ?</Text>
        </TouchableOpacity>

        <ButtonPrimary
          title="Sign in"
          onPress={ () => { navigation.navigate('ProfileScreen') } }
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
