import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import TabNavigation2 from './navigators/TabNavigatorB';

export default function App() {
  return (
   <TabNavigation2/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
