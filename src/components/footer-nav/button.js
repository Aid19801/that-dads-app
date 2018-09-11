import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';

const NavButton = (props) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={() => alert('pressed btn')}>
                <Text style={styles.text}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colorScheme.backgroundColorDark,
        borderWidth: 0.5,
        height: 40,
        borderWidth: 1,
        marginTop: 2,
        borderWidth: 1,
        flexGrow: 1,

        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    }
});

export default NavButton;