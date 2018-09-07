import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LogoContainer } from '../index';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <View style={styles.container}>
                <LogoContainer />

                <View>

                    <Text>YAY HOME PAGE.</Text>

                </View>

            </View>
        );
    }

};

export default HomePage;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
});
