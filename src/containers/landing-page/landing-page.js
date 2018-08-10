import React, { Component } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import { Logo, Emoji, Button } from '../../components/index';
import { APP_LOADED, CHECK_LOGIN_STATUS } from '../../reducers/constants';
import { connect } from 'react-redux';

class LandingPage extends Component {

    constructor() {
        super();
        this.state = {
            keyboardIsShowing: false,
        }
    }

    componentDidMount() {
        this.props.updateAppState();
        AsyncStorage.getItem('userId').then(res => {
            console.log('response yo: ', res);
        })
    }

    render() {
        const { appLoaded, checkLoginStatus, userId } = this.props;

        if (appLoaded) {
           checkLoginStatus(userId);
        }
        return (
            <View style={styles.container}>
                <Logo />
                <Emoji />
                <Button navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

const mapStateToProps = (state, props) => {
    return {
        appLoading: state.appStateReducer.appLoading,
        appLoaded: state.appStateReducer.appLoaded,
        userId: 'hard-coded-user-id-304869',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppState: () => dispatch({ type: APP_LOADED }),
        checkLoginStatus: (userId) => dispatch({ type: CHECK_LOGIN_STATUS, userId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);