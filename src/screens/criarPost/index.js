import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { RouteProp,useRoute } from '@react-navigation/core';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import { useIsFocused } from '@react-navigation/native';
import api from '../../services/api';
import { styles } from '../NovoUsuario/style';

const CriarPost = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();


  const id_reg = route?.params?.id_reg;

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [eixo, setEixo] = useState('');
  const [caminhao, setCaminhao] = useState('');

  const saveData = async () => {
    try {
      const obj = {
        id: id_reg,
        nome: nome,
        endereco: endereco,
        caminhao: caminhao,
        eixo: eixo,
      };

      const res = await api.post('pam3etim/bd/usuarios/salvarMinhao.php', obj);

      if (res.data.sucesso === false) {
        showMessage({
          message: 'Erro ao Salvar',
          description: res.data.mensagem,
          type: 'warning',
          duration: 3000,
        });

        return;
      }

      showMessage({
        message: 'Salvo com Sucesso',
        description: 'Registro Salvo',
        type: 'success',
        duration: 800,
      });
      navigation.push('Home');
    } catch (error) {
      Alert.alert('Ops', 'Alguma coisa deu errado, tente novamente.');
    }
  };

  useEffect(() => {
    async function loadData() {
      try {
        if (id_reg !== '0') {
          const res = await api.get(
            `pam3etim/bd/usuarios/listarMinhao.php?id=${id_reg}`
          );

          setNome(res.data.dados.nome);
          setCaminhao(res.data.dados.caminhao);
          setEixo(res.data.dados.eixo);
          setEndereco(res.data.dados.endereco);
        }
      } catch (error) {
        console.log('Error ao carregar os Dados');
      }
    }

    loadData();
  }, [id_reg]);

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => navigation.push('Caminhoneiros')}
        >
          <Ionicons name="md-arrow-back-circle-outline" size={35} color="#484a4d" />
        </TouchableOpacity>

        <View style={styles.Title}>
          <Text style={styles.TitleText}>Inserir Registro</Text>
        </View>
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
          <Text style={styles.TitleInputs}>Endereço</Text>
          <TextInput
            placeholder="Endereço"
            onChangeText={(text) => setEndereco(text)}
            value={endereco}
            style={styles.TextInput}
          />
        </View>

        <View>
          <Text style={styles.TitleInputs}>Caminhão</Text>
          <TextInput
            placeholder="Caminhão"
            onChangeText={(text) => setCaminhao(text)}
            value={caminhao}
            style={styles.TextInput}
          />
        </View>

        <View>
          <Text style={styles.TitleInputs}>Eixo</Text>
          <TextInput
            placeholder="Eixo"
            onChangeText={(text) => setEixo(text)}
            value={eixo}
            style={styles.TextInput}
          />
        </View>

        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            saveData();
          }}
        >
          <Text style={styles.ButtonText}>Salvar Registro</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CriarPost;
