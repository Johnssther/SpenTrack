import React from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from '@rneui/themed';

export default ({navigation}: any) => {

return (
  <>
    <Input
      placeholder='New Password'
    />
    <Input
      placeholder='Confirmed Password'
    />

    <Button
        title="Send Code"
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        containerStyle={{
          width:300,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress={() => navigation.navigate('ProfileScreen') }
      />

  </>
);
};