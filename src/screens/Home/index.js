import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {styles} from './style';
import { ScrollView, ActivityIndicator, FlatList, Image, TextInput, TouchableOpacity, View, Dimensions, Alert, Text } from 'react-native';
import { DrawerActions } from "@react-navigation/native";
import Header from '../../components/Header';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
import Grid from '../../components/Grids/Home';

export default function Usuario() {

  const navigation = useNavigation();


    const [lista, setLista] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [busca, setBusca] = useState("");
    const [mostra, setMostra] = useState("");
    


    async function listarDados() {        
      try {
          const response = await api.get(`pam3etim/bd/usuarios/listar.php?pagina=${page}&limite=10`);

          if(lista.length >= response.data.totalItems) return;

          if (loading === true) return;
    
          setLoading(true);
    
          setLista([...lista, ...response.data.resultado]);
          setPage(page + 1);
        } catch (error) {
          console.log(error)
        }
  }
  const renderItem = function ({ item }) {
    return (
        <Grid
            data={item}
        />
    )
}
  function Footer() {
    //if (!load) return null;

    return (
        <View style={styles.loading}>
            <ActivityIndicator size={25} color="#000" />
        </View>
    )
}
  async function Search() {
    const response = await api.get(`pam3etim/bd/usuarios/buscar.php?buscar=${busca}`);
    setLista(response.data.resultado);
 }

 useEffect(() => {
  listarDados();
}, [page, totalItems, lista]);



  return (


    <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>

                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                        <MaterialIcons name="menu" size={35} color="white" style={styles.icon}/>
                        </TouchableOpacity>
                        <View>
                            <Image style={styles.nephelium} source={require('../../assets/nephelium.png')} />
                        </View>

                    </View>
                </View>
                <Image style={styles.bolas2} source={require('../../assets/bolas2.png')} />
                {/*<View style={styles.Banner}>
                        <Text style={styles.caminhoneiroText}>Home</Text>
                </View> */}

                

        <View style={{ flex: 1, height: Dimensions.get('window').height + 30, }}>

        {/*........*/}
        
        <View style={styles.containerBox}>

<TouchableOpacity onPress={() => navigation.navigate("Usuario")}>

</TouchableOpacity>
    
    <View>
        <View style={styles.box}>
            
            <View style={styles.textos}>
                <Text style={styles.rText}>Bem-Vindo!</Text>
                
                
            </View>
        </View>
    </View>

    <View style={styles.boxx}> 

   
   
    <TouchableOpacity onPress={() => navigation.navigate("Caminhoneiros")}>
        <View style={styles.box2}>
            <View style={styles.textos}>
                <View>
                    <Text style={styles.sText}>Deseja calcular um frete, ou, está procurando alguém para realizar seu transporte? clique aqui!</Text>
                    
                </View>
                
            </View>
        </View>

        <Text style={styles.paragraph}>
                        {`  `}
                    </Text>
        </TouchableOpacity>

        <View style={styles.box2}>
            <View style={styles.textos}>
                <View>
                <Text style={styles.paragraph}>
                        {`  `}
                    </Text>
                    <Text style={styles.sText}>Sugestão para você:</Text>
                    <Text style={styles.paragraph}>
                        {`  `}
                    </Text>
                    <Text style={styles.sText}>Nome:  João Guerra</Text>
                    <Text style={styles.sText}>Telefone:  13 999998888</Text>
                    <Text style={styles.sText}>Caminhão:  Scania 113</Text>
                    <Text style={styles.sText}>Eixo:  2</Text>
                    <Text style={styles.paragraph}>
                        {`  `}
                    </Text>

                  
                    
                </View>
                
            </View>
        </View>
    </View>
</View>
{/*........*/}

                
                    <FlatList
                        data={page}
                        renderItem={renderItem}
                        keyExtractor={item => String(item.id)}
                        onEndReachedThreshold={0.1}
                        removeClippedSubviews
                        initialNumToRender={10}
                    />
                </View>
             
                <View style={styles.containerFloat}>
                    <TouchableOpacity
                        style={styles.CartButton}
                        onPress={() => navigation.push("NovoUsuario", { id_reg: '0' })}
                    >
                        <Ionicons name="add-outline" size={35} color="#fff" />
                    </TouchableOpacity>
                </View>
      </View>

    </View>
  )
}