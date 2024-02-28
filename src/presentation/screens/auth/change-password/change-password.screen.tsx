import React from 'react';
import { Input } from '@rneui/themed';
import { ButtonPrimary, ButtonSecundary } from '../../../components';

import { MainAuth } from '../../../layout';
import { View } from 'react-native';
import styles from './change-password.styles';

export default ({navigation}: any) => {
  return (
    <MainAuth>
      <View style={styles.container1}>
        <Input
          placeholder='New Password'
        />
        <Input
          placeholder='Confirmed Password'
        />
        <ButtonPrimary
            title="Change Password"
            onPress={() => navigation.navigate('ProfileScreen') }
          />
           <ButtonSecundary
            title="Cancel"
            onPress={() => navigation.navigate('ProfileScreen') }
          />
      </View>
    </MainAuth>
  );
};