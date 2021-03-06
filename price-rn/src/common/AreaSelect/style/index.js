import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:10,
        backgroundColor:'#FFF'
    },
    areaType:{
        position:'absolute',
        right:0,
        top:0,
        bottom:0,
        justifyContent:'space-between'
    },
    areaTypeItem:{
        color:'#0088FF',
        alignItems:'center'
    },
    cityHeader:{
        paddingLeft:10
    },
    hot:{

    },
    hotCities:{
        paddingRight:30,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    hotCity:{
        width:80,
        marginBottom:5,
        backgroundColor:'#FFF',
        borderColor:'#DDD',
        borderWidth:1,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    cityItem:{
        height:36,
        paddingLeft:10,
        justifyContent:'center',
        backgroundColor:'#FFF',
        borderBottomWidth:1,
        borderBottomColor:'#DDD'
    },
    cityItemText:{
        color:'#515151'
    }
});