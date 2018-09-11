import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { colorScheme } from '../../utils/colorscheme';
import { ContentBox } from '../index';
import mocks from '../../mocks/mock-news';

const ContentContainer = () => {
    return (
        <View style={styles.container}>
            <Text>content container</Text>

            <FlatList
                data={mocks}
                renderItem={({ item }) => 
                    <ContentBox 
                        title={item.title}
                        synopsis={item.synopsis}
                        source={item.source}
                        url={item.url}
                        img={item.img} 
                    /> }
            />
        </View>
    )
}

export default ContentContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        borderWidth: 1,
        alignItems: 'center',
    },
});
