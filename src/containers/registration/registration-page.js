import React from 'react';
import { TextInput, StyleSheet, Button, View , Platform} from 'react-native';
import { Text } from 'react-native';
import { LogoContainer } from '../index';
import { colorScheme } from '../../utils/colorscheme';

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
                        // this.props.registerUser(email, userName, password) // should this be a redux action via props?
                    }} />

                </View> }


                { pageTwo && <View>

                    <TextInput
                        placeholder="photo THING"
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ email: e })}
                    />

                    <Button title='Submit' onPress={() => {
                        this.setState({ userUpdated: true, pageOne: false, pageOne: true })
                        this.props.registerUser(email, userName, password) // should this be a redux action via props?
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

const mapDispatchToProps = dispatch => {
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
