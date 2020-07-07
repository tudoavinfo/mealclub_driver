import React, { useEffect, useState, useRef } from 'react';
import {View, Text, Alert, ActivityIndicator, PermissionsAndroid} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';




const Delivery = (props, ref) => {

    const [ hasLocationPermission, setHasLocationPermission ] = useState(false);
    const [position, setPosition] = useState({
        latitude: -23.69389,
        longitude: -46.565,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });

    const requestLocationPermission = async () => {
        try {          
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );

            if (granted === PermissionsAndroid.RESULTS.GRANTED){
                setHasLocationPermission(true);
            }else{
                setHasLocationPermission(false);
            }
        } catch (err) {
          console.warn(err);
        }
    };

    const mapRef = useRef();



    useEffect(() => {

        requestLocationPermission();

        if (hasLocationPermission) 
        {
            
            Geolocation.getCurrentPosition(
                (pos) => {  
                    setPosition({
                        ...position,
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    });  
                },
                (error) => {Alert.alert('Erro', 'Erro ao carregar sua localização. Ative o uso do seu GPS')},
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
                
            )  


            
        }
        
    },[hasLocationPermission])

   

    return(
        <>
            
            <View style={styles.mapContainer}>

                { hasLocationPermission  ?
                    <MapView
                        ref={mapRef}
                        provider={PROVIDER_GOOGLE} 
                        style={styles.map}
                        loadingEnabled={true}
                        region={position}   
                    >
                        <MapView.Marker
                            coordinate={position}
                            title={"Localização"}
                            description={"Sua Localização atual"}
                        />
                    </MapView>

                :
                    <ActivityIndicator size="large" color="#e02140" />
                }
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnStart}>
                        <Text style={[{color: '#fff', fontWeight: 'bold'}]}>Start Now</Text>
                    </TouchableOpacity>
                </View>

            </View>             
        </>
    );
}

export default Delivery;
