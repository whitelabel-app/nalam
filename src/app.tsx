import React from 'react';
import { Modal } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'react-native-firebase';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { IntlProvider } from 'react-intl';
import AppStack from './screens/App';
import AuthStack from './screens/Auth';
import InitAppScreen from './screens/InitApp';
import store from './redux/store';
import LoadingScreen from './screens/Loading';

import 'intl';
import 'intl/locale-data/jsonp/en';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            AppLoading: LoadingScreen,
            InitApp: InitAppScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'InitApp',
        },
    ),
);

function ModalWrapper() {
    const {
        isLoadingApp,
        transparent,
        title,
        description,
        onStopLoading,
    } = useSelector(state => state.app.spinner);
    return (
        <Modal
            visible={isLoadingApp}
            transparent={transparent}
            onDismiss={onStopLoading}>
            <LoadingScreen
                transparent={transparent}
                title={title}
                description={description}
            />
        </Modal>
    );
}

const value = { app: firebase };

export default function App() {
    return (
        <IntlProvider locale="en">
            <Provider store={store}>
                <ModalWrapper />
                <FirebaseProvider value={value}>
                    <Routes />
                </FirebaseProvider>
            </Provider>
        </IntlProvider>
    );
}
