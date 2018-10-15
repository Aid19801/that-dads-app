import React from 'react';
import LandingPage from './src/app-container';
import { RegistrationPage, LoginPage, MapPage, HomePage, ProfilePage, ChatPage } from './src/containers';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import store from './src/store';
import profilePage from './src/containers/profile-page/profile-page';

import ApolloClient from "apollo-boost";
import appContainer from './src/app-container';

const client = new ApolloClient({
  uri: "https://that-dads-gql.herokuapp.com/graphql",
});

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
        headerLeft: null,
      }
    },
    Chat: {
      screen: ChatPage,
      navigationOptions: {
        headerLeft: null,
      }
    },
    Landing: {
      screen: LandingPage,
      navigationOptions: {
        headerLeft: null,
      }
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        headerLeft: null,
      }
    },
    Home: {
      screen: HomePage,
      navigationOptions: {
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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <RootStack />
    </Provider>
  </ApolloProvider>
);

export default App;
