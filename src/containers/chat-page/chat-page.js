import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, FlatList } from 'react-native';

import { Query, Mutation } from 'react-apollo';
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

const CreateMessage = gql`
  mutation CreateMessage($message: String!, $userName: String!) {
  createMessage(userId: "131", userName: $userName, message: $message, timestamp: "107") {
    _id
  }
}
` 
class ChatPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            showNav: true,
            message: '',
            userName: 'Aid19801'
        }
    }

    storeMessage = (e) => {
        console.log('storing msg: ', e);
        this.setState({
            message: e
        })
    }

    submitMessage = () => {
        const { message } = this.state;

        setTimeout(() => {
            alert('state message 111 ', this.state.message);
        }, 2000);
    }

    onFocus = () => {
        console.log('hiding nav bar');
        this.setState({
            showNav: false,
        })
    }

    onBlur = () => {
        console.log('showing nav bar');
        this.setState({
            showNav: true,
        })
    }

    render() {

        const { message, userName } = this.state;
        return (
            <View style={styles.container}>

                <View style={styles.messagesContainer}>
                    <Query query={ChatMessagesQuery}>
                    
                        {({ loading, error, data }) => {
                            if (loading) return <Text>loading...</Text>
                            if (error) return <Text>error!</Text>

                            return <FlatList
                            inverted
                            data={data.messages.reverse()}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item, i}) => 
                                <ChatMsg key={i} userName={item.userName} message={item.message} />
                            }
                            />
                        }}
                    </Query>
                </View>
                
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder="message"
                        onFocus={() => this.onFocus()}
                        onBlur={() => this.onBlur()}
                        style={styles.textInput}
                        onChangeText={(e) => this.storeMessage(e)}
                        />
                    <View style={styles.buttonContainer}>

                        <Mutation mutation={CreateMessage}>

                            {(createMessage, { data }) => (
                                <Button
                                    title="submit"
                                    onPress={() => createMessage({ variables: { message: message, userName: userName } })}
                                    color="white"
                                    buttonStyle={styles.button}
                                />
                            )
                        }



                        </Mutation>
                    </View>
                </View>


                { this.state.showNav && 
                    <View style={styles.nav}>
                        <FooterNav navigate={this.props.navigation} />
                    </View>
                }
               
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

    textInputContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        width: '95%',
        // height: '10%',
        justifyContent: 'space-around',
    },
    textInput: {
        width: '70%',
    },
    buttonContainer: {
        borderRadius: 55,
    },
    button: {
        backgroundColor: "rgba(92, 99,216, 1)",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },

    nav: {
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    },
});

