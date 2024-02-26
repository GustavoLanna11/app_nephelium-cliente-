import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

const DadosProps = {
    title: string=""    
}

export const Header = ({ title }= DadosProps) => {
    const navigation= any = useNavigation();

    return(
        <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.push("Home")}
                    >
                        <Ionicons name="md-arrow-back-circle-outline" size={35} color= "#38194D"
 />
                    </TouchableOpacity>
     
                    <Text style={styles.tituloHeader}>{title}</Text>
                </View>
            </View>
    )

}
export default Header;