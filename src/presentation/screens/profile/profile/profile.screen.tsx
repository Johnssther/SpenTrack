import React from 'react';
import { View, Text } from 'react-native';
import styles from './profile.styles';
import { Button } from '@rneui/base';


const ProfileScreen = ({navigation}) => {

    return (
        <View style={styles.profile}>
            <Text>ProfileScreen</Text>
            <Button
                title="Change password"
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
                containerStyle={{
                width:300,
                marginHorizontal: 50,
                marginVertical: 10,
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20 }}
                onPress={() => navigation.navigate('ChangePasswordScreen') }
            />
        </View>
    );
}

export default ProfileScreen;
