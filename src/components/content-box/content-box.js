import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';

const avatar = '/Users/adrianthompson/Documents/projects/that-dads-app/src/utils/avatar.png';

const ContentBox = (props) => {
    const url = `/Users/adrianthompson/Documents/projects/that-dads-app/src/mocks/${props.img}`;
    console.log('url: ', url);
    return (
            <View style={styles.storyBox}>

                <TouchableOpacity onPress={() => alert('pushed!')}>
                    <View style={styles.titleAndImage}>
                        <Text style={styles.title}>{props.title}</Text>

                        <Image
                            style={styles.image}
                            source={require('/Users/adrianthompson/Documents/projects/that-dads-app/src/utils/avatar.png')}
                        />

                    </View>
                    <Text style={styles.blurb}>I am a story blah slfo osihopn sihspf lnpiasf iphadfpinp kh ihsf jd</Text>
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
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        color: 'black',
        flexWrap: 'wrap',
        width: '85%',
    },
    image: {
        width: 40,
        height: 40,
        borderWidth: 1,
    },
    blurb: {
        color: 'grey',
    }
});

