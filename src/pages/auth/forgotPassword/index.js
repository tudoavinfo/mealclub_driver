import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/mealclub_logo.png';

import Icon from 'react-native-vector-icons/dist/Feather';

export default function ForgotPassword(){
    return(

        <View style={styles.container}>
            
            <View style={styles.containerImg}>
                <Image source={logoImg} style={styles.logoimg} resizeMode="contain"></Image>  
            </View>
              
            
            <View>
                <Text style={styles.txtTitle}>Recuperação de senha</Text>
                <Text>preencha o campo abaixo e deixe o resto com a gente</Text>
            </View>
            
            
            <View style={styles.containerEditPassword}>                            
                <Icon style={styles.featherIcon} size={25} name={"mail"} color="#e0201f"/>
                    <TextInput style={styles.txtInputEmail} 
                    placeholderTextColor="#b8ac95" 
                    placeholder="Email/ Username"
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'email-address'}
                    blurOnSubmit={false}
                    />
            </View>
            
            <View style={styles.containerSubmitEdit}> 
                
                <TouchableOpacity style={styles.btnEditPassword}>
                    <Text style={styles.txtNewPassword}>NOVA SENHA</Text>
                    <Icon size={25} name={"edit"} color="#fff"></Icon>
                </TouchableOpacity>
            </View>
            
        </View>
       
    );
}
