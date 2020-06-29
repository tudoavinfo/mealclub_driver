import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //all containers
    container:{
        backgroundColor: '#f7f0d6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    logoimg:{
        height:150,
        position: 'relative',
        marginTop: 25
    },
    containerEditPassword:{      
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 100,
        marginBottom: 5,
        position: 'relative'
    },
    containerSubmitEdit:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        position: 'relative',
        marginBottom: 25
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

    //childrens
    txtNewPassword:{
        color: '#fff',
        fontWeight: 'bold',
    },
    txtTitle:{
        textAlign: 'center',
        fontSize:25,
        color:'#e0201f',
        marginTop: 5,
    }
      
});
