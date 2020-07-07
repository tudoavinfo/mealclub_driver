import React from 'react';
import {View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';

import styles from './styles';

import Icon2 from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyCustomRightComponent = ({navigation}) => {
    return <Icon name={'menu'} color={'#e02140'} onPress={ () => { navigation.openDrawer() } }/>
}

const MyCustomGoBack = ({navigation}) => {
    return <Icon name={'arrow-back'} color={'#e02140'} onPress={()=>{navigation.goBack()}} />
}

function Transport({navigation}){

        return(
            <>
                <Header 
                    statusBarProps={{ barStyle: 'dark-content', backgroundColor:'#f1f1f1'}}
                    leftComponent={<MyCustomGoBack navigation={navigation} />}
                    centerComponent={{ text: 'Profile', style: { color: '#e02140' } }}
                    rightComponent={ <MyCustomRightComponent navigation={navigation}/>}
                    containerStyle={{
                        backgroundColor: '#f1f1f1',
                        justifyContent: 'space-around',
                    }}            
                />

                <View style={styles.mapContainer}>  
                        
                        <View style={styles.avatar}>
                            <View style={styles.containerSubCirclePicture}>
                                <Icon2 name={'car'} size={90} color='#808080'/>    
                            </View>                                      
                        </View>                        
                        <View style={styles.personalInformation}>
                            <Text style={styles.personalName}>Transport Registration</Text>
                            <Text style={styles.instructions}>Enter your new password and then click on the</Text>
                        </View>


                        <View style={styles.groupBtnOptions}>
                            <View style={styles.btnOption}>
                                <TouchableOpacity style={styles.touch}>
                                    <Icon2 name={'bicycle'} size={30} color='#666'/>                            
                                    <Text style={{color: '#808080', fontSize: 15}}>Bike</Text>
                                    <Text>                                  </Text>                            
                                    <Icon name={'arrow-forward'} size={20} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnOption}>
                                <TouchableOpacity style={styles.touch}>
                                    <Icon2 name={'motorcycle'} size={30} color='#666'/>                               
                                    <Text style={{color: '#808080', fontSize: 15, paddingRight: 20}}>Motorcycle</Text>
                                    <Text>                   </Text>
                                    <Icon name={'arrow-forward'} size={20} color={'#666'}/>                          
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnOption}>
                                <TouchableOpacity style={styles.touch}>
                                    <Icon2 name={'car'} size={30} color='#666'/>                               
                                    <Text style={{color: '#808080', fontSize: 15, paddingRight: 20}}>Car</Text>
                                    <Text>                   </Text>
                                    <Icon name={'arrow-forward'} size={20} color={'#666'}/>                          
                                </TouchableOpacity>
                            </View>

                        </View>           
                </View>              
          
            </>   
            
        );
}

export default Transport;