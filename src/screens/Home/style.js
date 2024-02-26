import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    Banner:{
        height: 70,
        backgroundColor: '#5C3776'
    },

    caminhoneiroText:{
        color: '#FFFFFF', 
        fontSize: 23, 
        fontFamily: fonts.text,
        paddingTop: 20,
        marginLeft: 20
        
    },

    header:{
        
        backgroundColor: "#38194D",
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
        justifyContent: "center",
        alignItems: "center",
    },

    nephelium:{
        width: 220,
        height: 50,
        alignSelf: "center",
        marginTop: 15,
    },

    bolas2:{
        width: 450,
        height: 70,
        alignSelf: "center",
        marginTop: 0,
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
        color: '#47126B', 
        fontSize: 30, 
        fontFamily: fonts.text,
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
        marginBottom: 25,
    },

    box:{
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        padding: 15,
        marginTop: 25,
        borderRadius: 20,
       
        shadowOpacity: 0,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1}
        
    },

    box2:{
        backgroundColor:'#9575AA',
        flexDirection: 'row',
        padding: 15,
        marginTop: 10,
        borderRadius: 20,
       
        shadowOpacity: 0,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1}
    },

    box3:{
        backgroundColor: '#D24366',
        flexDirection: 'row',
        padding: 15,
        marginTop: 25,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#000000',
       
        shadowOpacity: 0,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1}
    },


    boxx:{
        paddingTop: 20,
        paddingBottom: 30,
    },

    CaixaInicio:{
        alignSelf: 'center',
    },
    rText:{
        fontSize: 30,
        color: '#47126B',
        fontFamily: fonts.text,
        marginTop:10,
        marginLeft: 70
       
    },

    Inv:{
        backgroundColor: '#ffff',
        height: 150,
        width: 2,
        alignSelf: "center",
        marginLeft: 8,
        marginRight: 8
    },

    tText:{
        fontSize: 14,
        marginLeft:10,
        color: '#ffff'
    },
    
    nephelium:{
            width: 220,
            height: 50,
            alignSelf: "center",
            marginTop: 15,
      
    },


    invisivel:{
        backgroundColor: '#571089',
        height: 2,
        width: 330,
        alignSelf: "center",
        marginTop: 30
    },

    invisivel2:{
        backgroundColor: '#571089',
        height: 2,
        width: 330,
        alignSelf: "center",
        marginTop: 0
    },

    ssText:{
        fontSize: 15,
        color: '#FFFFFF',
        fontFamily: fonts.text,
    },

    sText:{
        fontSize: 20,
        color: '#f0f0f0',
        fontFamily: fonts.text,
    },

    xText:{
        fontSize: 34,
        color: '#786C6C',
        fontFamily: fonts.text,
    },

    xxText:{
        fontSize: 20,
        color: '#786C6C',
        fontFamily: fonts.text,
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
    
    menu:{

        marginTop: 10,

        marginLeft: -60,

        paddingRight: 20

    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 20,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    },

    neph2:{
        width: 50,
        height: 50,    
        marginTop: 14,
        marginRight:300
    },
    lupa:{
        width: 20,
        height: 20,    
        marginTop: 14,
        marginRight:10,
    
    },

    minhao1:{
        width: 119,
        height: 77,
        paddingLeft: 52,
        paddingToptop: 375,

    },

    sugestoes1:{
        backgroundColor:'#9575AA',
        flexDirection: 'row',
        padding: 15,
        marginTop: 560,
        borderRadius: 20,
        shadowOpacity: 0,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1}
    },
     
   imgsugestoes1:{
    height: 52,
    width: 84,
    paddingLeft: 23,
    paddingTop: 565,
    
   },

  
    
})