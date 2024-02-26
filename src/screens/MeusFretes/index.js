import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    SafeAreaView,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    RefreshControl,
    StatusBar,
    Alert,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useIsFocused } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/usuarios/listarMinhoneiro.php`);
   
            setDados(res.data.resultado); 
        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarDados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing (true);
        listarDados();
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                        </TouchableOpacity>
                        <Image style={styles.nephelium} source={require('../../assets/nephelium.png')} />
                    </View>
                </View>

                <View style={styles.Banner}>
                    <Text style={styles.caminhoneiroText}> Meus Fretes</Text>
                </View>

                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.containerBox}>
                        <View style={styles.boxx}>
                       
                            <View style={styles.box2}>
                                <View style={styles.textos}>
                                    <View><Text style={styles.titulo}>Informações do Frete</Text></View>
                                    <View style={styles.invisivel}></View>
                                    {dados.map((data, index) => (
                                        <View key={index}> 
                                         <Text style={styles.sText}>Duração em horas: {data.tempo}</Text>
                                        <Text style={styles.sText}>Rota do Frete: {data.rota}</Text>
                                        <Text style={styles.sText}>Valor: {data.preco}</Text>
                                        <Text style={styles.sText}>Peso: {data.peso} KG</Text> 
                                        <Text style={styles.sText}>Tipo de Frete: {data.tipo}</Text>
                                        <Text style={styles.paragraph}>
                                            {`  `}
                                        </Text>
                                        <Text style={styles.paragraph}>
                                            {`  `}
                                        </Text>
                                        <Text style={styles.paragraph}>
                                            {`  `}
                                            </Text>
                                    </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>
        </View>
    );
}
