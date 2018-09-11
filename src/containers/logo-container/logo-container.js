import React from 'react';
import { StyleSheet, Keyboard, Text, View, Platform } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';

export default class LogoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoIsShowing: true,
        }
    }

    componentWillMount() {
        this.logoWillHide = Keyboard.addListener('keyboardDidShow', this._logoWillHide);
        this.logoWillShow = Keyboard.addListener('keyboardDidHide', this._logoWillShow);
    }

   _logoWillHide = () => {
       this.setState({
           logoIsShowing: false,
       })
    }

   _logoWillShow = () => {
       this.setState({
           logoIsShowing: true,
       })
    }

    keyboardIsShowingHideLogo = () => {
        const { logoIsShowing } = this.state;
        if (!logoIsShowing) {
            return {
                paddingTop: 1,
                paddingBottom: 1,
                paddingRight: 5,
                paddingLeft: 5,
            }
        } else {
            return styles.container;
        }
    }

    render() {
        
        return (
            <View style={this.keyboardIsShowingHideLogo()}>
                <Text style={styles.logo}>#thatDadsApp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderTopColor: colorScheme.horizontalLines,
        borderBottomColor: colorScheme.horizontalLines,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingTop: 20,
        paddingBottom: 30,
        paddingRight: 35,
        paddingLeft: 35,
    },
    logo: {
        fontSize: 50,
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
                color: 'black',
                fontSize: 35,
            },
            android: {
                fontFamily: 'serif',
                color: 'black',
                fontSize: 45,
            }
        })
    }

});
