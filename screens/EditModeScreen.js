import React from 'react';
import{Navbar} from '../src/Navbar'
import { StyleSheet, Text, View,Button, TouchableOpacity, Image  } from 'react-native';
import { TrackItem } from '../src/TrackItem';

export default function EditModeScreen() {
    return (
        <View style={styles.globalContainer}>
            <View style={styles.contentContainer}>
                <Navbar />
                <TrackItem />
            </View>
        
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{}}>
                    <Image source={require("../assets/favicon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}>
                    <Image source={require("../assets/favicon.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}>
                    <Image source={require("../assets/favicon.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}
    

const styles = StyleSheet.create({
    globalContainer: {
        flex:  1
    },
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
      },
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
      },
});
