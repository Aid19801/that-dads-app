import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ContentContainer } from '../index';
import { compose } from 'redux';
import { connect } from 'react-redux';

const basicElement = () => (
    <View style={{ width: 90, height: 90, borderWidth: 3, borderColor: 'green' }}>
        <Text>i am a basic el</Text>
    </View>
);

const MainPageFactory = FactoryComponent => {

    const MainPage = (props) => (
        <View style={styles.container}>
            <Text>News</Text>
            <Text>is logged in? {props.isLoggedIn}</Text>
            <FactoryComponent />
        </View>
    );
    return MainPage;
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.loginStatusReducer.isLoggedIn,
    isLoading: state.loginStatusReducer.isLoading,
})

export default compose(
    connect(mapStateToProps, null),
    MainPageFactory,
)(basicElement);

// basic element is passed to MainPageFactory, the result of that
// is passed to the next one up... 
// think of this is as "basicElement passed to bottom/right-most arg, then result of that passed
// 
const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '88%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red'
    }
});