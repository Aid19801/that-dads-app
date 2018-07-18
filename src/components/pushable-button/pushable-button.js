import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';


const PushableButton = (props) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={() => props.navigation.navigate(`${props.buttonTitle}`)}>
                <Text style={styles.text}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 10,
        padding: 30,
        backgroundColor: colorScheme.backgroundColorDark,
        borderRadius: 25,
    },
    text: {
        fontSize: 20,
        color: colorScheme.fontLight,
    }
});

export default PushableButton;