import React, { Component } from 'react';
import { AsyncStorage, TextInput, StyleSheet, Button, View, Image, Platform, Text } from 'react-native';
import { Logo } from '../../components/index';

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
            pageOne: true,
            pageTwo: false,
            pageThree: false,
        };
    }

    amILoggedIn = () => {
        if (this.props.userId) {
            console.log('logged in: ', this.props.userId);
            this.props.navigation.navigate('Login');
        }
        return;
    }

    renderPageOne = () => {
        const { pageOne } = this.state;
            return pageOne && <View style={styles.pageBox}>
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
                    this.setState({ pageOne: false, pageTwo: true, pageThree: false })
                }} />
            </View>
    }

    renderPageTwo = () => {
        const { pageTwo, userName, email, password } = this.state;
        const { registerUser } = this.props;
        return pageTwo && 
            <View style={styles.pageBox}>
                <Image style={styles.image} source={require('/Users/adrianthompson/Documents/projects/that-dads-app/src/components/emoji/img1.png')} />
            <Button title='Submit' onPress={() => {
                registerUser(email, userName, password);
                this.setState({ pageOne: false, pageTwo: false, pageThree: true });
            }} />
        </View>
    }
    
    renderPageThree = () => {
        const { pageThree } = this.state;
        const { navigate } = this.props.navigation;

        return pageThree && 
            <View style={styles.pageBox}>
                <Text>Thank You For Registering!</Text>
            <Button title='Go To App' onPress={() => navigate('Login')} />
        </View>
    }

    render() {
        this.amILoggedIn();

        return (
            <View style={styles.container}>
                <Logo />
                {this.renderPageOne()}
            </View>
        )
    }
}


const mapStateToProps = (state, props) => {
    const { loading } = state.submitUserReducer;
    const { userId } = state.loginStatusReducer;
    return {
        loading,
        userId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (email, userName, password) => dispatch({ type: SUBMIT_USER, email, userName, password })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);

const styles = StyleSheet.create({
    loadingContainer: {
        paddingTop: 100,
        paddingLeft: 130,
    },
    container: {
        alignItems: 'center',
    },
    pageBox: {
        alignItems: 'center',
        width: 300,
        height: 300,
        borderWidth: 2,
    },
    textInput: {
        width: 290,
        height: 25,
        borderWidth: 2,
        margin: 2,
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
        width: '90%',
        height: '90%',
        backgroundColor: 'grey',
        position: 'relative',
        margin: 0,

    },
});

