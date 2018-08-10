import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginPage extends Component {

    // async removeItemValue(key) {
    //     try {
    //         await AsyncStorage.removeItem('userId');
    //         return true;
    //     }
    //     catch (exception) {
    //         return false;
    //     }
    // }

    // if theres a userId show the logout button
    // if theres a userId populate the fields
    // if you click logout, removeItem('userId');

    render() {
        return (
            <View style={styles.container}>
                
                <Text>LoginPage</Text>

                <TextInput
                    placeholder="username"

                    style={styles.textInput}
                />

                <TextInput
                    placeholder="password"
                    style={styles.textInput}
                />

                <Button
                    title="Login"
                    onPress={() => {
                        alert('login');
                    }}
                    />
                <Button
                    title="Logout"
                    onPress={() => this.removeItemValue('userId')}
                    />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    textInput: {
        width: 290,
        height: 25,
        borderWidth: 2,
        margin: 2,
    },
});

