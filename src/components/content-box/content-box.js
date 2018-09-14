import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';

const avatar = '/Users/adrianthompson/Documents/projects/that-dads-app/src/utils/avatar.png';

const ContentBox = (props) => {
    // console.log('props: ', props.imgUrl);
    const imgUrl = `/Users/adrianthompson/Documents/projects/that-dads-app/src/mocks/${props.imgUrl}`;
    const linkUrl = props.url;
    return (
            <View style={styles.storyBox}>

                <TouchableOpacity onPress={() => alert('pushed!')}>
                    <View style={styles.titleAndImage}>
                        <Text style={styles.title}>{props.title}</Text>

                        <Image
                            style={styles.image}
                            source={{ uri: props.imgUrl }}
                        />

                    </View>
                    <Text style={styles.blurb}>{props.synopsis}</Text>
                    <Text>{props.source}</Text>
                </TouchableOpacity> 

            </View>
    );
};

export default ContentBox;

const styles = StyleSheet.create({
    storyBox: {
        flex: 1,
        flexDirection: 'column',
        borderWidth: 2,
        marginTop: 4,
        padding: 9,
        backgroundColor: colorScheme.backgroundColorLight,
    },
    titleAndImage: {
        width: 190,
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 40,
        color: 'white',
        flexWrap: 'wrap',
        width: '85%',

        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    image: {
        width: '70%',
        height: '50%',
        borderWidth: 1,
        shadowOpacity: 0.75,
        shadowRadius: 15,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
    },
    blurb: {
        color: 'grey',
    }
});

