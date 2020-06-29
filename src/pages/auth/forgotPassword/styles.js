import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //all containers
    container:{
        backgroundColor: '#f7f0d6',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },
    containerImg:{
        paddingTop: 100,
    },
    logoimg:{
        height:150,
        position: 'relative',
    },
    containerEditPassword:{      
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        position: 'relative',
        paddingTop: 10,
    },
    containerSubmitEdit:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        position: 'relative',
        paddingBottom: 80,
    },

    //childrens
    txtInputEmail:{
        marginBottom: -80,
    },
    featherIcon:{
        marginBottom: -80,
    },
    txtNewPassword:{
        color: '#fff',
        fontWeight: 'bold',
    },
    txtTitle:{
        textAlign: 'center',
        fontSize:25,
        color:'#e0201f',
        paddingBottom: -100,
    },
    btnEditPassword:{
        backgroundColor: '#e0201f',
        height: 60,
        alignItems: 'center',  
        justifyContent: 'center',
        borderRadius: 50,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
    },
      
});
