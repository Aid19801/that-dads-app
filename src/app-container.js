import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { LogoContainer, EmojiContainer, ButtonContainer } from './containers';
import { APP_LOADING, APP_LOADED, USER_LOGGED_IN } from './reducers/constants';
import { destroyAsyncStorage, getUserAsyncStorage } from './utils/utils'
import { connect } from 'react-redux';


class LandingPage extends Component {

    constructor() {
        super();
        this.state = {
            keyboardIsShowing: false,
        }
    }

    componentWillMount() {
        this.props.updateAppStateToLoading();
    }

    componentDidMount = async () => {
        this.props.updateAppStateToLoaded();
        await getUserAsyncStorage();
    }

    render() {
        const { appLoading, appLoaded } = this.props;

        if (appLoading) {
            return (
                <Text style={ { marginTop: 90, marginLeft: 90 } }>Loading...</Text>
            )
        }


        return (
            <View style={styles.container}>
                <LogoContainer />
                <EmojiContainer />
                <ButtonContainer navigation={this.props.navigation} />
                <Button title="killAsync" onPress={() => destroyAsyncStorage()}/>
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAppStateToLoading: () => dispatch({ type: APP_LOADING }),
        updateAppStateToLoaded: () => dispatch({ type: APP_LOADED }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);