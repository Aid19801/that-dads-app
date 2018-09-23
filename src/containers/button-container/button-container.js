import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PushableButton } from '../../components';
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
        borderColor: colorScheme.backgroundColorDark,
        borderRadius: 25,
        borderColor: 'grey',
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 30,
        width: 340,
        justifyContent: 'center',
        backgroundColor: colorScheme.backgroundColorLight,
    },
});
