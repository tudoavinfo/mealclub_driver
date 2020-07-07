import AsyncStorage from '@react-native-community/async-storage';

import { constant } from '../constants';

export const onSignIn = async (token, id) => {
    try {
        await AsyncStorage.setItem(constant.TOKEN_KEY, token)
        await AsyncStorage.setItem(constant.USER_ID, id)
        return true;
    } catch (erro) {
        return erro;
    }
}


export const onSignOut = async () => {   
    await  AsyncStorage.removeItem(constant.TOKEN_KEY);
    return true;   
}

export const isSignedIn = async () => {
    
       const token = await AsyncStorage.getItem(constant.TOKEN_KEY);

        if(token !== null ){
            throw (new Error('Login Requerido'));
        } 

        return true;
    

};