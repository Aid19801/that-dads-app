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
        borderRadius: 30,
        marginTop: 30,
        paddingTop: 30,
        paddingBottom: 30,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colorScheme.backgroundColorLight,
        borderWidth: 2,
        borderColor: 'white',
    },
});
