import { AsyncStorage } from 'react-native';

const setUserId = async (user, passw) => {
    try {
        await AsyncStorage.setItem('userName', user);
        await AsyncStorage.setItem('password', passw);
    } catch (error) {
        console.log('setUserId error: ', error);
    }
};

const getUserId = async () => {
        try {
            let userName = await AsyncStorage.getItem('userName') || '';
            let password = await AsyncStorage.getItem('password') || '';
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
    } catch (err) {
        console.log('destroyAsyncStorage err: ', err);
    }
}


export {
    getUserId,
    setUserId,
    destroyAsyncStorage,
}