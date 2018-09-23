import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FooterNav } from '../../components/index';
import { colorScheme } from '../../utils/colorscheme';
import { connect } from 'react-redux';
class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        console.log('props.username: >>>>> ', this.props.navigation);

        const { navigation, userName, email, password } = this.props;
        return (
            <View style={styles.container}>
            
            <Text>userName: {userName}</Text>
            <Text>email: {email}</Text>
            <Text>password: {password}</Text>

                
                <View style={styles.nav}>
                    <FooterNav navigation={navigation} />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.loginStatusReducer.email,
    password: state.loginStatusReducer.password,
    userName: state.loginStatusReducer.userName,
    userId: state.loginStatusReducer.userId,
})

export default connect(mapStateToProps, null)(ProfilePage);

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