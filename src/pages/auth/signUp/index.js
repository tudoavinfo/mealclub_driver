import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import logoImg from '../../../assets/mealclub_logo.png';
import Icon from 'react-native-vector-icons/dist/Feather';

import styles from './styles';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default function SignUp(){
    return(

        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>           
            
                <View style={styles.headerContainer}>
                    <Image source={logoImg} style={styles.logoimg}></Image>
                    <Text style={styles.txtDescription}>MealClub</Text>
                    <Text>faça parte desta família</Text>
                </View>

                <View style={styles.contentContainer}>
                    
                    <TextInput style={styles.allTxtInput} placeholderTextColor="#000" placeholder="Name" />                    
                    <TextInput style={styles.allTxtInput} placeholderTextColor="#000" placeholder="Last Name" />

                    <Icon name={'arrow-down'} size={20}/> 
                    <TextInput style={[styles.allTxtInput, {width: '25%'}]} placeholderTextColor="#000" placeholder="UF" />
                </View>

            </View>
        </ScrollView>
       
    );
}
