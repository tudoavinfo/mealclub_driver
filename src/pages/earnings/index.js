import React from 'react';
import {View, Text, Image} from 'react-native';
import { Header, Icon } from 'react-native-elements';

import { TouchableOpacity} from 'react-native-gesture-handler';


export default function Earnings(){
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
        </>
    );
}