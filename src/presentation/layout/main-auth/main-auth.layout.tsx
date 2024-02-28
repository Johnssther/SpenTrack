import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import styles from './main-auth.styles';

interface MainAuthProps {
  children: React.ReactNode;
}

const MainAuth: React.FC<MainAuthProps> = ({ children }) => {
  return (
    <ScrollView>
    <View style={styles.parent}>
      <View style={styles.container}>
        <Image
        source={require('../../assets/images/logo.png')}
        style={{width:120, height:120}}
      />
        {children}
      </View>
    </View>
    </ScrollView>
  );
};

export default MainAuth;
