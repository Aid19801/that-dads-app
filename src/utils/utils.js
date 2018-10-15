import { AsyncStorage } from 'react-native';

const setUniqueIdentifierDB = async (uid) => {
    try {
        await AsyncStorage.setItem('userId', uid)
    } catch (error) {
        console.log('setUniqueIdentifierDB error: ', error);
    }
}

const setUserAsyncStorage = async (userId, userName, email, password, likes, dislikes, tagline, longitude, latitude) => {
    // console.log('async storage | setting userId: ', userId);
    // console.log('async storage | setting password: ', password);
    // console.log('async storage | setting userName: ', userName);
    // console.log('async storage | setting email: ', email);
    // console.log('async storage | setting likes: ', likes);
    // console.log('async storage | setting dislikes: ', dislikes);
    // console.log('async storage | setting tagline: ', tagline);

    // // adding in longitude / latitude
    // console.log('async storage | setting longitude: ', longitude);
    // console.log('async storage | setting latitude: ', latitude);

    try {
        await AsyncStorage.setItem('userId', userId);
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('likes', likes);
        await AsyncStorage.setItem('dislikes', dislikes);
        await AsyncStorage.setItem('tagline', tagline);
        await AsyncStorage.setItem('longitude', longitude);
        await AsyncStorage.setItem('latitude', latitude);

        console.log('Async Storage | all items set correctly: ', password);
        return true;
    } catch (error) {
        console.log('setUserId error: ', error);
        return false;
    }
};


const getUserAsyncStorage = async () => {
    let uid = await AsyncStorage.getItem('userId');
    let un = await AsyncStorage.getItem('userName');
    let em = await AsyncStorage.getItem('email');
    let pw = await AsyncStorage.getItem('password');
    let likes = await AsyncStorage.getItem('likes');
    let disl = await AsyncStorage.getItem('dislikes');
    let tag = await AsyncStorage.getItem('tagline');
    let long = await AsyncStorage.getItem('longitude');
    let lat = await AsyncStorage.getItem('latitude');

    
    return { 
        userId: uid,
        userName: un,
        email: em,
        password: pw,
        likes: likes,
        dislikes: disl,
        tagline: tag,
        longitude: long,
        latitude: lat,
    }
}
const updateAsyncWithUserInformation = async (obj) => {
    try {
        await AsyncStorage.setItem('userId', obj._id);
        await AsyncStorage.setItem('userName', obj.userName);
        await AsyncStorage.setItem('password', obj.password);
        await AsyncStorage.setItem('email', obj.email);
        await AsyncStorage.setItem('likes', obj.likes);
        await AsyncStorage.setItem('dislikes', obj.dislikes);
        await AsyncStorage.setItem('tagline', obj.tagline);
        await AsyncStorage.setItem('longitude', obj.longitude);
        await AsyncStorage.setItem('latitude', obj.latitude);

        console.log('all items stored correctly!');

    } catch(err) {
        console.log('async await fail: ', err);
    }
}

const destroyAsyncStorage = async () => {
    try {
        await AsyncStorage.removeItem('email', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('userName', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('password', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('userId', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('likes', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('dislikes', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('tagline', (err) => {
            console.log('resp: ', err);
        })
        alert('deleted all items');
    } catch (err) {
        console.log('destroyAsyncStorage err: ', err);
    }
}

const refreshUserLocation = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((res) => {
            // resolve(res.coords); PROD
            resolve({ latitude: 51.54609, longitude: -0.07424454, }) // MOCK
        }, (err) => {
            console.log(' :( fail | res coords: ', err);
            reject(err);
        })
    })
}


export {
    getUserAsyncStorage,

    destroyAsyncStorage,
    setUserAsyncStorage,
    setUniqueIdentifierDB,
    refreshUserLocation,
    updateAsyncWithUserInformation,
}