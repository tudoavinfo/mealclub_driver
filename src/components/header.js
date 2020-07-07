import React from 'react';
import {  
        Image, 
        StyleSheet, 
        StatusBar,
        View,
        } from 'react-native';


export const HeaderContainer =  ({ navigation, showDrawer, title }) => {

    return (
    
    <Header style={styles.header}>
        <StatusBar backgroundColor="#0b66b2" barStyle="light-content" />

            <View style={styles.left}>
                <Button transparent onPress={ () => { navigation.goBack() } }>
                    <Icon name='arrow-back' style={styles.icon}/>
                </Button>
            </View>

        
            { title == null ?
                <Body style={styles.headerBody}>
                    <Image 
                        source={require('../imagens/logo_apgbank.png')}
                        style={styles.stretch}
                    />
                    <Title>ApgBank</Title>
                </Body>
            :
                <Body style={styles.headerBody}>
                    <Title>{ title }</Title>
                </Body>
            }


            {   showDrawer ?
                <Right style={styles.right}>
                    <Button transparent onPress={ () => { navigation.openDrawer() } }>
                        <Icon name='menu' android="md-menu" ios="ios-menu" style={styles.icon}/>
                    </Button>
                </Right>
            :
                <Right style={styles.right}></Right>

            }

    </Header>

    )
}

const styles = StyleSheet.create({

    header:{
        height:90,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#0b66b2',
    },
    left:{
        flex:1,
    },
    right:{
        flex:1,
    },
    icon:{
       fontSize:28
    }, 
    headerBody:{
        flex:2,
        alignContent:'center',
        alignItems: 'center',
    },
    
    stretch: {
        width: 60,
        height: 37,
        resizeMode: 'stretch',

    }

})