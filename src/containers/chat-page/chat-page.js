import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, TextInput, Platform, FlatList, YellowBox } from 'react-native';


import { Query, Mutation } from 'react-apollo';
import * as gqlActions from './gql';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FooterNav, LoadingSpinner } from '../../components/';
import { ChatMsg } from './chat-msg';
import { colorScheme } from '../../utils/colorscheme';
import { Button } from 'react-native-elements';
// import { mockMessages } from '../../mocks/msgs';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

class ChatPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            showNav: true,
            message: '',
            userName: '',
            userId: ''
        }
    }

    storeUserDetailsInState = () => {
        this.setState({
            userId: this.props.userId,
            userName: this.props.userName,
            timestamp: Date.now().toString(),
        })
    }

    storeMessage = (e) => {
        this.setState({
            message: e
        })
    }

    onFocus = () => {
        this.setState({
            showNav: false,
        })
    }

    onBlur = () => {
        this.setState({
            showNav: true,
        })
    }


    componentDidMount() {
        this.props.loadChatPage();
        this.storeUserDetailsInState();
    }
    render() {

        console.log('chatPage | state: ', this.state);

        const { userId, message, userName, timestamp } = this.state;
        return (
            <View style={styles.container}>

                <View style={styles.messagesContainer}>
                    <Query query={gqlActions.ChatMessagesQuery}>
                    
                        {({ loading, error, data }) => {
                            if (loading) return (
                                <View style={styles.spinnerContainer}>
                                    <ActivityIndicator size="large" color="#0000ff" />
                                </View>
                            )
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

                        <Mutation mutation={gqlActions.CreateMessage}>

                            {(createMessage, { data }) => (
                                <Button
                                    title="submit"
                                    onPress={() => createMessage({ variables: { userId: userId, message: message, userName: userName, timestamp: timestamp } })}
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

const mapStateToProps = (state) => ({
    userName: state.loginStatusReducer.userName,
    userId: state.loginStatusReducer.userId,
})

const mapDispatchToProps = (dispatch) => ({
    loadChatPage: () => dispatch({ type: actions.LOAD_CHAT_PAGE }),
})


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
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
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

