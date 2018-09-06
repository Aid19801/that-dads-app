import { AsyncStorage } from 'react-native';

const setUserId = async (user, passw) => {
    try {
        await AsyncStorage.setItem('userName', user);
        await AsyncStorage.setItem('password', passw);
    } catch (error) {
        console.log('AsyncStorage error: ', error);
    }
};

const getUserId = async () => {
        try {
            let userName = await AsyncStorage.getItem('userName') || '';
            let password = await AsyncStorage.getItem('password') || '';
            return { userName, password };

        } catch (err) {
            console.log('err: ', err);
        }
}


export {
    getUserId,
    setUserId,
}