import React from 'react';
import { TextInput, StyleSheet, Button, View , Image, Platform} from 'react-native';
import { Text } from 'react-native';
import { LogoContainer } from '../index';

import { SUBMIT_USER } from '../../actions';

import { connect } from 'react-redux';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    
    render() {
        const { email, userName, password, userUpdated, pageOne, pageTwo } = this.state;

        return (
            <View style={styles.container}>
                <LogoContainer />


                { pageOne && <View>

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

                </View> }


                { pageTwo && <View style={styles.photoTitleContainer}>

                    <Text style={styles.photoTitleContainerText}>Your Photo</Text>
                    <View style={styles.photoContainer}>
                        <Image style={styles.image} source={require('/Users/adrianthompson/Documents/projects/that-dads-app/src/containers/registration/placeholder.png')} />
                    </View>

                    <Button title='Submit' onPress={() => {
                        this.setState({ userUpdated: true, pageOne: false, pageOne: true });    
                        this.props.registerUser(email, userName, password);
                    }} />

                </View> }
                
            </View>
        );
    }
    
};


const mapStateToProps = (state, props) => {
    return {
        loading: state.submitUserReducer.loading,
        data: state.submitUserReducer.data.users
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
