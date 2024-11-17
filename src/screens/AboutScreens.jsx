import MainLayout from '../layouts/MainLayout';
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function AboutScreen() {
    const date = new Date();

    return (
        <MainLayout >
            <View style={styles.container}>
                <Text style={styles.text}>To-do App</Text>
                <Text>Arya Perbhaker</Text>
                <Text>{date.toDateString()}</Text>
            </View>
            
        </MainLayout>
    )
}
styles=StyleSheet.create({
    container:{ 
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:20,
        color:"black",
    },
});
export default AboutScreen;