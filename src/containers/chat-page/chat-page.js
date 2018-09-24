import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { Button } from 'react-native-elements';

import { FooterNav } from '../../components/index';
import { ChatMsg } from './chat-msg';
import { colorScheme } from '../../utils/colorscheme';
import { mockMsgs } from '../../mocks/msgs';

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: '',
            mockMsgs: [],
        }
    }

    renderMessages = () => {
        this.setState({
            mockMsgs,
        })
    };

    componentDidMount = () => {
        this.renderMessages();
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.chatRowsContainer}>
                    { mockMsgs.map((each, i) => (
                        <ChatMsg key={i} handle={each.handle} chatMsgText={each.msg}  />
                    )) }
                </View>

                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="type msg here"
                        value={this.state.newMessage || ''}
                        style={styles.textInput}
                        onChangeText={(e) => this.setState({ newMessage: e })}
                    />

                    <Button color="white" backgroundColor="blue" style={styles.button} title='submit' onPress={() => checkLogin(userName, password)} />
                </View>

                <View style={styles.nav}>
                    <FooterNav navigate={this.props.navigation} />
                </View>
                
            </View>
        );
    }
}

export default ChatPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    chatRowsContainer: {
        borderWidth: 1,
        borderColor: 'pink',
        width: 300,
        height: 'auto',
    },

    textInputContainer: {
        flexDirection: 'row',
        width: 280,
        paddingTop: 10,
    },
    textInput: {
        backgroundColor: 'lightgrey',
        width: '70%',
        height: 54,
        color: 'black',
        fontSize: 20,
    },
    nav: {
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    },
});

