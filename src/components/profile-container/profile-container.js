import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { CHECK_LOGIN_STATUS, UPDATE_USER_DETAILS } from '../../actions/index';
import { getUserId, destroyAsyncStorage } from '../../utils/utils';

class ProfileContainer extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            userName: '',
            userId: '',
            newEmail: '',
            newPassword: '',
            newUserName: '',
        };
    }

    updateEmail = (e) => {
        this.setState({ newEmail: e })
    }

    updateUserName = (e) => {
        this.setState({ newUserName: e })
    }

    updatePassword = (e) => {
        this.setState({ newPassword: e })
    }

    submitNewDetails = () => {
        const { newUserName, newEmail, newPassword } = this.state;
        let newDetails = {};

        if (newEmail !== '') {
            Object.assign(newDetails, { email: newEmail })
        }
        if (newPassword !== '') {
            Object.assign(newDetails, { password: newPassword })
        }

        if (newUserName !== '') {
            Object.assign(newDetails, { userName: newUserName })
        }

        this.props.submitNewDetails(newDetails);
        this.props.navigation.navigate('Home');
    }

    componentDidMount = async () => {
        const { userId } = await getUserId();
        this.props.checkLoginStatus(userId);
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={{ marginTop: 90 }}>Your Profile | {this.state.userName.toUpperCase()}</Text>
                <View>
                    <TextInput
                        placeholder={this.state.email}
                        style={styles.textInput}
                        onChangeText={(e) => this.updateEmail(e)}
                    />
                    <TextInput
                        placeholder={this.state.userName}
                        style={styles.textInput}
                        onChangeText={(e) => this.updateUserName(e)}
                    />
                    <TextInput
                        placeholder={this.state.password}
                        style={styles.textInput}
                        onChangeText={(e) => this.updatePassword(e)}
                    />
                </View>

                <View style={styles.twoButtons}>
                    <Button style={styles.button}
                        color="white" 
                        backgroundColor="darkgreen"
                        title="update" 
                        onPress={() => this.submitNewDetails()}
                    />
                    <Button style={styles.button}
                        color="white" 
                        backgroundColor="orange"
                        title="logout" 
                        onPress={() => null}
                    />
                    <Button style={styles.button}
                        color="white" 
                        backgroundColor="darkred"
                        title="cancel" 
                        onPress={() => null}
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.loginStatusReducer.isLoggedIn,
    email: state.loginStatusReducer.email,
    userName: state.loginStatusReducer.userName,
    userId: state.loginStatusReducer.userId,
    password: state.loginStatusReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
    checkLoginStatus: (userId) => dispatch({ type: CHECK_LOGIN_STATUS, userId }),
    submitNewDetails: (obj) => dispatch({ type: UPDATE_USER_DETAILS, obj })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '95%',
        borderColor: 'grey',
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
    },
    twoButtons: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 50,
    },
    button: {        
        borderWidth: 5,
        borderColor: 'white',
    }
});