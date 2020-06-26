import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*Importação das Rotas */ 
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import ForgotPassword from './pages/auth/forgotPassword';
import SignUp from './pages/auth/signUp';


const Routes = createStackNavigator(
    {
        Login: { screen: Login, navigationOptions:{ header: null, }}, 
    },
    {
        initialRouteName:'Login',
    }
);

export default createAppContainer(Routes); 