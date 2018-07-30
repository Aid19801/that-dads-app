import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PushableButton } from '../index';
import { colorScheme } from '../../utils/colorscheme';

export default class ButtonContainer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <PushableButton navigation={this.props.navigation} buttonTitle="Registration" />
                <PushableButton navigation={this.props.navigation} buttonTitle="Login" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colorScheme.backgroundColorDark,
        borderRadius: 25,
        borderColor: 'grey',
        marginTop: 10,
        width: 280,
        justifyContent: 'center',
        backgroundColor: colorScheme.backgroundColorLight,
    },
});
