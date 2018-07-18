import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const Input = () => {
    return (
        <View style={styles.container}>
            <FormLabel>userName</FormLabel>
            <FormInput />
            <FormLabel>email</FormLabel>
            <FormInput />
            <FormLabel>password</FormLabel>
            <FormInput />
            <FormLabel>my tagline/motto...</FormLabel>
            <FormInput />
            <FormLabel>about me</FormLabel>
            <FormInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});

export default Input;

// state required:
// isTyping
// isLoggedIn