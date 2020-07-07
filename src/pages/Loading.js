import React from 'react';
import { View, ActivityIndicator, StyleSheet, StatusBar} from 'react-native';

import {isSignedIn} from '../services/auth';

export default class Loading extends React.Component {
    
    componentDidMount() {
    
        isSignedIn().then(() => { 
           return this.props.navigation.navigate('App');
        }).catch((e)=>{
            return this.props.navigation.navigate('Auth');
        });
    
      }

      render() {
        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="#f8f9e7" barStyle="dark-content" />
            <ActivityIndicator size="large" color="#e0201f"/>
          </View>
        )
      }

}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#f8f9e7',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })