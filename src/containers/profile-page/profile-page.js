import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MainPageContainer, FooterNav } from '../../components/index';
import { colorScheme } from '../../utils/colorscheme';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
            
                <MainPageContainer
                    title="Profile"
                    isHome={false}
                    navigation={navigation}
                />
                
                <View style={styles.nav}>
                    <FooterNav navigation={navigation} />
                </View>

            </View>
        )
    }
}

export default ProfilePage;

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
})