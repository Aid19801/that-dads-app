import React from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const PushableButton = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <Button
                title={props.buttonTitle}
                onPress={() => props.navigation.navigate(`${props.buttonTitle}`)}
                color="white"
                buttonStyle={styles.button}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 55,
    },
    button: {
        backgroundColor: "rgba(92, 99,216, 1)",
        borderColor: "transparent",
        height: 60,
        width: 120,
        borderWidth: 0,
        borderRadius: 5
    }
});

export default PushableButton;