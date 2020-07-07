import React from 'react';
import {View, Text, ScrollView, TextInput, Image} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import userimg from '../../assets/Path_28710-path.png';

import styles from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

const MyCustomRightComponent = ({navigation}) => {
    return <Icon name={'menu'} color={'#e02140'} onPress={ () => { navigation.openDrawer() } }/>
}

const MyCustomGoBack = ({navigation}) => {
    return <Icon name={'arrow-back'} color={'#e02140'} onPress={()=>{navigation.goBack()}} />
}

function Personal({navigation}){

    return(
        <>
            <Header 
                statusBarProps={{ barStyle: 'dark-content', backgroundColor:'#f1f1f1'}}
                leftComponent={< MyCustomGoBack navigation={navigation} />}
                centerComponent={{ text: 'Profile', style: { color: '#e02140' } }}
                rightComponent={ <MyCustomRightComponent navigation={navigation}/>}
                containerStyle={{
                    backgroundColor: '#f1f1f1',
                    justifyContent: 'space-around',
                }}            
            />
        

            <ScrollView>
                
                <View style={styles.mapContainer}> 

                        <View style={styles.avatar}>
                            <Image source={userimg} style={styles.avatarImg} />
                            <View style={styles.iconCamera}>
                                <Icon name={'camera'} type={'feather'} size={20} color={'#666'}/>
                            </View>
                        </View>     

                        <View style={styles.personalInformation}>
                            <Text style={styles.personalName}>Name, LastName</Text>
                            <Text style={styles.instructions}>Agora é o momento de validação das suas informações pessoais.</Text>
                        </View>


                    <View style={styles.groupBtnOptions}>

                        <View style={styles.btnOption}>  
                            <Icon name={'phone'} style={{paddingLeft:20, paddingRight:20}}/>
                            <TextInput placeholderTextColor="#666" placeholder={'+55 99 99999 9999'} name="phone"/>  
                        </View>

                        <View style={styles.btnOption}>
                            <Icon name={'mail'} style={{paddingLeft:20, paddingRight:20}}/>
                            <TextInput placeholderTextColor="#666" placeholder={'E-mail'}/>
                        </View>

                        
                        <TouchableOpacity style={styles.btnSave}>
                            <Text style={{fontSize: 15, color: '#fff'}}>LOGIN</Text>
                        </TouchableOpacity>
                        
                    </View>           
                </View>              

            </ScrollView>            
        
        </>
                                
        
    );

}

export default Personal;