import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { FooterNav } from '../../components/index';
import { ChatMsg } from './chat-msg';
import { colorScheme } from '../../utils/colorscheme';
import { mockMsgs } from '../../mocks/msgs';

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: '',
            chatMsgs: [],
        }
    }

    renderMessages = () => {
        
    };


    componentWillReceiveProps(nextProps) {
        let { chatMsgs } = nextProps;
        console.log(' WTF1:  ', this.props.isLoading)
        console.log(' WTF2:  ', nextProps.isLoading)
        this.setState({
            chatMsgs,
        })
    }


    componentWillMount = () => {
        this.props.loadChatPage();
    };

    render() {

        const { chatMsgs } = this.state || []
        const { isLoading } = this.props;


        if (isLoading) {
            return <Text>Loading...</Text>
        }

        return (
            <View style={styles.container}>

                <View style={styles.chatRowsContainer}>
                    { chatMsgs.map((each, i) => (
                        <ChatMsg key={i} userName={each.userName} chatMsgText={each.msgText}  />
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

const mapStateToProps = (state) => ({
    isLoading: state.chatPageReducer.isLoading,
    chatMsgs: state.chatPageReducer.chatMsgs,
});

const mapDispatchToProps = (dispatch) => ({
    loadChatPage: () => dispatch({ type: actions.LOAD_CHAT_PAGE })
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);

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
        width: '70%',
        height: 54,
        color: 'black',
        fontSize: 20,

        backgroundColor: colorScheme.backgroundColorLight,
        borderColor: colorScheme.backgroundColorDark,
        borderWidth: 2,
    },
    nav: {
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    },
});

