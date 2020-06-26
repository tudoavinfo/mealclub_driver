import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard(){
    return(
        <View style={styles.container}>
            <View style={styles.mapContainer}>
                <Text style={[{color: '#FFB700', fontWeight: 'bold'}]}>Map</Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnStart}>
                        <Text style={[{color: '#fff', fontWeight: 'bold'}]}>Start Now</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.functionsContainer}> 
                    <View style={styles.iconsContainer}>
                        <Icon style={[{paddingLeft: 15}]} size={25} name={"dollar-sign"} color="#1C1C1C"/>                    
                        <Icon size={25} name={"calendar"} color="#1C1C1C"/>                     
                        <Icon size={25} name={"user"} color="#1C1C1C"/>                       
                        <Icon size={25} name={"bell"} color="#1C1C1C"/>                    
                        <Icon style={[{paddingRight: 15}]} size={25} name={"trending-up"} color="#1C1C1C"/>          
                    </View>
                    
                    <View style={styles.txtIconsContainer}>
                        <Text style={[{paddingLeft: 15}]}>ex</Text>    
                        <Text>ex</Text>
                        <Text>ex</Text>
                        <Text>ex</Text>
                        <Text style={[{paddingRight: 15}]}>ex</Text>
                    </View>                             
                        
                </View>              
                
            </View>
           
        </View>
    );
}
