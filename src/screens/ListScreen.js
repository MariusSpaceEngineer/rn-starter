import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: "42" },
    { name: "Friend 2", age: "21" },
    { name: "Friend 3", age: "23" },
    { name: "Friend 4", age: "35" },
    { name: "Friend 5", age: "70" },
    { name: "Friend 6", age: "52" },
    { name: "Friend 7", age: "29" },
  ];

  return (
    <FlatList
      keyExtractor={(friends) => friends.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
  },
});

export default ListScreen;
