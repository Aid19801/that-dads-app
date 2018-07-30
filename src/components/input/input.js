import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const DadsInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={props.placeholder}
                style={styles.textInput}
                onChangeText={(e) => this.setState({ email: e })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'red',
    }
})

const mapDispatchToProps = (dispatch, props) => ({
    fireAThing: () => dispatch({ type: `TAKE_FROM_INPUT`, payload: 'input payload!'}) // <--how do we take whats in the input and pass to payload?
})

const mapStateToProps = (state) => ({
    myProp: '', // <--how do we take whats in the input and pass to payload?
})
export default connect(mapStateToProps, mapDispatchToProps)(DadsInput);

// fire an action that takes 'name of input' && value entered
// reducer hears it and stores it in state
// container has MSTP and puts it in HOC state.
// when you press submit it takes *THAT* and fires the saga off.
