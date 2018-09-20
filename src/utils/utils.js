import { AsyncStorage } from 'react-native';

const setUniqueIdentifierDB = async (uid) => {
    try {
        await AsyncStorage.setItem('userId', uid)
    } catch (error) {
        console.log('setUniqueIdentifierDB error: ', error);
    }
}

const setUserId = async (user, passw) => {
    console.log('setUserId user', user);
    console.log('setUserId passw', passw);
    try {
        await AsyncStorage.setItem('userName', user);
        await AsyncStorage.setItem('password', passw);
    } catch (error) {
        console.log('setUserId error: ', error);
    }
};

const getUserId = async () => {
        try {
            let userName = await AsyncStorage.getItem('userName');
            let password = await AsyncStorage.getItem('password');
            console.log('get user id - userName: ', userName);
            console.log('get user id - password: ', password);
            return { userName, password };

        } catch (err) {
            console.log('getUserId err: ', err);
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
    } catch (err) {
        console.log('destroyAsyncStorage err: ', err);
    }
}


export {
    setUniqueIdentifierDB,
    getUserId,
    setUserId,
    destroyAsyncStorage,
}