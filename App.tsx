import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/application/navigations/navigation';

const App = () => {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    );
}

export default App;
