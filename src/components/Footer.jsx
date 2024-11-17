import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Footer() {
    return (
        <View style={styles.container}>
            <Text>This app was created using React Native</Text>
        </View>
    );
}
styles = StyleSheet.create({
    container: {
        
        justifyContent: "end",
        backgroundColor: "lightgrey",
        width: "100%",
        padding: 20,
        alignItems: "center",
    },
});

export default Footer;