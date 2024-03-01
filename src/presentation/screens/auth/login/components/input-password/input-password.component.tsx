import React, { useState } from 'react';
import { Text, TouchableOpacity, Button, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './input-password.style';
import { Input } from '../../../../../components/index';

const InputPassword = () => {
  const [secureText, setSecureText] = useState<boolean>(true);
  return (
      <View style={styles.container}> 
        <Input
          secureTextEntry={secureText}
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#aaa"

        />
        <TouchableOpacity style={styles.icon} onPress={() => {setSecureText(!secureText)}}>
          { secureText ? <Icon name="eye" size={25} />:<Icon name="eye-off" size={25} /> }
        </TouchableOpacity>
      </View>
  );
};

export default InputPassword;
