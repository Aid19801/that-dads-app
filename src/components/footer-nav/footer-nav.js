import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from './button';
import { colorScheme } from '../../utils/colorscheme';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { navigate } = this.props;

        return (
            <View style={styles.container}>
                <NavButton buttonTitle="Home" name="home" navigate={navigate} />
                <NavButton buttonTitle="Chat" name="chat" />
                <NavButton buttonTitle="Place" name="place" />
                <NavButton buttonTitle="Profile" name="person" navigate={navigate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 40,
    },
});

export default Footer;

