import React, { Component } from 'react';
import { AsyncStorage, TextInput, StyleSheet, Button, View , Image, Platform } from 'react-native';
import { Text } from 'react-native';
import { DadsInput, Logo } from '../../components/index';
// import { LogoContainer } from '../index';

import { SUBMIT_USER } from '../../actions';

import { connect } from 'react-redux';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardIsShowing: false,
            email: '',
            userName: '',
            password: '',
            userUpdated: false,
        };
    }
    
    render() {
        const { email, userName, password } = this.state;
            
            AsyncStorage.getItem('userId', (err, result) => {
                console.log('err: ', err);
                console.log('result', result);
            });

        return (
            <View style={styles.container}>
                <Logo />
                
                <View>
                    <TextInput
                        placeholder="email"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ email: e })}
                    />
                    <TextInput
                        placeholder="username"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ userName: e })}
                    />
                    <TextInput
                        placeholder="password"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ password: e })}
                    />

                    <Button title='Next' onPress={() => {
                        this.setState({ pageOne: false, pageTwo: true })
                    }} />

                </View>
            </View>
        )
    }
}


const mapStateToProps = (state, props) => {
    const { loading, data, userId} = state.submitUserReducer;
    return {
        loading: loading,
        data: data.users,
        userId: userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (email, userName, password) => dispatch({ type: SUBMIT_USER, email, userName, password })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    loadingContainer: {
        paddingTop: 100,
        paddingLeft: 130,
    },
    container: {
        alignItems: 'center',
    },
    photoTitleContainer: {
        alignItems: 'center',
        marginTop: 30,
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


    photoContainer: {
        borderWidth: 2,
        width: 200,
        height: 200,
        marginBottom: 20,
        marginTop: 20,
    },

    image: {
        borderWidth: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'orange',
        position: 'relative',
        margin: 0,

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

