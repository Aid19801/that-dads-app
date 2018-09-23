import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform, Image } from 'react-native';
import { FooterNav } from '../../components/index';
import { colorScheme } from '../../utils/colorscheme';
import { connect } from 'react-redux';
const avatar = '/Users/adrianthompson/Documents/projects/that-dads-app/src/utils/avatar.png';

class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            userUpdated: false,
        }
    }

    render() {

        const { navigation, userName, email, password } = this.props;
        return (
            <View style={styles.container}>
            

                <View style={styles.personalInfoContainer}>
                    <View style={styles.personalInfoIndividualRow}>
                        <Text style={styles.smallFont}>userName: </Text><Text>{userName}</Text>
                    </View>
                    <View style={styles.personalInfoIndividualRow}>
                        <Text style={styles.smallFont}>email: </Text><Text>{email}</Text>
                    </View>
                    <View style={styles.personalInfoIndividualRow}>
                        <Text style={styles.smallFont}>password: </Text><Text>*******</Text>
                    </View>
                </View>


                <View style={styles.likesDislikesContainer}>
                    <View style={styles.likesIndividualRow}>
                        <Text style={styles.likesIndividualText}>Likes: </Text><Text>sometimes i like walks in the park and drinking coffee. then beer.</Text>
                    </View>
                    <View style={styles.likesIndividualRow}>
                        <Text style={styles.likesIndividualText}>Dislikes: </Text><Text>i am rather impartial to bad coffee and walks in the park when it's raining.</Text>
                    </View>
                </View>
                <View style={styles.photoTitleContainer}>

                    <View style={styles.photoContainer}>
                            <Image style={styles.image} source={require(avatar)} />
                    </View>

                </View>

                    
                <View style={styles.nav}>
                    <FooterNav navigate={navigation} />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.loginStatusReducer.email,
    password: state.loginStatusReducer.password,
    userName: state.loginStatusReducer.userName,
    userId: state.loginStatusReducer.userId,
})

export default connect(mapStateToProps, null)(ProfilePage);

const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        flexDirection: 'column',

        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',

        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'skyblue',

    },
    personalInfoContainer: {
        flexDirection: 'column',
        // marginTop: 80,
        borderWidth: 1,
        borderColor: 'black',
        width: 290,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    personalInfoIndividualRow: {
        flexDirection: 'row',
    },

    likesDislikesContainer: {
        marginTop: 10,
        flexDirection: 'column',
        width: 290,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
    },
    likesIndividualRow: {
        width: 290,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: 5, 
    },
    likesIndividualText: {
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
            },
            android: {
                fontFamily: 'serif',
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
            }
        })
    },
    photoTitleContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },

    smallFont: {
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
            },
            android: {
                fontFamily: 'serif',
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
            }
        })
    },

    mediumFont: {
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
                color: 'black',
                fontSize: 25,
            },
            android: {
                fontFamily: 'serif',
                color: 'black',
                fontSize: 25,
            }
        })
    },

    photoContainer: {
        borderWidth: 2,
        width: 170,
        height: 170,
        marginBottom: 10,
        marginTop: 10,
    },

    image: {
        borderWidth: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'orange',
        position: 'relative',
        margin: 0,

    },

    nav: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    },
})