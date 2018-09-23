import { AsyncStorage } from 'react-native';

const setUniqueIdentifierDB = async (uid) => {
    try {
        await AsyncStorage.setItem('userId', uid)
    } catch (error) {
        console.log('setUniqueIdentifierDB error: ', error);
    }
}

const setUserAsyncStorage = async (userId, userName, email, passw) => {
    console.log('async storage | setting userId: ', userId);
    console.log('async storage | setting passw: ', passw);
    console.log('async storage | setting userName: ', userName);
    console.log('async storage | setting email: ', email);
    try {
        await AsyncStorage.setItem('userId', userId);
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('password', passw);
        await AsyncStorage.setItem('email', email);
        console.log('Async Storage | all items set correctly');
        return true;
    } catch (error) {
        console.log('setUserId error: ', error);
        return false;
    }
};

const getUserAsyncStorage = async () => {
        try {
            let email = await AsyncStorage.getItem('email');
            let password = await AsyncStorage.getItem('password');
            let userId = await AsyncStorage.getItem('userId');
            let userName = await AsyncStorage.getItem('userName');
            return { email, password, userId, userName };

        } catch (err) {
            console.log('getUserAsyncStorage err: ', err);
        }
}

const destroyAsyncStorage = async () => {
    try {
        await AsyncStorage.removeItem('userName', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('password', (err) => {
            console.log('resp: ', err);
        })
        await AsyncStorage.removeItem('userId', (err) => {
            console.log('resp: ', err);
        })
        alert('deleted all items');
    } catch (err) {
        console.log('destroyAsyncStorage err: ', err);
    }
}


export {
    setUniqueIdentifierDB,
    getUserAsyncStorage,
    setUserAsyncStorage,
    destroyAsyncStorage,
}