import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/*Importação das Rotas */ 
import Loading from './pages/Loading';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard';
import ForgotPassword from './pages/auth/forgotPassword';



const SignedOutRoutes = createStackNavigator(
    {   
        Login: { screen: Login, navigationOptions:{ header: null, }},       
    },
    {
        initialRouteName: 'Login',
        headerMode: 'screen',
        defaultNavigationOptions:{
            headerStyle: {backgroundColor: '#0b66b2'},
            headerTintColor: '#fff', 
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:22,
            } 
        }
    });


const SignedInRoutes = createStackNavigator(
    {
        Dashboard: {screen:Dashboard, navigationOptions:{ header: null, }}, 
    },
    {
        defaultNavigationOptions:{
            headerStyle: { backgroundColor: '#0b66b2', height: 90 },
            headerTintColor: '#fff', 
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:22,
            } 
        }
    }
); 


const Routes  = createAppContainer(
    
    createSwitchNavigator(
        {
            Loading:{screen:Loading, navigationOptions:{header:null,} },
            App: SignedInRoutes,
            Auth: SignedOutRoutes,
        },
        {
          initialRouteName: 'Loading',
        }
      )
);

export default Routes;