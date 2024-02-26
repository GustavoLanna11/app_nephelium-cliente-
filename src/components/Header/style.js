import { StyleSheet } from "react-native";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        backgroundColor: '#571089',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 60,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 13,
    },

    logo:{
        width: 35,
        height: 35,
        alignSelf: "center",
        marginTop:15,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    tituloHeader:{
        color: 'white', 
        fontSize: 20, 
        fontFamily: fonts.text,
        marginTop: 17,
    },

})