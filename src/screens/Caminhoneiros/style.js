import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        
        backgroundColor: '#38194D',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        height: 80,
    },

    logo:{
        width: 160,
        height: 40,
        alignSelf: "center",
        marginTop: 20,
    },

    containerHeader:{
        flexDirection: 'row',
       
    },

    nephelium:{
        width: 220,
        height: 50,
        alignSelf: "center",
        marginTop: 15,
        marginLeft: 100
    
    },

    Banner:{
        height: 80,
        backgroundColor: '#5C3776'
    },

    titulo:{
        fontSize: 17,
        color: 'black',
        fontFamily: fonts.text,
    },

    txt2:{
        marginLeft: 15,
    },

    inv:{
        backgroundColor: '#5C3776',
        height: 120,
        width: 2,
        marginLeft: 15,
        
    },

  
    neph2:{
        width: 50,
        height: 50,    
        marginTop: 14,
        marginLeft:180
    },

    volante:{
        width: 34,
        height: 34,    
        marginTop: 24,
        marginLeft:24
    },


    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30,
        
    },

    lenghtText:{
        color: '#000000', 
        fontSize: 30, 
        fontFamily: fonts.text,
        paddingLeft:80
    },

    caminhoneiroText:{
        color: '#FFFFFF', 
        fontSize: 19, 
        fontFamily: fonts.text,
        paddingTop: 25,
        marginLeft: 10
        
    },

    caminhao:{
        width: 120,
        marginLeft: 20,
        marginTop: 10
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox:{
        width: '85%',
        alignSelf: "center",
        flexDirection: 'column',
        marginBottom: 25,
    },

    box:{
        backgroundColor: '#D9D9D9',
        flexDirection: 'column',
        padding: 15,
        marginTop:20,
        borderRadius: 20,
        shadowOpacity: 0.1,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        
    },


    calculo:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#571089',
        marginTop: 15,
       
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20
      },
  
      calculotxt:{
        color: 'white',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 15
      },

    box2:{
        backgroundColor:'#D24366',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
    },

    box3:{
        backgroundColor: '#D24366',
        marginTop: 25,
        height: 50,
        borderRadius: 30,
        
    },

    box10:{
        paddingLeft: 60
    },

    boxx:{
        paddingTop: 20,
        paddingBottom: 30,
    },

    rText:{
        fontSize: 20,
        color: '#000000',
        fontFamily: fonts.text,
    },

    sText:{
        fontSize: 20,
        color: 'black',
        fontFamily: fonts.text,
        marginRight:200,
    },

    txt:{
        color:'black',
        fontSize: 18,
        paddingLeft: '10%',
        paddingTop: 10,
        
    },

    textFooter:{
        borderTopColor: '#ccc',
        paddingTop: 15, 
        paddingBottom: 10, 
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#B01A3E',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        
    },

    

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    },

    lupa:{
        width: 20,
        height: 20,    
        marginTop: 25,
        marginLeft:300,
    },
})