import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import styles from './main.styles';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <ScrollView>
    <View style={styles.parent}>
      <View style={styles.container}>
        {children}
      </View>
    </View>
    </ScrollView>
  );
};

export default Main;
