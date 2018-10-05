import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { FooterNav } from '../../components/index';
import { ChatMsg } from './chat-msg';
import { colorScheme } from '../../utils/colorscheme';
import { mockMsgs } from '../../mocks/msgs';

class ChatPage extends Component {

    static navigationOptions = {
        title: '#chat',
        headerStyle: {
            backgroundColor: colorScheme.midlevelColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            messagesPopulated: false,
        }
    }



    showSpinnerOrMessages = () => {
        const { isLoading, chatMsgs } = this.props;
        if (isLoading) {
            console.log('Spinner Showing');
            return <Text> Spinner Here </Text>
        } else {
            return <Text>messages</Text>
        }
    }

    componentWillMount = () => {
        this.props.loadChatPage();
    };


    render() {

        return (
            <View style={styles.container}>
                
                <View style={styles.messagesContainer}>
                    {this.showSpinnerOrMessages()}
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
    loadChatPage: () => dispatch({ type: actions.LOAD_CHAT_PAGE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

        borderWidth: 2,
        borderColor: 'black',
    },

    messagesContainer: {

        width: '100%',
        height: '70%',
        borderWidth: 2,
        borderColor: 'gold',
    },

    nav: {
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    },
});

