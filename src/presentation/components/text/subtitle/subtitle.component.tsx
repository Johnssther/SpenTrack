import React from 'react';
import { Text } from 'react-native';
import styles from './subtitle.styles';

interface TitleProps {
  subtitle: string;
}

const SubTitle: React.FC<TitleProps> = ({ subtitle }) => {
  return <Text style={styles.subtitle}>{ subtitle }</Text>
};

export default SubTitle;
