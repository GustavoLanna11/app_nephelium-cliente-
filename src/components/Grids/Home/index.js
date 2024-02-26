import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {Image, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';

import { showMessage, hideMessage } from "react-native-flash-message";
import { EvilIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

//o home será feito nessa pasta, todas as informações e styles tem que ser passadas pra cá (import e tudo mais pipipi)

const DadosProps= {
    data: {
        id: string,
        nome: string,
        telefone: string,        
        caminhao: string,
        eixo:string,
        foto: string,        
    }
}

CardUsuarios = ({ data }= DadosProps) => {
    const [abrirModal, setAbrirModal] = useState(false);
    const navigation= any = useNavigation();
    
        
    return (
        <>
            {data.id === undefined && data.nome === undefined ?
               
               <Text style={{ color: '#595858', fontSize: 14, marginTop:10, alignContent:"center", textAlign:"center" }}>Nenhum Registro Encontrado!</Text>
                
                :

                <View>
                     <SwipeableRow
                        onPressWhatsapp={async () => {
                            await Linking.openURL(`http://api.whatsapp.com/send?1=pt_BR&phone=55${data.nome}`)
                        }}

                        onPressEdit={async () => {
                            navigation.push('NovoUsuario', { id_reg: data.id });
                        }}

                        onPressDelete={async () => {
                            excluir(data.nome, data.id);
                        }}
                    >     


                        <View style={styles.boxx}>
                                    <View style={styles.textos}>
                                        <Text style={styles.xxText}>Acompanhe seu frete:{}</Text>
                                    </View>
                                    <View style={styles.box2}>
                                            <View>
                                                <Text style={styles.ssText}>Fretado por:</Text>
                                                <Text style={styles.sText}>{data.nome}</Text>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>

                                                <Text style={styles.ssText}>Caminhão:</Text>  
                                                <Text style={styles.sText}>{data.caminhao}</Text>  
                                            </View>

                                            <View style={styles.Inv}></View>

                                            <View>
                                                <Text style={styles.ssText}>Telefone:</Text>
                                                <Text style={styles.sText}>{data.telefone}</Text>

                                                <Text style={styles.paragraph}>
                                                    {`  `}
                                                </Text>

                                                <Text style={styles.ssText}>Eixo:</Text>  
                                                <Text style={styles.sText}>{data.eixo}</Text>  
                                            </View>
                                     </View>
                                </View>

                        </SwipeableRow>
                   
                </View>
            }
        </>
    );
}

export default CardUsuarios;