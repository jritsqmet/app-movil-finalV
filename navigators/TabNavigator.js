import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Ejercicio1Screen from '../screens/Ejercicio1Screen';
import Ejercicio2Screen from '../screens/Ejercicio2Screen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name= 'Ejercicio1' component={Ejercicio1Screen} />
            <Tab.Screen name= 'Ejercicio2' component={Ejercicio2Screen} />
        </Tab.Navigator>
    )
}

export default function TabNavigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}