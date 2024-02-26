import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        
        backgroundColor: '#B01A3E',
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

    bolas:{
        width: 410,
        height: 60,
        alignSelf: "center",
        marginTop: 0,
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
        fontSize: 25, 
        fontFamily: fonts.text,
        paddingLeft:45,
        marginTop: 20,
    },

    inv:{
        paddingLeft: 10
    },
    invisible:{
        backgroundColor: 'black',
        height: 3,
        borderRadius: 20,
        width: 300
    },

    lenghtText2:{
        color: '#000000', 
        fontSize: 20, 
        fontFamily: fonts.text,
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

    /*box:{
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        padding: 15,
        marginTop: 25,
        borderRadius: 20,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
        
    },*/

    box2:{
        backgroundColor:'#D9D9D9',
        flexDirection: 'row',
        padding: 15,
        marginTop: 30,
        borderRadius: 20,
        
        shadowOpacity: 0.1,
        elevation: 10,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
    },

    box3:{
        backgroundColor: '#D24366',
        flexDirection: 'row',
        padding: 15,
        marginTop: 25,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#000000',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 1},
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

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
})