import React from 'react';
import {
    View, Text, StyleSheet,
    Animated,
    Image,
    Easing } from 'react-native';

class LoadingSpinner extends React.Component {

    constructor() {
        super()
        this.spinValue = new Animated.Value(0);
    }

    spin = () => {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue, { toValue: 10, duration: 900, easing: Easing.linear }
        ).start(() => this.spin());
    };

    componentDidMount() {
        this.spin();
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 10],
            outputRange: ['0deg', '10deg']
        })

        return (
                <View styles={styles.container}>
                    <Animated.Image
                        style={{
                            width: 90,
                            height: 90,
                            transform: [{ rotate: spin }]
                        }}
                    source={{ uri: 'https://mbtskoudsalg.com/images/loading-images-png-2.png' }}
                    />
                </View>
        )
    }
}

export default LoadingSpinner;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 300,
        paddingLeft: 300,

        borderColor: 'red',
        borderWidth: 1,

    }
})