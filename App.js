import React from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import{Navbar} from './src/Navbar'
import { MelodyItem } from './src/MelodyItem';
import { createStackNavigator } from '@react-navigation/native-stack';
import EditModeScreen from './screens/EditModeScreen';
import InitialScreen from './screens/InitialScreen';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={InitialScreen}>
                <Stack.Screen
                  component={InitialScreen}
                  name="InitialScreen"
                  //options={{ headerShown: false }}
                />
                <Stack.Screen
                  component={EditModeScreen}
                  name="EditMode"
                  //options={}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


