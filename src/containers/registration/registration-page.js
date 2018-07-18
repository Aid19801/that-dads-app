import React from 'react';
import { TextInput, StyleSheet, Button, Animated, Keyboard, View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native';
import { LogoContainer } from '../index';
import { colorScheme } from '../../utils/colorscheme';

import { DATA_REQUESTED } from '../../actions';

import { connect } from 'react-redux';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardIsShowing: false,
            email: '',
            userName: '',
            password: '',
        };
    }

    componentDidMount() {
        this.props.getData();
    }

    async doData() {
        
        const randomNumber = Math.floor(Math.random() * 100000 + 1);
        const { email, userName, password } = this.state;

        await fetch('https://dads-logins.herokuapp.com/users', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: `${userName}_${randomNumber}`,
                email,
                userName,
                password,

            }),
            method: 'POST',
        }).then((res) => {
            console.log('response from POSTing: ', res);
        })
    }
    
    render() {
        let { data } = this.props;
        if (!data) {
            return (
                <View style={styles.loadingContainer}>
                   <Text>Loading...</Text>
                </View>
            )
        }
        

    return (
        <View style={styles.container}>
            <LogoContainer />

            <TextInput
                placeholder="email"
                style={styles.textInput}
                onChangeText={(e) => this.setState({ email: e })}
            />
            <TextInput
                placeholder="username"
                style={styles.textInput}
                onChangeText={(e) => this.setState({ userName: e })}
            />
            <TextInput
                placeholder="password"
                style={styles.textInput}
                onChangeText={(e) => this.setState({ password: e })}
            />

            <Button title='submit' onPress={() => {
                this.doData() // should this be a redux action via props?
            }} />
        </View>
    );
    }
    
};


const mapStateToProps = (state, props) => {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({ type: DATA_REQUESTED })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);


const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    loadingContainer: {
        paddingTop: 100,
    },
    container: {
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: 'lightgrey',
        width: 280,
        height: 54,
        marginBottom: 15,
        marginTop: 5,
        alignItems: 'center',
        color: 'black',
        fontSize: 30,
        // textDecoration: 'none',
    }
});
