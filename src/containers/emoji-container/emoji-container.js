import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class EmojiContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('/Users/adrianthompson/Documents/projects/that-dads-app/src/containers/emoji-container/img2.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 300,
        alignItems: 'center',
    },
    image: {
        borderWidth: 2,
        borderColor: 'black',
        width: 300,
        height: 200,
    },


});
