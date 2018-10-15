import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, AsyncStorage } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { USER_LOGGING_IN, LOAD_LOGIN_PAGE } from '../../actions/index';
import { connect } from 'react-redux';

import { getUserAsyncStorage } from '../../utils/utils';
import { colorScheme } from '../../utils/colorscheme';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    componentDidMount = async () => {
        this.props.loadLoginPage();
        const { userName, password } = await getUserAsyncStorage();
        console.log('username from asyncStorage: ', userName);
        this.setState({ userName, password });
    }

    componentWillReceiveProps = (nextProps) => {

        console.log('username from CWRP nextProps: ', nextProps.userName);
        if (nextProps.isLoggedIn) {
            nextProps.navigation.navigate('Home');
        }
    }
    
    render() {

        const { userName, password } = this.state;
        const { checkLogin, isLoading, isLoggedIn } = this.props;

        console.log('is logged in?', isLoggedIn);

        if (isLoggedIn) {

            console.log('User is logged in: ', userName);
            return (

                <View style={styles.container}>
                    <View style={styles.inputAndButtonContainer}>
                        <TextInput
                            placeholder="username"
                            value={userName}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            style={styles.textInput}
                            onChangeText={(e) => this.setState({ userName: e })}
                        />
                        <TextInput
                            placeholder="password"
                            value={password}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={(e) => this.setState({ password: e })}
                        />

                        <Button
                            title="Login"
                            onPress={() => checkLogin(userName, password)}
                            buttonStyle={styles.button}
                        />

                        {isLoading && <Text style={styles.isLoading}>Loading...</Text>}
                    </View>

                </View>
            )
        } else {
            return (
                <View style={styles.container}>

                    <View style={styles.inputAndButtonContainer}>
                        <TextInput
                            placeholder="username"
                            underlineColorAndroid="rgba(0,0,0,0)"
                            style={styles.textInput}
                            onChangeText={(e) => this.setState({ userName: e })}
                        />
                        <TextInput
                            placeholder="password"
                            underlineColorAndroid="rgba(0,0,0,0)"
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={(e) => this.setState({ password: e })}
                        />

                        <Button 
                            title="Login"
                            onPress={() => checkLogin(userName, password)}
                            buttonStyle={styles.button}
                        />

                        { isLoading && <Text style={styles.isLoading}>Loading...</Text> }
                    </View>

                </View>
            );
        }
    }
}



const mapStateToProps = (state) => ({
    isLoggedIn: state.loginStatusReducer.isLoggedIn,
    isLoading: state.loginStatusReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    loadLoginPage: () => dispatch({ type: LOAD_LOGIN_PAGE }),
    checkIfUserIsLoggedIn: () => dispatch({ type: CHECK_LOGIN_STATUS })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderColor: 'white', 
        borderWidth: 2,
    },
    inputAndButtonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    button: {
        backgroundColor: "rgba(92, 99,216, 1)",
        height: 60,
        width: 120,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        backgroundColor: "rgba(92, 99,216, 1)",
    },
    textInput: {
        backgroundColor: colorScheme.backgroundColorLight,
        width: 280,
        height: 54,
        marginBottom: 15,
        marginTop: 5,
        alignItems: 'center',
        color: 'black',
        fontSize: 20,


        borderColor: colorScheme.backgroundColorDark,
        borderWidth: 2,
    },
    isLoading: {
        textAlign: 'center',
        fontSize: 30,

        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
            },
            android: {
                fontFamily: 'monospace',
            }
        })
    }
});

