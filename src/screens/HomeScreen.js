import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("List")}
      ></Button>
      <Button
        title="Go to Image Demo"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to the Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to the Color Demo"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to the Square Demo"
        onPress={() => props.navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
