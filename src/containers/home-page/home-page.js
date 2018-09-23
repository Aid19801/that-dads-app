import React from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet, View } from 'react-native';
import { FooterNav, MainPageContainer } from '../../components';
import { colorScheme } from '../../utils/colorscheme';
import { Button } from 'react-native-elements';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <MainPageContainer title="HOME" isHome={true} />
                <View style={styles.nav}>
                    <FooterNav navigate={navigation} />
                </View>
            </View>
        );
    }

};

const mapStateToProps = (state) => ({
    userId: state.registerUserReducer.userId
})

export default connect(mapStateToProps, null)(HomePage);


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
