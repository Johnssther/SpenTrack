import React from 'react';
import { Text } from 'react-native';
import styles from './title.styles';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <Text style={styles.title}>{ title }</Text>
};

export default Title;
