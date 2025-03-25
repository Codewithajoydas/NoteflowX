import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Task from './Screens/Task';
import Upload from './Screens/Upload';
import Setting from './Screens/Setting';
import Navigation from './Components/Navigation';
import Ai from './Screens/Ai';
export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <Navigation {...props} />} screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='AI' component={Ai} />
        <Tab.Screen name='Upload' component={Upload}/>
        <Tab.Screen name='Task' component={Task}/>
        <Tab.Screen name='Setting' component={Setting}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
