import {StyleSheet, Dimensions, Platform} from 'react-native';
export default StyleSheet.create({
    mapContainer:{
        flex:1,                        
        justifyContent:'flex-start',
        position:'relative',
    },
    listContainer:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
    },
    frstContainer:{
        backgroundColor:'#cccccc',
        opacity:0.5,
        borderRadius:15,
        borderStyle:'dashed',
        borderWidth:2,
        borderColor:'#c3c3c3',
        padding:70,
        marginBottom:15,
        alignItems:'center',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    scndContainer:{
        backgroundColor:'#cccccc',
        opacity:0.5,
        borderRadius:15,
        borderStyle:'dashed',
        borderWidth:2,
        borderColor:'#c3c3c3',
        width:'50%',
        height: 110,
        alignItems:'center',
        justifyContent:'center'
    },
    defaultView:{
        flexDirection:'row', justifyContent:'space-between', marginBottom:15
    },
    personalNameModal:{
        fontFamily:Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontSize:15,
        textAlign:'justify',
        marginBottom:10,
    },
    txtModal:{
        fontSize:15, 
        color:'blue',
        fontWeight:'bold',
        opacity: 0.5
    },
    modal1Container:{
        flex:1, 
        paddingVertical:20, 
        paddingHorizontal:20,
        backgroundColor:'#cccccc'
    },
    defaultViewModal:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginBottom: 16
    },
    personalNameModalTitle:{
        fontFamily:Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontSize:15,
        textAlign:'justify',
        marginBottom:10,
        alignSelf:'center', 
        fontSize: 20
    },
    personalNameBtn:{
        fontFamily:Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontSize:15,
        textAlign:'justify',
        marginBottom:10,
        alignSelf:'center', 
        fontSize: 20,
        color:'#fff'
    },
    btnModal:{
        backgroundColor: '#e02140',
        padding:20,flexDirection:'row', 
        justifyContent:'space-between', 
        borderRadius: 10, 
        borderWidth: 1.5, 
        borderStyle:'dashed', 
        borderColor:'#fff'
    }
})
