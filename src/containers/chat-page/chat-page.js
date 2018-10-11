import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, FlatList } from 'react-native';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { FooterNav } from '../../components/index';
import { ChatMsg } from './chat-msg';
import { colorScheme } from '../../utils/colorscheme';
import { Button } from 'react-native-elements';


const ChatMessagesQuery = gql`
  query messages {
    messages {
      message
      userName
    }
  }
`;

class ChatPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.messagesContainer}>
                    <Query query={ChatMessagesQuery}>
                    
                        {({ loading, error, data }) => {
                            if (loading) return <Text>loading...</Text>
                            if (error) return <Text>error!</Text>

                            return data.messages.map(({ message, userName }, i) => {
                                return (
                                    <ChatMsg key={i} userName={userName} message={message} />
                                )
                            })
                        }}
                    </Query>
                </View>
                
                <View style={styles.nav}>
                    <FooterNav navigate={this.props.navigation} />
                </View>
               
            </View>
        )
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

