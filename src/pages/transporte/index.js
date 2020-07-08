import React, { useState } from 'react';
import {View, Text, Modal, ScrollView, TextInput} from 'react-native';
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

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);

    function alertInModal(){        
        alert('Alterações salvas com sucesso! 😉');
    }
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
                
                {/* Modal da Bike */}
                <Modal visible={modalOpen} animated='slide'>  
                    
                    <View style={styles.modal1Container}>
                        <TouchableOpacity>
                            <Icon onPress={() => setModalOpen(false)} name={'x-circle'} type={'feather'} size={40} color={'#e02140'}/>
                        </TouchableOpacity>

                        <View style={{marginTop:30, marginBottom:0}}>
                            <Text style={styles.personalNameModalTitle}>Bike</Text>                        
                        </View>
                        
                        <View style={styles.titlePictureModal}>   
                            <Icon2 name={'bicycle'} size={45} color={'#666'} onPress={() => {}} />    
                        </View>                       
                        <ScrollView>
                            <View>
                                <View style={styles.modalFrstPicture}>
                                    <View style={styles.modalIconFrstPicture}>   
                                        <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                    </View>
                                </View>
                                <View style={styles.defaultgroupIcons}>
                                    <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                    <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                </View> 

                                <Text style={styles.defaulTxtModal}>Transport Type</Text>
                                <View style={styles.transportModal}>
                                    <Text>Specialized</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>

                                <Text style={styles.defaulTxtModal}>Transport Model</Text>
                                <View style={styles.transportModal}>
                                    <Text>City Comfort</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>
                                
                                <Text style={styles.defaulTxtModal}>Transport Color</Text>
                                <View style={styles.transportModal}>
                                    <Text>White</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>

                                <Text style={styles.defaulTxtModal}>Date of manufacture</Text>
                                <View style={styles.transportModal}>
                                    <Icon name={'calendar'} type={'feather'} size={20} color='#e0201f'/>
                                </View>
                            </View>                            
                        </ScrollView> 

                        <TouchableOpacity style={styles.btnModal}>
                            <Text style={styles.personalNameBtn} onPress={alertInModal}>Salvar</Text>
                            <Icon name={'save'} type={'feather'} size={30} color='#fff' onPress={alertInModal}/>
                        </TouchableOpacity>
                    </View>
                                                               
                </Modal>
                
                {/* Modal da Motocicleta*/}
                <Modal visible={modalOpen2} animated='slide'>  
                    
                    <View style={styles.modal1Container}>
                        <TouchableOpacity>
                            <Icon onPress={() => setModalOpen2(false)} name={'x-circle'} type={'feather'} size={40} color={'#e02140'}/>
                        </TouchableOpacity>

                        <View style={{marginTop:30, marginBottom:0}}>
                            <Text style={styles.personalNameModalTitle}>Motorcycle</Text>                        
                        </View>
                        
                        <View style={styles.titlePictureModal}>   
                            <Icon2 name={'motorcycle'} size={45} color={'#666'} onPress={() => {}} />    
                        </View>                       
                        <ScrollView>
                        <View>
                                <View style={styles.modalFrstPicture}>
                                    <View style={styles.modalIconFrstPicture}>   
                                        <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                    </View>
                                </View>
                                <View style={styles.defaultgroupIcons}>
                                    <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                    <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                </View> 

                                <Text style={styles.defaulTxtModal}>Transport Type</Text>
                                <View style={styles.transportModal}>
                                    <Text>Vespa</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>

                                <Text style={styles.defaulTxtModal}>Transport Model</Text>
                                <View style={styles.transportModal}>
                                    <Text>Sprint 150</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>
                                
                                <Text style={styles.defaulTxtModal}>Transport Color</Text>
                                <View style={styles.transportModal}>
                                    <Text>Yellow</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>

                                <View style={styles.numberAndFuel}>
                                    <View>
                                        <View>
                                            <Text>Registration Number</Text>
                                        </View>
                                        <View style={{flexDirection:'row', opacity:0.8, alignItems:'center', justifyContent:'space-between', padding:10, height:80, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                            <Text>GL-278-LG</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View>
                                            <Text>Fuel Type</Text>
                                        </View>
                                        <View style={{width:142 ,flexDirection:'row', opacity:0.8, alignItems:'center', justifyContent:'space-between', padding:10, height:80, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                            <Text>Petrol</Text>
                                            <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                        </View>
                                    </View>  
                                </View> 
                                
                                <View style={styles.numberAndFuel}>
                                    <View>
                                        <View>
                                            <Text>Date of manufacture</Text>
                                        </View>
                                        <View style={styles.miniContainerDefault}>
                                            <Icon name={'calendar'} type={'feather'} size={20} color='#e0201f'/>
                                        </View>
                                    </View>

                                    <View>
                                        <View>
                                            <Text>Date of manufacture</Text>
                                        </View>
                                        <View style={styles.miniContainerDefault}>
                                            <Icon name={'calendar'} type={'feather'} size={20} color='#e0201f'/>
                                        </View>
                                    </View>  
                                </View>  
                                
                                <View style={{marginTop:16}}>
                                    <View style={styles.groupIconsTwo}>
                                        <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                        <Text>FRONT</Text>
                                        <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                    </View>
                                    <View style={{width:'100%', backgroundColor:'#000', padding:80, paddingBottom:150, backgroundColor: '#f7f0d6', opacity:0.2, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                        <View style={{alignSelf:'center', alignItems:'center', justifyContent:'center', borderRadius: 400/2, borderWidth:1, borderStyle:'dashed', borderColor:'#808080',width: 120, height: 120, marginBottom:30}}>   
                                            <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop:16}}>
                                    <View style={styles.groupIconsTwo}>
                                        <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                        <Text>BACK</Text>
                                        <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                    </View>
                                    <View style={{width:'100%', backgroundColor:'#000', padding:80, paddingBottom:150, backgroundColor: '#f7f0d6', opacity:0.2, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                        <View style={{alignSelf:'center', alignItems:'center', justifyContent:'center', borderRadius: 400/2, borderWidth:1, borderStyle:'dashed', borderColor:'#808080',width: 120, height: 120, marginBottom:30}}>   
                                            <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                        </View>
                                    </View>
                                </View>                                                                                               
                            </View>                           
                        </ScrollView> 

                        <TouchableOpacity style={styles.btnModal}>
                            <Text style={styles.personalNameBtn} onPress={alertInModal}>Salvar</Text>
                            <Icon name={'save'} type={'feather'} size={30} color='#fff' onPress={alertInModal}/>
                        </TouchableOpacity>
                    </View>
                                                               
                </Modal>

                {/* Modal do Carro */}
                <Modal visible={modalOpen3} animated='slide'>  
                    
                    <View style={styles.modal1Container}>
                        <TouchableOpacity>
                            <Icon onPress={() => setModalOpen3(false)} name={'x-circle'} type={'feather'} size={40} color={'#e02140'}/>
                        </TouchableOpacity>

                        <View style={{marginTop:30, marginBottom:0}}>
                            <Text style={styles.personalNameModalTitle}>Carro</Text>                        
                        </View>
                        
                        <View style={styles.titlePictureModal}>   
                            <Icon2 name={'car'} size={45} color={'#666'} onPress={() => {}} />    
                        </View>                       
                        <ScrollView>
                            <View>
                                <View style={styles.modalFrstPicture}>
                                    <View style={{alignSelf:'center', alignItems:'center', justifyContent:'center', borderRadius: 400/2, borderWidth:1, borderStyle:'dashed', borderColor:'#808080',width: 120, height: 120, marginBottom:30}}>   
                                        <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                    </View>
                                </View>
                                <View style={styles.defaultgroupIcons}>
                                    <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                    <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                </View> 

                                <Text style={styles.defaulTxtModal}>Transport Type</Text>
                                <View style={styles.transportModal}>
                                    <Text>Opel</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>

                                <Text style={styles.defaulTxtModal}>Transport Model</Text>
                                <View style={styles.transportModal}>
                                    <Text>Vectra</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>
                                
                                <Text style={styles.defaulTxtModal}>Transport Color</Text>
                                <View style={styles.transportModal}>
                                    <Text>Red</Text>
                                    <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                </View>

                                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:16}}>
                                    <View>
                                        <View>
                                            <Text>Registration Number</Text>
                                        </View>
                                        <View style={{flexDirection:'row', opacity:0.8, alignItems:'center', justifyContent:'space-between', padding:10, height:80, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                            <Text>GL-278-LG</Text>
                                        </View>
                                    </View>

                                    <View>
                                        <View>
                                            <Text>Fuel Type</Text>
                                        </View>
                                        <View style={{width:142 ,flexDirection:'row', opacity:0.8, alignItems:'center', justifyContent:'space-between', padding:10, height:80, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                            <Text>Petrol</Text>
                                            <Icon name={'arrow-down'} type={'feather'} size={20} color='#e0201f'/>
                                        </View>
                                    </View>  
                                </View> 
                                
                                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:16}}>
                                    <View>
                                        <View>
                                            <Text>Date of manufacture</Text>
                                        </View>
                                        <View style={{flexDirection:'row', opacity:0.8, alignItems:'center', justifyContent:'space-between', padding:10, height:80, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                            <Icon name={'calendar'} type={'feather'} size={20} color='#e0201f'/>
                                        </View>
                                    </View>

                                    <View>
                                        <View>
                                            <Text>Date of manufacture</Text>
                                        </View>
                                        <View style={{flexDirection:'row', opacity:0.8, alignItems:'center', justifyContent:'space-between', padding:10, height:80, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                            <Icon name={'calendar'} type={'feather'} size={20} color='#e0201f'/>
                                        </View>
                                    </View>  
                                </View>  
                                
                                <View style={{marginTop:16}}>
                                    <View style={styles.groupIconsTwo}>
                                        <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                        <Text>FRONT</Text>
                                        <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                    </View>
                                    <View style={{width:'100%', backgroundColor:'#000', padding:80, paddingBottom:150, backgroundColor: '#f7f0d6', opacity:0.2, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                        <View style={{alignSelf:'center', alignItems:'center', justifyContent:'center', borderRadius: 400/2, borderWidth:1, borderStyle:'dashed', borderColor:'#808080',width: 120, height: 120, marginBottom:30}}>   
                                            <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop:16}}>
                                    <View style={styles.groupIconsTwo}>
                                        <Icon name={'download'} type={'feather'} size={20} color='#e0201f'/>                            
                                        <Text>BACK</Text>
                                        <Icon name={'trash-2'} type={'feather'} size={20} color='#e0201f'/>
                                    </View>
                                    <View style={{width:'100%', backgroundColor:'#000', padding:80, paddingBottom:150, backgroundColor: '#f7f0d6', opacity:0.2, borderWidth:1, borderStyle:'dashed', borderRadius: 1, borderColor:'#000', marginTop:2}}>
                                        <View style={{alignSelf:'center', alignItems:'center', justifyContent:'center', borderRadius: 400/2, borderWidth:1, borderStyle:'dashed', borderColor:'#808080',width: 120, height: 120, marginBottom:30}}>   
                                            <Icon name={'camera'} type={'feather'} size={60} color={'#666'} onPress={() => {}} />    
                                        </View>
                                    </View>
                                </View>                                                                                               
                            </View>                            
                        </ScrollView> 

                        <TouchableOpacity style={styles.btnModal}>
                            <Text style={styles.personalNameBtn} onPress={alertInModal}>Salvar</Text>
                            <Icon name={'save'} type={'feather'} size={30} color='#fff' onPress={alertInModal}/>
                        </TouchableOpacity>
                    </View>
                                                               
                </Modal>

                

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
                                <TouchableOpacity style={styles.touch} onPress={()=> setModalOpen(true)}>
                                    <Icon2 name={'bicycle'} size={30} color='#666'/>                            
                                    <Text style={{color: '#808080', fontSize: 15}}>Bike</Text>
                                    <Text>                                  </Text>                            
                                    <Icon name={'arrow-forward'} size={20} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnOption}>
                                <TouchableOpacity style={styles.touch} onPress={() => setModalOpen2(true)}>
                                    <Icon2 name={'motorcycle'} size={30} color='#666'/>                               
                                    <Text style={{color: '#808080', fontSize: 15, paddingRight: 20}}>Motorcycle</Text>
                                    <Text>                   </Text>
                                    <Icon name={'arrow-forward'} size={20} color={'#666'}/>                          
                                </TouchableOpacity>
                            </View>
                            <View style={styles.btnOption}>
                                <TouchableOpacity style={styles.touch} onPress={()=>setModalOpen3(true)}>
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
