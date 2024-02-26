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
        justifyContent: "center",
        alignItems: "center",
    },

    nephelium:{
        width: 220,
        height: 50,
        alignSelf: "center",
        marginTop: 15,
    },

    Banner:{
        height: 150,
        backgroundColor: '#D2B1EA'
    },

    neph2:{
        width: 50,
        height: 50,    
        marginTop: 14,
        marginLeft: 20
    },

    perfil:{
        width: 100,
        height: 99,
        marginLeft: 10,
        marginTop: 7
    },

    perfilicon:{
        backgroundColor: '#5C3776',
        width: 120,
        height: 125,
        marginTop: 15,
        marginStart: 140,
        borderRadius: 100
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
        fontSize: 23, 
        fontFamily: fonts.text,
        paddingLeft:50,
    },

    box3:{
        backgroundColor: '#D24366',
        marginTop: 25,
        height: 50,
        borderRadius: 30,
        
    },

    txt:{
        color:'white',
        fontSize: 18,
        paddingTop: 10
    },


    lenghtText2:{
        color: '#000000', 
        fontSize: 20, 
        fontFamily: fonts.text,
        paddingLeft:50,
    },

    



    containerBox:{
        width: '85%',
        alignSelf: "center",
        marginBottom: 25,
    },

    box:{
        flexDirection: 'row',
        padding: 15,
        marginTop:20,
        borderRadius: 20,
    },

    inv:{
        paddingLeft: 10
    },

    
    box3:{
        backgroundColor: '#5C3776',
        marginTop: 15,
        height: 50,
        borderRadius: 30,
        paddingLeft: 60
        
    },

    box111:{
        paddingLeft: 60,
        paddingRight: 60
    },

    box10:{
        paddingLeft: 0
    },

    txt:{
        color:'white',
        fontSize: 18,
        paddingTop: 10,
    },

    caixa1:{
        backgroundColor: '#5C3776',
        height: 3,
        borderRadius: 20,
        width: 300
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
        paddingTop: 20
    },


    

    txtPerfil:{
        color:'white',
        fontSize: 10,
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

    

    

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 20,
    },

    

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
})