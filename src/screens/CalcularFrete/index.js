import React, { useState, useEffect } from 'react';
import {ScrollView, Platform, Alert, Picker, Text, TextInput, View, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { Success } from '../../lotties/Success';
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';

import { useIsFocused } from '@react-navigation/native';

 ParamList = {
    Detail: {
       id_reg: string,
        
    }
};

const CalcularFrete = FC= () => {
    const navigation = any = useNavigation();
    const route = useRoute<RouteProp<ParamList; 'Detail';
    const id_reg = route?.params?.id_reg;
    const [tipo, setTipo] = useState("");   
    const [rota, setRota] = useState("");   
    const [preco, setPreco] = useState("");   
    const [peso, setPeso] = useState("");
    const [tempo, setTempo] = useState("");
    const [sucess, setSucess] = useState(false);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    //calculo frete
    const [distancia, setDistancia] = useState('');
    const [numEixo, setnumEixo] = useState('');
    const [valorTabela, setValorTabela] = useState('');
    const [shippingCost, setShippingCost] = useState(null);

    const calculateShippingCost = () => {
        const numEixoFloat = parseFloat(numEixo);
        const distanciaFloat = parseFloat(distancia);
    
        let valor = 0;
    
        if (numEixoFloat === 2) {
          valor = 2.58;
        } else if (numEixoFloat === 3) {
          valor = 3.31;
        } else if (numEixoFloat === 4) {
          valor = 3.78;
        } else if (numEixoFloat === 5) {
          valor = 4.34;
        } else if (numEixoFloat === 6) {
          valor = 4.96;
        } else {
          console.log("Não aceitamos veículos desse porte");
        }
        setValorTabela(valor);
        const cost = numEixoFloat * distanciaFloat * valor;
        setShippingCost(cost);
      };



   
    async function saveData() {            
       
              
           if (tipo == "" || rota == "" || peso == "" || preco == "" || tempo == "") {
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
                tipo: tipo,
                rota: rota,               
                preco: preco,
                peso: peso,
                tempo: tempo,
                distancia: distancia,
                numEixo: numEixo,
                shippingCost: shippingCost,
                
               
                
            }
     
            const res = await api.post('pam3etim/bd/fretes/salvar.php', obj);

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
                const res = await api.get(`pam3etim/bd/fretes/listar_id.php?id=${id_reg}`);

                setTipo(res.data.dados.tipo);              
                setRota(res.data.dados.rota);
                setPreco(res.data.dados.preco);
                setPeso(res.data.dados.peso);
                setTempo(res.data.dados.tempo);

                setDistancia(res.data.dados.distancia);
                setnumEixo(res.data.dados.distancia);
                setShippingCost(res.data.dados.shippingCost)
               
               
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

    
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.push("Caminhoneiros")}
                >
                    <Ionicons name="md-arrow-back-circle-outline" size={35} color="#484a4d" />

                </TouchableOpacity>
                {edit ?
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Inserir Registro</Text>
                    </View>
                    :
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Defina seu frete</Text>
                    </View>
                }
            </View>
             <ScrollView>   
            <View>
                <Text style={styles.TitleInputs}>Tipo de Frete:</Text>
                <TextInput
                    placeholder="Mudanças, transportes etc..."
                    onChangeText={(text) => setTipo(text)}
                    value={tipo}
                    style={styles.TextInput}
                />
            </View>
            <View>
                <Text style={styles.TitleInputs}>Rota:</Text>
                <TextInput
                    placeholder="Digite a rota que será realizada."
                    onChangeText={(text) => setRota(text)}
                    value={rota}
                    style={styles.TextInput}
                />
            </View>
            <View>
                <Text style={styles.TitleInputs}>Preço calculado:</Text>
                <TextInput
                    placeholder="Digite o preço estimulado pelo calculador de fretes abaixo."
                    onChangeText={(text) => setPreco(text)}
                    value={preco}
                    style={styles.TextInput}
                   
                />
            </View>
            <View>
                <Text style={styles.TitleInputs}>Peso estimulado:</Text>
                <TextInput
                    placeholder="Peso"
                    onChangeText={(text) => setPeso(text)}
                    value={peso}
                    style={styles.TextInput} 
                />
            </View>
            <View>
                <Text style={styles.TitleInputs}>Tempo de transporte:</Text>

                <TextInput
                    placeholder="Em horas"
                    onChangeText={(text) => setTempo(text)}
                    value={tempo}
                    style={styles.TextInput}
                   
                />
            </View>           
                

                <View style={{  marginTop: 0 }}> 
      <Text style={{ marginTop: 10, marginLeft: 30, fontSize: 17 }}>Calculadora de Fretes</Text>
      <TextInput
        placeholder="Distância"
        value={distancia}
        onChangeText={(text) => setDistancia(text)}
        keyboardType="numeric"
        style={styles.TextInput} 
       
      />

      <TextInput
        placeholder="Número de Eixos"
        value={numEixo}
        onChangeText={(text) => setnumEixo(text)}
        style={styles.TextInput} 
        keyboardType="numeric"
      />

      <View style={{ marginRight: 70, marginLeft: 70, borderRadius: 20 }}>
      <Button title="Calcular Frete" onPress={calculateShippingCost} 
        style={{ marginRight: 30, marginLeft: 30 }}
      />
      {shippingCost !== null && (
        <Text>Custo de Frete: R$ {shippingCost.toFixed(2)}</Text>
      )}
    </View>
        
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

export default CalcularFrete;