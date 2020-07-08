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


    //modal
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
        backgroundColor:'#f1f1f1'
    },
    defaultViewModal:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginBottom: 16,
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
        justifyContent:'center', 
        borderRadius: 10, 
        borderWidth: 1.5, 
        borderStyle:'dashed', 
        borderColor:'#fff',
        alignItems:'center', 
        marginTop:30
    },




    titlePictureModal:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center', 
        borderRadius: 400/2, 
        borderWidth:1, 
        borderStyle:'dashed', 
        borderColor:'#808080',
        width: 100, 
        height: 100, 
        marginBottom:30
    },
    modalFrstPicture:{
        width:'100%', 
        backgroundColor:'#000', 
        padding:80, 
        paddingBottom:150, 
        backgroundColor: '#f7f0d6', 
        opacity:0.2, 
        borderWidth:1, 
        borderStyle:'dashed', 
        borderRadius: 1, 
        borderColor:'#000'
    },
    modalIconFrstPicture:{
        alignSelf:'center', 
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius: 400/2, 
        borderWidth:1, 
        borderStyle:'dashed', 
        borderColor:'#808080',
        width: 120, 
        height: 120, 
        marginBottom:30
    },
    defaultgroupIcons:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginTop:2
    },
    defaulTxtModal:{
        marginTop:16
    },
    transportModal:{
        flexDirection:'row', 
        opacity:0.8, 
        alignItems:'center', 
        justifyContent:'space-between', 
        width:'100%', 
        padding:5, 
        height:80, 
        borderWidth:1, 
        borderStyle:'dashed',
        borderRadius: 1,
        borderColor:'#000', 
        marginTop:2
    },
    numberAndFuel:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginTop:16
    },
    groupIconsTwo:{
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    miniContainerDefault:{
        flexDirection:'row', 
        opacity:0.8, 
        alignItems:'center', 
        justifyContent:'space-between', 
        padding:10, 
        height:80, 
        borderWidth:1, 
        borderStyle:'dashed', 
        borderRadius: 1, 
        borderColor:'#000', 
        marginTop:2
    }
});

