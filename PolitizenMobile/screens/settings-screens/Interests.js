import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

//array of interests
const interests = [
  "Climate",
  "Technology",
  "Travel",
  "Finance",
  "LGBTQ+",
  "Healthcare",
  "Abortion",
  "Education",
  "Immigration",
];

export default function Interests() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Yo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#dde4e5",
    alignItems: "center",
  },

  interests: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 30,
    margin: 10,
    borderRadius: 15,
    width: "80%",
    alignSelf: "flex-start",
  },

  text: {
    alignSelf: "center",
  },
});
