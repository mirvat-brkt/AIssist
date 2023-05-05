import { StyleSheet } from 'react-native';
import { colors } from '../../constants/Palette';

const styles = StyleSheet.create({
    mainView:{
        width:'100%',
        backgroundColor:'#F2F4F4',
    },
    intro:{
        marginTop:20,
      },
    activitiesTitle:{
        fontWeight:'bold',
        fontSize:40,
        marginLeft:10,
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    activitiesText:{
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:10,
        marginTop:10,
        alignSelf:'center',
    },
    mainFormActivities:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        borderStyle:'solid',
        borderWidth:2,
        borderLeftColor:'#F08080',
        borderRightColor:"#fff",
        borderBottomColor:'#fff',
        borderTopColor:'#fff',
        borderLeftWidth:5,
        backgroundColor:'#fff',
        marginLeft:'5%',
        marginBottom:20,
        marginRight:'5%',
        width:'90%',
        alignSelf:'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius:10,
        paddingTop:10,
        paddingBottom:10
    },
    formActivities:{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        marginBottom:10,
        marginLeft:25
    },
    inputLabel1:{
        color:'black',
        fontWeight:'600'
    },
    button1: {
        backgroundColor: colors.primary_3,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        width: 135,
        marginBottom: 10,
        marginTop:10,
        marginLeft:25,
        alignSelf:'center'
      },
    buttonText: {
        color: colors.white,
        fontSize: 18,
      },
    input1: {
        backgroundColor: colors.white,
        borderWidth:0.4,
        borderColor:'#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        width:270
      },
});

export default styles;