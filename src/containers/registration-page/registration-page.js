import React from 'react';
import { AsyncStorage, TextInput, StyleSheet, Button, View , Image, Platform } from 'react-native';
import { Text } from 'react-native';
import { LogoContainer } from '../index';

import { SUBMIT_USER } from '../../actions';
import { connect } from 'react-redux';

import { setUserId, destroyAsyncStorage } from '../../utils/utils';

const avatar = '/Users/adrianthompson/Documents/projects/that-dads-app/src/utils/avatar.png';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomUser: '',
            keyboardIsShowing: false,
            email: '',
            userName: '',
            password: '',
            userUpdated: false,
            pageOne: true,
            pageTwo: false,
            pageThree: false,
        };
    }

    userIsAlreadySignedIn = async () => {
        try {
            const pw = await AsyncStorage.getItem('password');
            if (pw !== null) {
                console.log('pw is:: 🍆: ', pw);
                // alert('youre already signed in');
                // this.props.navigation.navigate('Home');
            }
        } catch (error) {
            console.log('AsyncStorage error: ', error);
        }
    }

    generateRandom = () => {
        let randomNumber = Math.floor(Math.random() * 90000) + 10000
        let randomUser = randomNumber.toString();
        this.setState({ 
            randomUser: randomUser,
            email: `rnnn${randomUser}@net.com`,
            password: `pw-randomUser`,
            userName: `user-randomUser`,
        });
    }

    componentWillMount = () => {
        this.generateRandom();
    }
    
    render() {

        const { email, userName, password, pageOne, pageTwo, pageThree, randomUser } = this.state;

        this.userIsAlreadySignedIn();

        return (
            <View style={styles.container}>
                <LogoContainer />

                { pageOne && <View>

                    <TextInput
                        placeholder="email"
                        value={email}
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ email: e })}
                    />
                    <TextInput
                        placeholder="username"
                        value={randomUser}
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ userName: e })}
                    />
                    <TextInput
                        placeholder="password"
                        value={password}
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ password: e })}
                    />

                    <Button title='Next' onPress={() => {
                        this.setState({ pageOne: false, pageTwo: true })
                    }} />

                    <Button
                        title='Destroy Async Data'
                        onPress={() => { return destroyAsyncStorage() } } />

                </View> }

                { pageTwo && <View style={styles.photoTitleContainer}>

                    <Text style={styles.photoTitleContainerText}>Your Photo</Text>
                    <View style={styles.photoContainer}>
                        <Image style={styles.image} source={require(avatar)} />
                    </View>

                    <Button title='Register User' onPress={() => {
                        this.setState({ userUpdated: true, pageOne: false, pageTwo: false, pageThree: true });    
                        this.props.registerUser(email, userName, password);
                    }} />

                </View> }

                { pageThree && 
                    <View>
                        <Text style={styles.photoTitleContainerText}>Thank you for registering!</Text>
                        <Button
                            title='Login?'
                            onPress={() => {
                                setUserId(userName, password);
                                this.props.navigation.navigate('Login');
                            }}
                        />
                    </View>
                }
                
            </View>
        );
    }
    
};


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
