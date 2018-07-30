import React from 'react';
import { RegistrationPage, LoginPage, LandingPage } from './src/containers';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

// RootStack
const RootStack = createStackNavigator(
  {
    Landing: LandingPage,
    Registration: RegistrationPage,
    Login: LoginPage,
  },
  {
    initialRouteName: 'Landing',
  },
);

// App exports the Rootstack
const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
