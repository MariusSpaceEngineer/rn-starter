import React from "react";
import { Text, View, StyleSheet } from "react-native";

const JsxExercise = ()=> {
    const name= "Marius"
    return <View>
        <Text style={styles.title}>Getting started with React Native!</Text>
        <Text style={styles.normalText}>My name is {name}</Text>
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    },
    normalText: {
        fontSize: 20
    }
})

export default JsxExercise