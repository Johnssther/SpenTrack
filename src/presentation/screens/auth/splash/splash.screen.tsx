import React from 'react';
import { Text } from 'react-native';
import { MainAuth } from '../../../layout';
import { View } from 'react-native';
import styles from './splash.styles';

const SplashScreen = ({navigation}: any) => {
  return (
    <MainAuth>
      <View style={styles.container1}>
        <Text>Splash</Text>
      </View>
    </MainAuth>
  );
};

export default SplashScreen;
