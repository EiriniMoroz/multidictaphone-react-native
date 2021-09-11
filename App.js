import React from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditModeScreen from './screens/EditModeScreen';
import InitialScreen from './screens/InitialScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={InitialScreen}>
                <Stack.Screen
                  component={InitialScreen}
                  name="InitialScreen"
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  component={EditModeScreen}
                  name="EditMode"
                  options={{ headerShown: false }}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


