import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
//import { Splash } from '../lotties/Splash'; 
import AuthRoutes from './tab.routes';
import Caminhoneiros from '../screens/Caminhoneiros';
import MeusFretes from '../screens/MeusFretes';
import Perfil from '../screens/Perfil';
import Usuario from '../screens/Usuario';
import NovoUsuario from '../screens/NovoUsuario';
import CalcularFrete from '../screens/CalcularFrete';
import CriarPost from '../screens/criarPost';
import EditarPerfil from '../screens/EditarPerfil';
import Rastreador from '../screens/Rastreador';



const Stack = createNativeStackNavigator();


function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}
        }>
            
            <Stack.Screen name="Login" component={Login}  />
            <Stack.Screen name="Home" component={AuthRoutes} />      
            <Stack.Screen name="Caminhoneiros" component={Caminhoneiros} /> 
            <Stack.Screen name="MeusFretes" component={MeusFretes} /> 
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="EditarPerfil" component={EditarPerfil}  />
            <Stack.Screen name="Usuario" component={Usuario}  />
            <Stack.Screen name="NovoUsuario" component={NovoUsuario}  />
            <Stack.Screen name="CalcularFrete" component={CalcularFrete}  />
            <Stack.Screen name="CriarPost" component={CriarPost}  />
            <Stack.Screen name="Rastreador" component={Rastreador}  />
        
           
          
        </Stack.Navigator>
    )
}

function AppRoutes(){
    return(
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
export default AppRoutes;