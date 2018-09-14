import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { ContentBox } from '../index';
import mocks from '../../mocks/mock-news';
import Icon from 'react-native-vector-icons/MaterialIcons';
class ContentContainer extends Component {

    constructor(props) {
        super();
        this.state = {}
    }
    
    componentWillMount = () => {
        this.props.loadNews();
    }


    render() {
        const { stories } = this.props;
        if (this.props.isLoading) {
            return (
                <View style={styles.container}>
                    <Text style={{ marginTop: 90 }}>Loading News...</Text>
                    <Icon
                        name={'access-time'}
                        size={85}
                        color='white'
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>

                    <FlatList
                        data={mocks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                            <ContentBox
                                title={item.headline}
                                synopsis={item.blurb}
                                source={item.org}
                                url={item.url}
                                imgUrl={item.imgUrl}
                            />}
                    />
                </View>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.newsReducer.loading,
    stories: state.newsReducer.stories
});

const mapDispatchToProps = (dispatch) => ({
    loadNews: () => dispatch({ type: 'LOAD_NEWS' })
});


export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '95%',
        borderColor: 'grey',
        alignItems: 'center',
    },
});
