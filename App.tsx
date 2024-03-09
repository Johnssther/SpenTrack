import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Importa PersistGate
import { NavigationContainer } from '@react-navigation/native';
import {store, persistor} from './src/infrastructure/redux/store';
import AppNavigation from './src/application/navigations/navigation';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
        
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        
            </PersistGate>
        </Provider>
    );
}

export default App;

