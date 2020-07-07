import React from 'react';
import {View, Text, Image} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import styles from './styles';
import { TouchableOpacity} from 'react-native-gesture-handler';
import userimg from '../../assets/Path_28710-path.png';

const MyCustomRightComponent = ({navigation}) => {
    return <Icon name={'menu'} color={'#e02140'} onPress={ () => { navigation.openDrawer() } }/>
}

const MyCustomGoBack = ({navigation}) => {
    return <Icon name={'arrow-back'} color={'#e02140'} onPress={()=>{navigation.goBack()}} />
}



export default function Profile({navigation}){
    return(
        <>
            
            <Header 
                statusBarProps={{ barStyle: 'dark-content', backgroundColor:'#f1f1f1'}}
                leftComponent={<MyCustomGoBack navigation={navigation}/>}
                centerComponent={{ text: 'Profile', style: { color: '#e02140' } }}
                rightComponent={ <MyCustomRightComponent navigation={navigation}/>}
                containerStyle={{
                    backgroundColor: '#f1f1f1',
                    justifyContent: 'space-around',
                  }}
                
            />
            <View style={styles.mapContainer}>              
                <View style={styles.avatar}>
                    <Image source={userimg} style={styles.avatarImg} />
                    <View style={styles.iconCamera}>
                        <Icon name={'camera'} type={'feather'} size={20} color={'#666'}/>
                    </View>
                </View>

                <View style={styles.personalInformation}>
                    <Text style={styles.personalName}>Name, LastName</Text>
                    <Text style={styles.instructions}>Você precisa confirmar algumas informações para validarmos seu cadastro.</Text>
                </View>

                <View style={styles.groupBtnOptions}>
                    <View style={styles.btnOption}>
                        <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('PersonalInfo') } >
                            <Icon name={'person-pin-circle'} size={20} color={'#666'}/>
                            <Text>
                                Perfil Personal Shop
                            </Text>
                            <Icon name={'arrow-forward'} size={20} color={'#666'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnOption}>
                        <TouchableOpacity style={styles.touch} onPress={()=> navigation.navigate('TransportInfo') }>
                            <Icon name={'directions-car'} size={20} color={'#666'}/>
                            <Text>
                                Documentação do Veículo
                            </Text>
                            <Icon name={'arrow-forward'} size={20} color={'#666'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnOption}>
                        <TouchableOpacity style={styles.touch}>
                            <Icon name={'perm-phone-msg'} size={20} color={'#666'}/>
                            <Text>
                                Validar Telefone
                            </Text>
                            <Icon name={'arrow-forward'} size={20} color={'#666'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>             
        </>
    );
}