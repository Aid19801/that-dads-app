import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform } from 'react-native';
import { getUserId } from '../../utils/utils';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        }
    }

    componentDidMount = async () => {
        const { userName, password } = await getUserId();
        console.log('userName: ', userName);
        console.log('password: ', password);
        this.setState({ userName, password });
    }

    render() {

        console.log('LOGIN PAGE | this.state: ', this.state);

        return (
            <View style={styles.container}>
                <Text>LoginPage</Text>

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

                    <Button title='Login' onPress={() => alert('login')} />

                </View>

            </View>
        );
    }
}

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

