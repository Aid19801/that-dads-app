import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ContentContainer } from '../index';

const MainPageContainer = (props) => (
    <View style={styles.container}>
        { props.isHome ? <ContentContainer /> : <Text>not the home page</Text>}
    </View>
);


export default MainPageContainer;

const mapStateToProps = (state) => ({
    isLoggedIn: state.loginStatusReducer.isLoggedIn,
    isLoading: state.loginStatusReducer.isLoading,
})


const styles = StyleSheet.create({
    container: {
        width: '99%',
        height: '89%',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: 'black'
    }
});