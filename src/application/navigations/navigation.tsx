import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  ForgotPasswordScreen,
  EnterCodeScreen,
  ProfileScreen, 
  ChangePasswordScreen 
} from '../../presentation/screens/index';

export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  SplashScreen: undefined;
  ForgotPasswordScreen: undefined;
  EnterCodeScreen: undefined;
  ProfileScreen: undefined;
  ChangePasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppAuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: 'LoginScreen', headerShown: false}}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{title: 'RegisterScreen', headerShown: false}}/>
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{title: 'SplashScreen', headerShown: false}}/>
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{title: 'ForgotPasswordScreen', headerShown: false}}/>
      <Stack.Screen name="EnterCodeScreen" component={EnterCodeScreen} options={{title: 'EnterCodeScreen', headerShown: false}}/>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'Profile'}}/>
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{title: 'Change Password', headerShown: false}}/>
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'Profile'}}/>
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{title: 'Change Password'}}/>
    </Stack.Navigator>
  );
};

export default AppAuthNavigation;
