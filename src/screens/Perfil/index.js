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
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [usu, setUsu] = useState('');

    async function listarDados() {
        try {
            const user = await AsyncStorage.getItem('@user');
            const res = await api.get(`pam3etim/bd/usuarios/listar.php`);
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
        setRefreshing(true);
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

                <View>
                    <View style={styles.Banner}>
                        <View style={styles.perfilicon}>
                            <Image style={styles.perfil} source={require('../../assets/duvida.png')} />
                        </View>
                    </View>
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
                    {dados.map((data, index) => (
                        <View key={index}>
                            <View style={styles.containerBox}>
                                <View>
                                    <View style={styles.box}>
                                        <View style={styles.textos}>
                                            <Text style={styles.lenghtText}>Informações Básicas{}</Text>
                                            <Text style={styles.paragraph}>
                                                {`  `}
                                            </Text>
                                            <Text style={styles.sText}>Nome: {data.nome} </Text>
                                            <View style={styles.caixa1}></View>
                                            <Text style={styles.sText}>Email: {data.email} </Text>
                                            <View style={styles.caixa1}></View>
                                            <Text style={styles.sText}>Telefone: {data.telefone} </Text>
                                            <View style={styles.caixa1}></View>
                                            <Text style={styles.paragraph}>
                                                {`  `}
                                            </Text>
                                            <View style={styles.inv}>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate("EditarPerfil")}>
                                    <View style={styles.box111}>
                                        <View style={styles.box10}>
                                            <View style={styles.box3}>
                                                <Text style={styles.txt}>Editar Perfil</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}
