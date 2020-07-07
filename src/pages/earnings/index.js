import React, { useState } from 'react';
import {View, Text, Image, Modal} from 'react-native';
import { Header, Icon } from 'react-native-elements';

import { TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import styles from './styles';


export default function Earnings(){
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    return(
        <>
            <Header 
                statusBarProps={{ barStyle: 'dark-content', backgroundColor:'#f1f1f1'}}
                leftComponent={{ icon: 'arrow-back', color: '#e02140' }}
                centerComponent={{ text: 'Meus Ganhos', style: { color: '#e02140' } }}
                
                containerStyle={{
                    backgroundColor: '#f1f1f1',
                    justifyContent: 'space-around',
                }}
                
            />
                <Modal visible={modalOpen} animated='slide'>  
                    
                        <View style={styles.modal1Container}>
                                <TouchableOpacity>
                                <Icon onPress={() => setModalOpen(false)} name={'x-circle'} type={'feather'} size={40} color={'#e02140'}/>
                            </TouchableOpacity>

                            <View style={{marginTop:30, marginBottom:30}}>
                                <Text style={styles.personalNameModalTitle}>Total de indicados</Text>                        
                            </View>
                            
                            <ScrollView>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Essa semana</Text>
                                    <Text style={styles.txtModal}>4</Text>
                                </View>
                                <View style={styles.defaultViewModal}>  
                                    <Text style={styles.personalNameModal}>Esse mês</Text>
                                    <Text style={styles.txtModal}>10</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Último mês</Text>
                                    <Text style={styles.txtModal}>12</Text>
                                </View>                      
                            </ScrollView> 
                              <View style={styles.defaultViewModal}>
                                    <Text style={[styles.personalNameModal,{fontWeight:'bold'}]}>Total</Text>
                                    <Text style={[styles.txtModal, {color:'green'}]}>26</Text>
                              </View>
                            <TouchableOpacity style={styles.btnModal}>
                                <Text style={styles.personalNameBtn} onPress={() => setModalOpen2(false)}>Ver Minha Rede</Text>
                                <Icon name={'arrow-right'} type={'feather'} size={30} color='#fff' onPress={() => setModalOpen2(false)}/>
                            </TouchableOpacity>                           
                        </View>
                                                                   
                </Modal>

                <Modal visible={modalOpen2} animated='slide'>   
                    <View style={styles.modal1Container}>
                            <TouchableOpacity>
                            <Icon onPress={() => setModalOpen2(false)} name={'x-circle'} type={'feather'} size={40} color={'#e02140'}/>
                        </TouchableOpacity>

                        <View style={{marginTop:30, marginBottom:30}}>
                            <Text style={styles.personalNameModalTitle}>Total de indicados</Text>                        
                        </View>

                            <View style={styles.defaultViewModal}>
                                <Text style={[styles.txtModal1, {fontSize: 20, color:'#808080', opacity:1}]}>Nível</Text>
                                <Text style={[styles.txtModal1, {fontSize: 20, color:'#808080', opacity:1}]}>Total</Text>
                            </View>

                            <ScrollView>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 1</Text>
                                    <Text style={styles.txtModal}>2</Text>
                                </View>

                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 2</Text>
                                    <Text style={styles.txtModal}>4</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 3</Text>
                                    <Text style={styles.txtModal}>10</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 4</Text>
                                    <Text style={styles.txtModal}>12</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 1</Text>
                                    <Text style={styles.txtModal}>2</Text>
                                </View>

                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 2</Text>
                                    <Text style={styles.txtModal}>4</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 3</Text>
                                    <Text style={styles.txtModal}>10</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 4</Text>
                                    <Text style={styles.txtModal}>12</Text>
                                </View> 
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 1</Text>
                                    <Text style={styles.txtModal}>2</Text>
                                </View>

                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 2</Text>
                                    <Text style={styles.txtModal}>4</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 3</Text>
                                    <Text style={styles.txtModal}>10</Text>
                                </View>
                                <View style={styles.defaultViewModal}>
                                    <Text style={styles.personalNameModal}>Nível 4</Text>
                                    <Text style={styles.txtModal}>12</Text>
                                </View>                                                             
                        </ScrollView>   
                        <View style={styles.defaultViewModal}>
                            <Text style={[styles.personalNameModal,{fontWeight:'bold'}]}>Total</Text>
                            <Text style={[styles.txtModal, {color:'green'}]}>26</Text>
                        </View>

                        
                            <TouchableOpacity style={styles.btnModal}>
                                <Text style={styles.personalNameBtn} onPress={() => setModalOpen2(false)}>Ver Minha Rede</Text>
                                <Icon name={'arrow-right'} type={'feather'} size={30} color='#fff' onPress={() => setModalOpen2(false)}/>
                            </TouchableOpacity>    
                             
                    </View>                           
                </Modal>
            
                <View style={styles.mapContainer}>
                    <View style={styles.listContainer}>
                        <ScrollView>
                        <View style={styles.frstContainer}>
                            <Text>http://localhost:3333/exemplolinkdeindicacao</Text>
                            <View style={{right:70}}>
                                <TouchableOpacity>
                                    <Icon name={'copy'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>                                
                            </View>
                        </View>

                        <View style={styles.defaultView}>
                            <View  style={styles.scndContainer}>
                                <Text>Consumo Mensal</Text>
                                <TouchableOpacity>
                                    <Icon name={'shopping-cart'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                            <View  style={styles.scndContainer}>
                                <Text>Previsão de Lucros</Text>
                                <TouchableOpacity>
                                    <Icon name={'dollar-sign'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.defaultView}>
                            <View  style={styles.scndContainer}>
                                <Text>Indicados diretos</Text>
                                <TouchableOpacity>
                                    <Icon name={'user-plus'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                            <View  style={styles.scndContainer}>
                                <Text>Indicados indiretos</Text>
                                <TouchableOpacity>
                                    <Icon name={'user-plus'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>                                
                            </View>
                        </View>

                        <View style={styles.defaultView}>
                            <View  style={styles.scndContainer}>
                                <Text>Patrocinador</Text>
                                <TouchableOpacity>
                                    <Icon name={'pie-chart'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                            <View  style={styles.scndContainer}>
                                <Text>Plano</Text>
                                <TouchableOpacity>
                                    <Icon name={'pie-chart'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>                                
                            </View>
                        </View>

                        <View style={styles.defaultView}>
                            <View  style={styles.scndContainer}>
                                <Text>Indicados Diretos</Text>
                                <TouchableOpacity  onPress={() => setModalOpen(true)}>
                                    <Icon name={'users'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>
                            </View>
                            <View  style={styles.scndContainer}>
                                <Text>Indicados Indiretos</Text>
                                <TouchableOpacity onPress={() => setModalOpen2(true)}>
                                    <Icon name={'users'} type={'feather'} size={40} color={'#666'}/>
                                </TouchableOpacity>                                
                            </View>
                        </View>                                               

                        </ScrollView>                        
                    </View>
                </View>
            
        </>
    );
}
