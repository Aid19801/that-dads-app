import React from 'react';
import { AsyncStorage, Text, TextInput,
    StyleSheet, View , Image, Platform } from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colorScheme } from '../../utils/colorscheme';
import { LogoContainer } from '../index';
import { setUserId, destroyAsyncStorage } from '../../utils/utils';

import { SUBMIT_USER } from '../../actions';
import { connect } from 'react-redux';


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
            likes: '',
            dislikes: '',
            tagline: '',
            userUpdated: false,
            pageOne: true,
            pageFoo: false,
            pageTwo: false,
            pageThree: false,
        };
    }

    userIsAlreadySignedIn = () => {
        if (this.props.isLoggedIn) {
            // this.props.navigation.navigate('Home');
        }
    }

    componentWillMount = () => {

    }
    
    render() {

        const { email, userName, password, likes, dislikes, tagline, pageOne, pageTwo, pageThree, pageFoo } = this.state;

        this.userIsAlreadySignedIn();

        return (
            <View style={styles.container}>
                <LogoContainer />

                { pageOne && <View>

                    <TextInput
                        placeholder="email"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ email: e })}
                    />
                    <TextInput
                        placeholder="username"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ userName: e })}
                    />
                    <TextInput
                        placeholder="password"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ password: e })}
                    />

                    <Button 
                        title='Next'
                        titleStyle={{ color: "pink" }}
                        buttonStyle={{
                            backgroundColor: colorScheme.foregroundColorLight,
                            borderColor: "white",
                            borderWidth: 2,
                            borderRadius: 5
                        }}
                        onPress={() => {
                        this.setState({ pageOne: false, pageFoo: true })
                    }} />


                </View> }

                { pageFoo && 
                
                <View>
                    <TextInput
                        placeholder="likes"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ likes: e })}
                    />
                    <TextInput
                        placeholder="dislikes"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ dislikes: e })}
                    />

                    <Button
                        title='Next'
                        buttonStyle={{
                            backgroundColor: colorScheme.foregroundColorLight,
                            borderColor: "white",
                            borderWidth: 2,
                            borderRadius: 5
                        }}
                        onPress={() => {
                            this.setState({ pageFoo: false, pageTwo: true })
                        }} />

                </View> }

                { pageTwo && <View style={styles.photoTitleContainer}>
                    
                    <TextInput
                        placeholder="tagline"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ tagline: e })}
                    />

                    <View style={styles.photoContainer}>
                        <Image style={styles.image} source={require(avatar)} />
                    </View>


                    <Button
                        title='Register User'
                        buttonStyle={{
                            backgroundColor: colorScheme.foregroundColorLight,
                            borderColor: "white",
                            borderWidth: 2,
                            borderRadius: 5
                        }}
                        onPress={() => {
                            this.setState({ userUpdated: true, pageOne: false, pageTwo: false, pageThree: true });    
                            this.props.registerUser(email, userName, password, likes, dislikes, tagline);
                        }} />

                </View> }

                { pageThree && 
                    <View>
                        <Text style={styles.photoTitleContainerText}>Thank you for registering!</Text>
                        <Button
                            title='Login?'
                            buttonStyle={{
                                backgroundColor: colorScheme.foregroundColorLight,
                                borderColor: "white",
                                borderWidth: 2,
                                borderRadius: 5
                            }}
                            onPress={() => {
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
    const { loading, data, userId} = state.registerUserReducer;
    return {
        loading: loading,
        data: data.users,
        userId: userId,
        isLoggedIn: state.loginStatusReducer.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (email, userName, password, likes, dislikes, tagline) => dispatch({ type: SUBMIT_USER, email, userName, password, likes, dislikes, tagline })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);


const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(92, 99,216, 1)",
        borderWidth: 2,
        borderColor: 'white',
        height: 60,
        width: 120,
        borderWidth: 5,
        color: "pink",
    },
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
    }
});
