import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

const DadsInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={props.placeholder}
                style={styles.textInput}
                onFocus={props.onFocus()}
                onChangeText={props.updateThing()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: 'lightgrey',
        width: 280,
        marginBottom: 5,
        marginTop: 5,
        alignItems: 'center',
        color: 'black',
        fontSize: 30,
    }
})

const mapDispatchToProps = (dispatch, props) => ({
    updateThing: (e) => {
        console.log('props: ', props.placeholder);
        dispatch({ type: `TAKE_FROM_INPUT`, payload: e })
    }
})

const mapStateToProps = (state) => ({
    myProp: '', // <--how do we take whats in the input and pass to payload?
})
export default connect(mapStateToProps, mapDispatchToProps)(DadsInput);

// fire an action that takes 'name of input' && value entered
// reducer hears it and stores it in state
// container has MSTP and puts it in HOC state.
// when you press submit it takes *THAT* and fires the saga off.
