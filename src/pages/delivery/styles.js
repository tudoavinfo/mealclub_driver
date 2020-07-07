import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    mapContainer:{
        ...StyleSheet.absoluteFillObject,
        flex:1,
        backgroundColor: '#f1f1f1',
        justifyContent:'space-around',
        position:'relative',      
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    btnContainer:{
        backgroundColor: 'transparent',
        position:'absolute',
        bottom:50,
        width:'90%',
        left:'5%',
    },

    //childrens   
    btnStart:{
        backgroundColor: '#e02140',
        borderRadius: 100,
        padding: 20,
        alignItems:'center',
        borderColor:'red',
        borderLeftWidth:4,
        borderRightWidth:4,
    },
});
