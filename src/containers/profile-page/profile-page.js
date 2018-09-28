import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform, Image } from 'react-native';
import { FooterNav } from '../../components/index';
import { colorScheme } from '../../utils/colorscheme';
import { connect } from 'react-redux';
const avatar = '/Users/adrianthompson/Documents/projects/that-dads-app/src/utils/harold.png';

class ProfilePage extends Component {

    static navigationOptions = {
        title: '#profile',
        headerStyle: {
            backgroundColor: colorScheme.midlevelColor,
            // alignItems: 'center',
            // justifyContent: 'space-between',
            // alignContent: 'flex-end',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            ...Platform.select({
                ios: {
                    fontFamily: 'American Typewriter',
                },
                android: {
                    fontFamily: 'serif',
                }
            })
        },
    };

    constructor() {
        super();
        this.state = {
            userUpdated: false,
        }
    }

    render() {

        const { navigation, userName, email, password, likes, dislikes, tagline } = this.props;
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
                        <Text style={styles.likesIndividualText}>Likes: </Text><Text>{likes}</Text>
                    </View>
                    <View style={styles.likesIndividualRow}>
                        <Text style={styles.likesIndividualText}>Dislikes: </Text><Text>{dislikes}</Text>
                    </View>
                </View>

                <View style={styles.photoTitleContainer}>
                    <View style={styles.photoContainer}>
                            <Image style={styles.image} source={require(avatar)} />
                    </View>
                    <Text style={styles.tagline}>{tagline}</Text>
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
    
    likes: state.loginStatusReducer.likes,
    dislikes: state.loginStatusReducer.dislikes,
    tagline: state.loginStatusReducer.tagline,
})

export default connect(mapStateToProps, null)(ProfilePage);

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
        backgroundColor: 'skyblue',

    },
    personalInfoContainer: {
        flexDirection: 'column',
        marginTop: 20,
        width: 290,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: colorScheme.backgroundColorLight,
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

        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: colorScheme.backgroundColorLight,

        ...Platform.select({
            android: {
                width: 325,
            }
        })
    },
    likesIndividualRow: {
        width: 290,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginBottom: 5, 
        marginTop: 5, 
        marginLeft: 5,
    },
    likesIndividualText: {
        paddingLeft: 15,
        backgroundColor: colorScheme.backgroundColorDark,
        width: 90,
        borderColor: 'white',
        
        borderWidth: 1,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
                fontFamily: 'American Typewriter',
            },
            android: {
                fontFamily: 'serif',
            }
        })
    },

    photoTitleContainer: {
        width: '60%',
        height: '30%',

        ...Platform.select({
            android: {
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
            }
        }),
    },

    photoContainer: {
        width: '100%',
        borderColor: 'lightgrey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorScheme.backgroundColorDark,

        paddingTop: 5,
        paddingBottom: 5,
        // paddingLeft: -5,
        // paddingRight: -5,
        borderRadius: 30,
    },

    image: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,
        width: '80%',
        height: '100%',
    },

    tagline: {
        textAlign: 'center',

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
                width: '150%',
            }
        })
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

    nav: {
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '11%',
        backgroundColor: colorScheme.backgroundColorLight,
    },
})