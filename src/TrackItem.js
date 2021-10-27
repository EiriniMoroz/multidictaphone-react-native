import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export const TrackItem = (props) => {
    const {onPress} = props;
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>TrackName</Text>
            </View>
            <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={()=>{}}>
                        <Image source={require("../assets/recordButton.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPress}>
                        <Image source={require("../assets/croce.png")}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        //flex: 1,
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        fontSize: 30
    },
    buttons: {
        alignItems: 'flex-end',
        //justifyContent: 'space-around',
        flexDirection: 'row',

    }
})