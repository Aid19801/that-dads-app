import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    getUserId = async () => {
        console.log('retrieving...');
        try {
            let userName = await AsyncStorage.getItem('userName') || ''
            let password = await AsyncStorage.getItem('password') || '';

            this.setState({ userName, password});

        } catch (err) {
            console.log('err: ', err);
        }
    }


    componentDidMount() {
        this.getUserId();
    }

    render() {

            console.log('login page / this state ', this.state);

        return (
            <View style={styles.container}>
                <Text>LoginPage</Text>
                <Text>Your username is: {this.state.userName}</Text>
                <Text>Your username is: {this.state.password}</Text>
                <Text>LoginPage</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

