import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LogoContainer, EmojiContainer, ButtonContainer } from './containers';

export default class LandingPage extends Component {

    constructor() {
        super();
        this.state = {
            keyboardIsShowing: false,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <LogoContainer />
                <EmojiContainer />
                <ButtonContainer navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

