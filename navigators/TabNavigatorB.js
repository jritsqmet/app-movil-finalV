import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Ejercicio1Screen from '../screens/Ejercicio1Screen';
import Ejercicio2Screen from '../screens/Ejercicio2Screen';
import Ejercicio3Screen from '../screens/Ejercicio3Screen';

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName='Ejercicio3'>
            <Tab.Screen name= 'Ejercicio1' component={Ejercicio1Screen} />
            <Tab.Screen name= 'Ejercicio2' component={Ejercicio2Screen} />
            <Tab.Screen name= 'Ejercicio3' component={Ejercicio3Screen} />
        </Tab.Navigator>
    )
}

export default function TabNavigation2(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}