import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const PushableButton = (props) => {
    return (
        <View style={styles.button}>
            <Button 
                title={props.buttonTitle}
                onPress={() => props.navigation.navigate(`${props.buttonTitle}`)}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 4,
        padding: 4,
    },
});

export default PushableButton;