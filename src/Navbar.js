import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>MultiDictaphone</Text>
    </View>
  )
}

const styles  = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: 'flex-start',
        paddingLeft: 10,
        justifyContent: 'flex-end', 
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }

    
})