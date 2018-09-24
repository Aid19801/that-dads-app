import React from 'react';
import LandingPage from './src/app-container';
import { RegistrationPage, LoginPage, MapPage, HomePage, ProfilePage, ChatPage } from './src/containers';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import profilePage from './src/containers/profile-page/profile-page';

// RootStack
const RootStack = createStackNavigator(
  {
    // prod
    // Landing: {
    //   screen: HomePage,
    //   navigationOptions: {
    //     title: "#ThatDadsApp",
    //     headerLeft: null,
    //   }
    // }, // dev
    Registration: RegistrationPage,
    Login: LoginPage,
    Map: {
      screen: MapPage,
      navigationOptions: {
        title: "#localDads",
        headerLeft: null,
      }
    },
    Chat: {
      screen: ChatPage,
      navigationOptions: {
        title: "#chat",
        headerLeft: null,
      }
    },
    Landing: {
      screen: LoginPage,
      navigationOptions: {
        title: '',
        headerLeft: null,
      }
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        title: "#profile",
        headerLeft: null,
      }
    },
    Home: {
      screen: HomePage,
      navigationOptions: {
        title: "#thatDadsApp",
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
