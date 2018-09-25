import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import { connect } from 'react-redux';
import { FooterNav } from '../../components/index';
import { UPDATE_USER_LOCATION, LOAD_MAP } from '../../actions';
import { colorScheme } from '../../utils/colorscheme';

class MapPage extends Component {

    static navigationOptions = {
        title: '#localDads',
        headerStyle: {
            backgroundColor: colorScheme.midlevelColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.props.loadMap();
        this.props.updateUserLocation();
    }

    render() {

        const { navigation, longitude, latitude } = this.props;

        return (
            <View style={styles.container}>
                
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>London</Text>
                </View>

                <View style={styles.mapContainer}>
                    <Image style={styles.mapImage} source={require('/Users/adrianthompson/Documents/projects/that-dads-app/src/containers/map-page/map-ldn.png')} />
                </View>

                <View style={styles.nav}>
                    <FooterNav navigate={navigation} />
                </View>

            </View>

        )
    }
}

const mapStateToProps = (state) => ({
    longitude: state.userLocationReducer.longitude,
    latitude: state.userLocationReducer.latitude,
});

const mapDispatchToProps = (dispatch) => ({
    loadMap: () => dispatch({ type: LOAD_MAP }),
    updateUserLocation: () => dispatch({ type: UPDATE_USER_LOCATION }),
})

export default connect(mapStateToProps, mapDispatchToProps)(MapPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'flex-end',

        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'skyblue',

    },
    titleContainer: {
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 5,
        backgroundColor: colorScheme.backgroundColorDark,
        width: '45%',

        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'flex-end',
    },
    titleText: {
        fontSize: 20,
        color: 'white',
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
            },
            android: {
                fontFamily: 'monospace',
            }
    }),
    },
    mapContainer: {
        width: '90%',
        height: '80%',

        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: colorScheme.backgroundColorLight,
    },
    mapImage: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },
    nav: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '11%',
    },
})