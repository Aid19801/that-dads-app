import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NavButton = (props) => {

    return (
        <View style={styles.button}>
        <TouchableOpacity onPress={() => props.navigate.navigate(props.buttonTitle)}>
            <Icon
                name={props.name}
                size={35}
                color='white'
            />
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colorScheme.backgroundColorDark,
        borderWidth: 0.5,
        height: 60,
        borderWidth: 1,
        marginTop: 4,
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

