import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LogoContainer } from '../index';
import { FooterNav, MainPageFactory } from '../../components';
import { colorScheme } from '../../utils/colorscheme';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                
                <MainPageFactory />

                <View style={styles.nav}>
                    <FooterNav />
                </View>
            </View>
        );
    }

};

export default HomePage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    nav: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    }
});
