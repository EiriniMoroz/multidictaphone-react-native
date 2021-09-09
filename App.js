import React from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity, Image  } from 'react-native';
import{Navbar} from './src/Navbar'
import { MelodyItem } from './src/MelodyItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Navbar />
        <MelodyItem/>
      </View>
      <View style={styles.buttomButton}>
        <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
            <Image source={require("./assets/favicon.png")}/>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  buttomButton: {
    alignItems: 'center',
    //justifyContent: 'center'
    justifyContent: 'flex-end',

    
  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  button: {
    backgroundColor: '#859a9b',
    //borderRadius: 20,
    //padding: 10,
    //marginBottom: 20,
    shadowColor: '#303838',
    //shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
});
