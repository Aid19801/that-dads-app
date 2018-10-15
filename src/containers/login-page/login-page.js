import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TextInput } from 'react-native';
import { getUserAsyncStorage } from '../../utils/utils';
import { colorScheme } from '../../utils/colorscheme';
import { connect } from 'react-redux';
import { CHECK_LOGIN_STATUS, USER_LOGGING_IN } from '../../actions/index';
import { Button } from 'react-native-elements';

// page loads > CWM checks login status > fires CHECK_LOGIN_STATUS action
// 
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    renderLoginAndPasswordFields = (isLoggedIn) => {

        const { userLoggingIn, userName, password } = this.props;
        if (isLoggedIn) {
            return (
                <View>
                    <Text>userId: {this.props.userId}</Text>

                    <View style={styles.inputAndButtonContainer}>
                        <TextInput
                            placeholder="username"
                            value={this.props.userName}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            style={styles.textInput}
                            onChangeText={(e) => this.setState({ userName: e })}
                        />
                        <TextInput
                            placeholder="password"
                            value={this.props.password}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={(e) => this.setState({ password: e })}
                        />

                        <Button
                            title="Login"
                            onPress={() => userLoggingIn(userName, password)}
                            buttonStyle={styles.button}
                        />

                    </View>
                </View>
            )
        } else if (!isLoggedIn) {
            return (
                <View>
                    <Text>userId: not logged in</Text>

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
                            onPress={() => userLoggingIn(this.state.userName, this.state.password)}
                            buttonStyle={styles.button}
                        />

                    </View>
                </View>
            )
        }
    }

    componentDidMount = async () => {
        this.props.checkLoginStatus();
        console.log('ALL PROPS: ', this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        const { userName, password, isLoggedIn, navigation } = nextProps;
        this.setState({ userName, password });
        isLoggedIn ? navigation.navigate('Home') : null;
    }

    render() {

        const { isLoggedIn } = this.props;

        return (

            <View style={styles.container}>
                {this.renderLoginAndPasswordFields(isLoggedIn)}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.loginStatusReducer.isLoggedIn,
    userName: state.loginStatusReducer.userName,
    password: state.loginStatusReducer.password,
    userId: state.loginStatusReducer.userId,
})
const mapDispatchToProps = (dispatch) => ({
    checkLoginStatus: () => dispatch({ type: CHECK_LOGIN_STATUS }),
    userLoggingIn: (userName, password) => dispatch({ type: USER_LOGGING_IN, userName, password })
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

