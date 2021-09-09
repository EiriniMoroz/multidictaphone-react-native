import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const MelodyItem = props => {
    return (
        <View style={styles.block}>
            <Text>MelodyName</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row'

    }
})