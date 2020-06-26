import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    //all containers
    container:{
        backgroundColor: '#f7f0d6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapContainer:{
        flex: 1,
        backgroundColor: '#f1f1f1',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    functionsContainer:{
        flex: 1.5,
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 100,
        opacity: 0.3
    },
    btnContainer:{
        flex:0.5,
        backgroundColor: 'transparent',
        marginTop: 500,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    }, 
    iconsContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    txtIconsContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },

    //childrens   
    btnStart:{
        backgroundColor: '#e02140',
        borderRadius: 100,
        padding: 20,
        paddingLeft: 125,
        paddingRight: 125,
    },
});
