import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';

import { USER_LOGGING_IN } from '../../actions/index';
import { connect } from 'react-redux';

import { getUserId } from '../../utils/utils';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    componentDidMount = async () => {
        const { userName, password } = await getUserId();
        this.setState({ userName, password });
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.isLoggedIn) {
            nextProps.navigation.navigate('Home');
        }
    }

    render() {

        const { userName, password } = this.state;
        const { checkLogin } = this.props;

        return (
            <View style={styles.container}>
                <Text>LoginPage</Text>
                <Text>{this.props.isLoggedIn}</Text>
                <View>

                    <TextInput
                        placeholder="username"
                        value={this.state.userName || ''}
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ userName: e })}
                    />
                    <TextInput
                        placeholder="password"
                        secureTextEntry={true}
                        value={this.state.password || ''}
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ password: e })}
                    />

                    <Button title='Login' onPress={() => checkLogin(userName, password)} />

                </View>

            </View>
        );
    }
}



const mapStateToProps = (state) => ({
    isLoggedIn: state.loginStatusReducer.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    checkLogin: (userName, password) => dispatch({ type: USER_LOGGING_IN, userName, password })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    photoTitleContainerText: {
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
                color: 'black',
                fontSize: 15,
            },
            android: {
                fontFamily: 'serif',
                color: 'black',
                fontSize: 15,
            }
        })
    },
    textInput: {
        backgroundColor: 'lightgrey',
        width: 280,
        height: 54,
        marginBottom: 15,
        marginTop: 5,
        alignItems: 'center',
        color: 'black',
        fontSize: 30,
    }
});

