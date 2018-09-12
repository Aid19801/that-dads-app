import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ContentBox } from '../index';
import mocks from '../../mocks/mock-news';

const ContentContainer = () => {

    return (
        <View style={styles.container}>

            <FlatList
                data={mocks}
                keyExtractor={(item, index) => index.toString()}
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
        width: '95%',
        // borderWidth: 5,
        borderColor: 'grey',
        alignItems: 'center',
    },
});
