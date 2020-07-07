import {StyleSheet, Dimensions, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const font = Platform.select({
    ios: { fontFamily: 'Arial', }, 
    android: { fontFamily: 'Roboto' }
})

export default StyleSheet.create({

    mapContainer:{
        flex:1,
        backgroundColor: '#f1f1f1',
        justifyContent:'flex-start',
        position:'relative',      
    },
    avatar:{
        height:120,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        marginTop:10,
        marginBottom:5,
    },
    avatarImg:{
        borderRadius:110,
        borderWidth:0.50,
        borderColor:'#cecece',
        width:110,
        height:110,
        resizeMode:'cover',
    },
    iconCamera:{
        width:32,
        height:32,
        borderRadius:32,
        borderColor:'#666',
        borderStyle:'dashed',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:10,
        left: windowWidth / 2 + 23,
        backgroundColor:'#f1f1f1'
    },
    personalInformation:{
        padding:10,
    },
    personalName:{
        fontFamily:Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontSize:20,
        textAlign:'center',
        marginBottom:10,
    },
    instructions:{
        fontFamily:Platform.OS === 'android' ? 'sans-serif-light' : 'Helvetica',
        fontSize:13,
        textAlign:'center',
    },
    groupBtnOptions:{

        flex:1,
        justifyContent:'space-around',
        paddingLeft:10,
        paddingRight:10,
        
    },
    btnOption:{
        height:70,
        backgroundColor:'#cccccc',
        opacity:0.5,
        borderRadius:15,
        borderStyle:'dashed',
        borderWidth:2,
        borderColor:'#c3c3c3',
        justifyContent:'center',

    },
    touch:{
        flexDirection:'row',
        height:50,
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },
});
