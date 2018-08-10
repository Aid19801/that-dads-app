import React, { Component } from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class RegPage extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            userName: '',
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        // this.amILoggedIn()
    }

    // amILoggedIn = async () => {
    //     await AsyncStorage.setItem('foo', 'foo saved to this');
    // }

    getData = async () => {
        try {
            await AsyncStorage.getItem('foo', (err, res) => {
                if (!err && loggedIn != null) {
                    this.setState({ loggedIn });
                }
            })
        } catch (e) {
            console.log("Error ", e);
        }
    }


    render() {

        return (
            <View>
                {this.state.isLoggedIn ? <Text>Logged In</Text> : <Text>Logged Out</Text>}
                

                <Button title='LogIn' onPress={() => {
                    this.setState({ isLoggedIn: true, })
                }} />
                <Button title='LogOut' onPress={() => {
                    this.setState({ isLoggedIn: false, })
                }} />
                <Button title='retrieve' onPress={this.getData()} />
            </View>
        )
    }
}

const mapStateToProps = (state, props) => ({
    userId: state.loginStatusReducer.userId
})
export default connect(mapStateToProps)(RegPage);