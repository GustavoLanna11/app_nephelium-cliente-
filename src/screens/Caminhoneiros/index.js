

import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    RefreshControl,
    StatusBar,
    FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation, useIsFocused } from '@react-navigation/native';
import api from '../../services/api'; 
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Caminhoneiros() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [isLoading, setIsLoading] = useState(true);
    const [dados, setDados] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get('pam3etim/bd/usuarios/listar.php');
            setDados(res.data.resultado);
        } catch (error) {
            console.log('Erro ao Listar ' + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                   <Image style={styles.nephelium} source={require('../../assets/nephelium.png')} />
                    
                </View>
            </View>

            <View style={styles.Banner}>
                    <Text style={styles.caminhoneiroText}> Calcular Frete & Encontrar Caminhoneiros</Text>
                </View>
            <TouchableOpacity onPress={() => navigation.navigate('CalcularFrete')}>
                            <View style={styles.calculo}>
                                <Text style={styles.calculotxt}>Calcular Frete</Text>
                            </View>
                        </TouchableOpacity>
            <FlatList
                data={dados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.containerBox}>
                       
                        <View style={styles.box}>
                            <Text style={styles.txt}>Nome:  {item.nome}</Text>
                            <Text style={styles.txt}>Telefone:  {item.telefone}</Text>
                            <Text style={styles.txt}>Caminhao: {item.caminhao}</Text>
                            <Text style={styles.txt}>Eixo: {item.eixo}</Text>
                        </View>
                    </View>
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </View>
    );
}

