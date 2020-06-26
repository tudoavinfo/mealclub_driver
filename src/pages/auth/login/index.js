import React, {Component}  from 'react';
import {View, 
        Text, 
        StatusBar, 
        Platform,
        ScrollView, 
        TextInput, 
        Image, 
        TouchableOpacity, 
        KeyboardAvoidingView,

    } from 'react-native';
import logoImg from '../../../assets/mealclub_logo.png';

import Icon from 'react-native-vector-icons/dist/Feather';

import styles from './styles';

Icon.loadFont()

class Login extends Component{

    inputs = {};

    focusTheField = (id) => {
        this.inputs[id].focus();
    }

    render(){
        return( 
 
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS == 'ios' ? "padding" : "height"}
        >
            
            <StatusBar  barStyle="dark-content" animated={true} /> 
            
            <ScrollView>
            
                
                    <View style={styles.containerLogo}>
                        <Image source={logoImg} style={styles.logoimg} resizeMode="contain" />
                    </View>
                    
                    <View style={styles.containerDescription}>
                        <Text style={styles.txtDescription}>MealClub</Text>
                        <Text>faça parte desta família</Text>
                    </View>
                    
                    <View style={styles.containerInputs}>
                    
                        <View style={styles.containerUsername}>
                            
                            <Icon style={styles.featherIcons} size={25} name={"user"} color="#e0201f"/>
                            <TextInput style={styles.txtInputUsername} 
                                placeholderTextColor="#b8ac95" 
                                placeholder="Email / Username"
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                keyboardType={'email-address'}
                                blurOnSubmit={false}
                                returnKeyType={'next'}
                                onSubmitEditing={() => { this.focusTheField('password');} }
                            />
                        </View>
                    

                        <View style={styles.containerUsername}>
                            <Icon style={styles.featherIcons} size={25} name="lock" color="#e0201f"/>
                            <TextInput 
                                style={styles.txtInputPassword}
                                ref={input => { this.inputs['password'] = input}} 
                                placeholder="Password"
                                secureTextEntry
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                placeholderTextColor="#b8ac95"
                                returnKeyType={'done'}
                            />
                        </View>
                        
                        

                        <TouchableOpacity 
                        style={styles.btnLogin}
                        onPress={()=>{alert('ok')}}
                        >
                            <Text style={styles.txtLogin}>LOGIN</Text>
                            <Icon  name="log-in" size={25} color="#fff"/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                        style={styles.btnForgotPassword}
                        onPress={()=>{alert('esqueci senha')}}
                        >
                            <Text>Forgot Password?</Text>
                        </TouchableOpacity>


                    </View>   

                    <View style={styles.containerCreateAccount}>
                        <Text>Do not have account?  </Text>
                            <TouchableOpacity
                            onPress={()=>{alert('cadastro novo')}}
                            >
                            <Text style={styles.txtSignUp}>Sign up</Text>
                        </TouchableOpacity>                
                    </View>

            </ScrollView>

        </KeyboardAvoidingView>

        );
    }
}


export default Login;

