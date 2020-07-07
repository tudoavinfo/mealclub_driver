import React from 'react';
import {Text, View, Image} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';
import userimg from '../../assets/mealclub_logo.png';

import Profile from '../profile' ;
import Transporte from '../transporte';
import Personal from '../personal';
import Delivery from '../delivery';
import Earnings from '../earnings';
import { createStackNavigator } from 'react-navigation-stack';



const CustomDrawerComponent = (props) => (    
    <View style={{flex:1}}>  
        <View style={{ justifyContent:'center', alignItems:'center', padding:10}}>
            <Image source={userimg} resizeMode={'contain'} style={{width:100, height:100}}/>
            <Text>
                Olá, First Name
            </Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'center', }}>
            <Text style={{flex:1 }}>
                Sair
            </Text>
        </View>
        <View style={{padding:10, marginTop:15, marginBottom:10 }}>
            <Text>
                Link de Indicação:
            </Text>
            <Text>
                https://www.mealclub.com.br/sponsorid/teste
            </Text>
        </View>
        <DrawerItems {...props} />    
    </View>
)

    const ProfileStackNavigator = createStackNavigator(
        {
            Perfil : { screen: Profile, navigationOptions:{ header: null } },
            PersonalInfo : { screen: Personal, navigationOptions:{ header: null } },
            TransportInfo : { screen: Transporte, navigationOptions:{ header: null } },
             
        },{

        }
    );

    const AppDrawerNavigator = createDrawerNavigator(
        {
            Home : {screen: ProfileStackNavigator, navigationOptions:{ drawerIcon: <Icon name='account-circle' size={28}/>}},
        },
        {
        initialRouteName: 'Home',
        contentComponent: CustomDrawerComponent,
        contentOptions:{
            activeTintColor: '#0b66b2',
            activeBackgroundColor: '#E6F4FF',
            labelStyle:{
            fontSize: 19,
            },
            itemsContainerStyle:{
            marginVertical: 0,
            marginHorizontal: 0,
            },
            iconContainerStyle:{
            opacity: 0.7,
            }
        }
        }
    )

    const AppTabNavigator = createBottomTabNavigator({
        Profile: { screen:AppDrawerNavigator},
        Delivery: {screen: Delivery},
        Earnings: {screen:Earnings},
    }, 
    {  
        initialRouteName: 'Profile',
        animationEnabled: true,
        lazy:false,
        tabBarPosition: 'bottom',
        defaultNavigationOptions: ({ navigation }) => (
            {
                tabBarIcon: ({tintColor }) => {
                    const { routeName } = navigation.state;
                    let IconComponent = Icon;
                    let iconName;
                    if (routeName === 'Profile') {
                        iconName =  'account-circle';
                    }else if(routeName === 'Delivery'){
                        iconName = 'local-taxi';
                    }else if(routeName === 'Earnings'){
                        iconName = 'poll';
                    }
                    
                    return <IconComponent name={iconName}  color={tintColor} />;
                },tabBarOptions : {
                    activeTintColor: '#e02140',
                    inactiveTintColor: '#a0a0a0',
                    keyboardHidesTabBar: true,
                    adaptive: true,
                    style:{
                        backgroundColor:'#f8f9e7',
                        borderTopColor:'#e02140',
                        borderTopWidth:0.7,
                    },
                    
                }
            }
        ) 
    })



export default createAppContainer(AppTabNavigator);