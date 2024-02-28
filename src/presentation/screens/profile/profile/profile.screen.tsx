import React from 'react';
import { View, Text } from 'react-native';
import styles from './profile.styles';
import { ButtonPrimary } from '../../../components';
import { Main } from '../../../layout';

const ProfileScreen = ({navigation}) => {
    return (
        <Main>
            <View style={styles.container1}>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Names</Text>
                <Text style={styles.item1Value}>John Alejandro</Text>
            </View>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Surnames</Text>
                <Text style={styles.item1Value}>Hernandez Rodriguez</Text>
            </View>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Password</Text>
                <Text style={styles.item1Value}>************</Text>
            </View>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Justification</Text>
                <Text style={styles.item1Value}>lkd</Text>
            </View>
            <ButtonPrimary
                title="Change password"
                onPress={() => navigation.navigate('ChangePasswordScreen') }
            />
            </View>
        </Main>
    );
}

export default ProfileScreen;
