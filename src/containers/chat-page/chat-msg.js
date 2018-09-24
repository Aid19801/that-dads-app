import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export const ChatMsg = (props) => (
    <View style={styles.chatMsgContainer}>

        <View style={styles.handleContainer}>
            <Text style={styles.handleText}>{props.handle}</Text>
        </View>
        <Text style={styles.chatMsgText}>{props.chatMsgText}</Text>
    </View>
);

const styles = StyleSheet.create({
    chatMsgContainer: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
    },
    handleContainer: {
        width: '15%',
    },
    handleText: {
        fontSize: 8,
        width: '100%',
        height: 'auto',
        marginTop: '15%',
        marginLeft: '7%',
        transform: [{ rotate: '-20deg' }],
        alignItems: 'center',

        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
            },
            android: {
                fontFamily: 'monospace',
            }
        }),
    },
    chatMsgText: {
        fontSize: 17,
        flex: 1, flexWrap: 'wrap',
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
            },
            android: {
                fontFamily: 'monospace',
            }
        }),
        borderWidth: 1,
        borderColor: 'skyblue',
    }
});

