import React from 'react';
import LandingPage from './src/app-container';
import { RegistrationPage, LoginPage, HomePage } from './src/containers';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';

// RootStack
const RootStack = createStackNavigator(
  {
//     Landing: LandingPage, // prod
    Landing: {
      screen: HomePage,
      navigationOptions: {
        title: "#ThatDadsApp",
        headerLeft: null,
      }
    }, // dev
    Registration: RegistrationPage,
    Login: LoginPage,
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: "#ThatDadsApp",
        headerLeft: null,
      }
    }
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
