import React from 'react';
import { View, Text } from 'react-native';
import styles from './profile.styles';
import { ButtonPrimary } from '../../../components';
import { Main } from '../../../layout';
import { useAppSelector } from '../../../hooks/store';
import { useUserAuthActions } from '../../../hooks/use-auth-actions';

const ProfileScreen = ({navigation}: any) => {
    const userAuth = useAppSelector((state) => state.userAuth)
    const { id, name, username,  } = userAuth;

    const { logoutHandle } = useUserAuthActions();

    return (
        <Main>
            <View style={styles.container1}>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>ID</Text>
                <Text style={styles.item1Value}>{id}</Text>
            </View>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Names</Text>
                <Text style={styles.item1Value}>{name}</Text>
            </View>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Username</Text>
                <Text style={styles.item1Value}>{username}</Text>
            </View>
            <View style={styles.item1}>
                <Text style={styles.item1Name}>Password</Text>
                <Text style={styles.item1Value}>************</Text>
            </View>
            <ButtonPrimary
                title="Logout"
                onPress={() => {
                    logoutHandle();
                    navigation.navigate('LoginScreen')} 
                }
            />
            </View>
        </Main>
    );
}

export default ProfileScreen;
