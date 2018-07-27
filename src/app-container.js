import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { LogoContainer, EmojiContainer, ButtonContainer } from './containers';
import { APP_LOADED, CHECK_LOGIN_STATUS } from './reducers/constants';

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
    }

    render() {
        const { appLoaded, checkLoginStatus, userId } = this.props;

        if (appLoaded) {
           checkLoginStatus(userId);
        }
        return (
            <View style={styles.container}>
                <LogoContainer />
                <EmojiContainer />
                <ButtonContainer navigation={this.props.navigation} />
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
        userId: '',
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppState: () => dispatch({ type: APP_LOADED }),
        checkLoginStatus: (userId) => dispatch({ type: CHECK_LOGIN_STATUS, userId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);