import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //all containers
    scrollContainer:{
        backgroundColor: '#f8f9e7',
        flex: 1,
    },
    container:{
        backgroundColor: '#f8f9e7',
        flex: 1,
        paddingHorizontal:24,
        paddingVertical: 10,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },    
    contentContainer:{
        flex: 1,
    },

    //childrens
    allTxtInput:{
        borderRadius: 50,
        backgroundColor: "#f1f1f1",
        marginTop: 10,
    },
    txtDescription:{ 
        textAlign: 'center',
        fontSize:25,
        color:'#e0201f'
    },   
    logoimg:{
        height:52,
        width: 60,
        marginBottom: 50,
    }
});
