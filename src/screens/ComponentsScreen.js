import React from "react"
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting= <Text style={styles.textStyle}>What's up boys! I'm writing code after a long break! Whoop Whoop</Text>
    return <View>
        {greeting}
        <Text>Hiello</Text>
    </View> 
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen