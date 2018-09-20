import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from './button';
import { colorScheme } from '../../utils/colorscheme';

class Footer extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <NavButton buttonTitle="Home" name="home" />
                <NavButton buttonTitle="Chat" name="chat" />
                <NavButton buttonTitle="Chat" name="place" />
                <NavButton buttonTitle="Profile" name="person" />
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

// <NavButton buttonTitle="Local" name="near_me" />
//     <NavButton buttonTitle="Me" name="person_pin" />

{/* <TouchableOpacity onPress={() => alert('pressed btn')}>
    <Button
        icon={
            <Icon
                name={props.name}
                size={15}
                color='white'
            />
        }
        title={props.name}
    />
</TouchableOpacity>
        </View > */}