import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from './button';
import { colorScheme } from '../../utils/colorscheme';

class Footer extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <NavButton buttonTitle="News" />
                <NavButton buttonTitle="Chat" />
                <NavButton buttonTitle="Local" />
                <NavButton buttonTitle="Me" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
    },
});

export default Footer;
