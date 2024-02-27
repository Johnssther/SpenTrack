import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreen, ChangePasswordScreen } from '../../presentation/screens/index';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{title: 'Profile'}}/>
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{title: 'Change Password'}}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
