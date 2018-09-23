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
        console.log('this.props.TAGLINE: ', this.props.tagline);

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
                    <Text style={styles.tagline}>"{tagline}..."</Text>
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
        justifyContent: 'flex-end',
        alignContent: 'flex-end',

        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'skyblue',

    },
    personalInfoContainer: {
        flexDirection: 'column',
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
        paddingLeft: 15,
        backgroundColor: 'darkblue',
        width: 110,
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
        width: 130,
        height: 130,
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

    tagline: {
        fontStyle: 'italic',
        textAlign: 'center',
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