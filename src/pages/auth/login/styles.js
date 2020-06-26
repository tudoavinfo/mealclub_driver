import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //all containers
    container:{
        backgroundColor: '#f8f9e7',
        flex: 1,
        justifyContent: 'center',
    },
    containerLogo:{
        justifyContent: 'center',
        margin: 32,
        paddingTop:20,
        alignItems:'center',
    },
    logoimg:{
        height:150,
    },
    containerDescription:{
        alignItems: 'center',
        justifyContent: 'center',
        color:'#e0201f',
    },   
    containerInputs:{
        width:'90%',
        flexDirection:'column',
        justifyContent:'center',
        position:'relative',
        left:'5%', 
        marginTop:20,
        marginBottom:20,
    },
    containerCreateAccount:{
        flexDirection: 'row',
        justifyContent:'center',
    },
    containerUsername:{      
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },    
    containerPassword:{      
        flexDirection: 'row',
    },

    //Childrens 
    featherIcons:{
        flex:1,
    },
    txtDescription:{ 
        textAlign: 'center',
        fontSize:25,
        color:'#e0201f'
    },   
    txtInputUsername:{      
        marginBottom: 15,        
        fontSize: 18,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20, 
        height: 60,
        flex:10,
        color:'#000000',
    },
    txtInputPassword:{
        
        marginBottom: 15,       
        fontSize: 17,
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20, 
        height: 60,
        borderColor: '#fff',
        flex:10,
        color:'#000000',
    },
    btnLogin:{
        backgroundColor: '#e0201f',
        height: 60,
        alignItems: 'center',  
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txtLogin:{
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: '40%'
    },
    btnForgotPassword:{
        marginTop: 10,
        alignItems:'center',
    },
    txtSignUp:{
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});