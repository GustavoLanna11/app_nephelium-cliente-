import React, { useState, useEffect } from 'react';
import {ScrollView, Platform, Alert, Picker, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { Success } from '../../lotties/Success';
//import { TextInputMask } from 'react-native-masked-text';
//import DateTimePicker from '@react-native-community/datetimepicker';
//import { format } from 'date-fns';
import { showMessage, hideMessage } from "react-native-flash-message";

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';

 ParamList = {
    Detail: {
       id_reg: string,
        
    }
};


const NovoUsuario= FC= () => {
    const navigation = any = useNavigation();

    const route = useRoute<RouteProp<ParamList; 'Detail';
    const id_reg = route?.params?.id_reg;
       
    const [nome, setNome] = useState("");   
    const [email, setEmail] = useState("");   
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [eixo, setEixo] = useState("");
    const [caminhao, setCaminhao] = useState("");
  
       
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
   
    async function saveData() {            
       
              
           if (nome == "" || email == "" || senha == "") {
            showMessage({
                message: "Erro ao Salvar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }

        try {
            const obj = {
                id: id_reg,
                nome: nome,               
                email: email,
                senha: senha,
                telefone: telefone,
                caminhao: caminhao,
                eixo: eixo,
                
            }
     
            const res = await api.post('pam3etim/bd/usuarios/salvar.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.mensagem,
                    type: "warning",
                    duration: 3000,
                });

                return;
            }

            setSucess(true);
            showMessage({
                message: "Salvo com Sucesso",
                description: "Registro Salvo",
                type: "success",
                duration: 800,
            });
            navigation.push("Home")

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    

    async function loadData() {
        
        try {
            setLoading(true);
            if (id_reg != "0") {
                const res = await api.get(`pam3etim/bd/usuarios/listar_id.php?id=${id_reg}`);

                               
                setNome(res.data.dados.nome);
                setEmail(res.data.dados.email);
                setSenha(res.data.dados.senha);
                //setCaminhao(res.data.dados.caminhao);
                //setEixo(res.data.dados.eixo);
                setTelefone(res.data.dados.telefone);
               
                setEdit(false);
                
            } else {
                setEdit(true);
            }
        } catch (error) {
            console.log('Error ao carregar os Dados');
        }
    }

     
        
    useEffect(() => {
        loadData().then(() => setLoading(false))
    }, [])

    if (loading === true) {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
            </View>
        )
    }

    if (sucess) {
        return <Success />
    }
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.push("Login")}
                >
                    <Ionicons name="md-arrow-back-circle-outline" size={35} color="#484a4d" />

                </TouchableOpacity>
                {edit ?
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Inserir Registro</Text>
                    </View>

                    :

                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Cadastrar Novo Usuário</Text>
                    </View>
                }

            </View>

             <ScrollView>   
            <View>
                <Text style={styles.TitleInputs}>Nome completo</Text>

                <TextInput
                    placeholder="Nome completo"
                    onChangeText={(text) => setNome(text)}
                    value={nome}
                    style={styles.TextInput}
                />
            </View>


            <View>
                <Text style={styles.TitleInputs}>Email</Text>

                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    style={styles.TextInput}
                   
                />
            </View>



            
            <View>
                <Text style={styles.TitleInputs}>Senha</Text>

                <TextInput
                  secureTextEntry={true}
                    placeholder="Senha"
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    style={styles.TextInput}
                   
                />
            </View>


            
            <View>
                <Text style={styles.TitleInputs}>Telefone</Text>

                <TextInput
                    placeholder="Telefone"
                    onChangeText={(text) => setTelefone(text)}
                    value={telefone}
                    style={styles.TextInput}
                   
                />
            </View>

            

           
        
           
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        setSucess(true);
                        saveData();
                        setSucess(false);
                    }}
                >
                    <Text style={styles.ButtonText}>Salvar Registro</Text>
                </TouchableOpacity>

                </ScrollView>

               
    

        </View>
    );
}

export default NovoUsuario;